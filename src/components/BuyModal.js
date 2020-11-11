import React, {useEffect, useState} from 'react';
import {Image, Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {
    CLOSE_BUTTON,
    PURCHASE_10000,
    PURCHASE_50000
} from "../constants/imageConstants";
import RNIap, {
    purchaseErrorListener,
    purchaseUpdatedListener,
    type ProductPurchase,
    type PurchaseError
} from 'react-native-iap';
import {useDispatch} from "react-redux";
import {HOLD_DRAW_ADD_WINNINGS} from "../constants/actionTypes";

const itemSkus = Platform.select({
    ios: [
        'com.slotking2.10000_coins',
        'com.slotking2.50000_coins'
    ],
    android: [
        '10000_coins',
        '50000_coins'
    ]
});
const BuyModal = (props) => {
    const [products, setProducts] = useState();
    const [log, setLog] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        setUpStore();
    }, [])

    async function dispatchConsumable(productId) {
        if(productId === '10000_coins')
            dispatch({type:HOLD_DRAW_ADD_WINNINGS, payload: 10000});
        else
            dispatch({type:HOLD_DRAW_ADD_WINNINGS, payload: 50000});
    }

    async function setUpStore() {

        await RNIap.initConnection().then(() => {
            console.log()
            getProducts();
            // we make sure that "ghost" pending payment are removed
            // (ghost = failed pending payment that are still marked as pending in Google's native Vending module cache)
            RNIap.flushFailedPurchasesCachedAsPendingAndroid().catch(() => {
                // exception can happen here if:
                // - there are pending purchases that are still pending (we can't consume a pending purchase)
                // in any case, you might not want to do anything special with the error
            }).then(() => {
                setLog(log + "Connection Successful");

                this.purchaseUpdateSubscription = purchaseUpdatedListener((purchase: InAppPurchase | SubscriptionPurchase | ProductPurchase ) => {
                    console.log('purchaseUpdatedListener', purchase);
                    const receipt = purchase.transactionReceipt;
                    setLog(log + receipt);

                    if (receipt) {
                        dispatchConsumable(purchase.productId)
                            .then( async (deliveryResult) => {
                                setLog(log + "dispatched!!!!!!");
                                if (true) {
                                    // Tell the store that you have delivered what has been paid for.
                                    // Failure to do this will result in the purchase being refunded on Android and
                                    // the purchase event will reappear on every relaunch of the app until you succeed
                                    // in doing the below. It will also be impossible for the user to purchase consumables
                                    // again until you do this.
                                    if (Platform.OS === 'ios') {
                                        await RNIap.finishTransactionIOS(purchase.transactionId);
                                    } else if (Platform.OS === 'android') {
                                        // If consumable (can be purchased again)
                                        await RNIap.consumePurchaseAndroid(purchase.purchaseToken);
                                        // If not consumable
                                        await RNIap.acknowledgePurchaseAndroid(purchase.purchaseToken);
                                    }

                                    // From react-native-iap@4.1.0 you can simplify above `method`. Try to wrap the statement with `try` and `catch` to also grab the `error` message.
                                    // If consumable (can be purchased again)
                                    await RNIap.finishTransaction(purchase, true);
                                    // If not consumable
                                    await RNIap.finishTransaction(purchase, false);
                                } else {
                                    // Retry / conclude the purchase is fraudulent, etc...
                                }
                            });
                    }
                });

                this.purchaseErrorSubscription = purchaseErrorListener((error: PurchaseError) => {
                    console.warn('purchaseErrorListener', error);
                });
            })
        })
    }

    async function getProducts(){
        try{
            const products: Products[] = await RNIap.getProducts(itemSkus);
            setProducts(products);
            console.log(products);
        } catch (e) {
            console.log("Error Retrieving Products");
        }
    }

    async function getChips(productId){
        try{
            await RNIap.requestPurchase(productId, false);
        } catch (e) {
            console.log("Error Retrieving" + productId + " chips");
        }
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.isVisible}
            onRequestClose={() => {
                props.setVisibility();
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{height:75, justifyContent:'center', alignItems:'center'}}>
                        <Text style={styles.priceboardText}>Purchase Chips</Text>
                    </View>
                    <View style={{width:'100%', flex:1}}>
                        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                            <TouchableOpacity
                                style={{width:200, height:200, padding:3, justifyContent:'center'}}
                                onPress={() => getChips('10000_coins')}>
                                <Image
                                    style={{width:'100%', height:'100%', resizeMode:'contain'}}
                                    source={PURCHASE_10000}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                            <TouchableOpacity
                                style={{width:200, height:200, padding:3, justifyContent:'center'}}
                                onPress={() => getChips('50000_coins')}>
                                <Image
                                    style={{width:'100%', height:'100%', resizeMode:'contain'}}
                                    source={PURCHASE_50000}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{height:40, width:40}}>
                        <TouchableOpacity
                            onPress={() => {
                                props.setVisibility();
                            }}
                        >
                            <Image style={{width:'100%',height:'100%', resizeMode:'contain'}} source={CLOSE_BUTTON}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default BuyModal;

var styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding:100
    },
    modalView: {
        width: '100%',
        height: '100%',
        // margin: 20,
        backgroundColor: '#0f2636',
        // borderRadius: 20,
        // borderColor:'#ae8625',
        borderWidth:1,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    priceboardText: {
        fontFamily:'PlayfairDisplay-Bold',
        // color:'#f7ef8a',
        color:'white',
        fontSize:38
    },
    centeredView: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    }
})
