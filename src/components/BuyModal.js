import React, {useEffect, useState} from 'react';
import {Image, Modal, StyleSheet, Text, TouchableOpacity, View, Alert} from "react-native";
import {
    CLOSE_BUTTON,
    PURCHASE_10000,
    PURCHASE_50000
} from "../constants/imageConstants";
import RNIap, {
    InAppPurchase,
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
const BuyModal = (navigation) => {
    const navigator = navigation.navigation;
    const [products, setProducts] = useState();
    const [log, setLog] = useState();
    const dispatch = useDispatch();
    let purchaseCoinsUpdate;
    let purchaseCoinsError;

    useEffect(() => {
        setUpStore();
        return() => {
            if(purchaseCoinsUpdate){
                purchaseCoinsUpdate.remove();
                purchaseCoinsUpdate = null;
            }
            if (purchaseCoinsError) {
                purchaseCoinsError.remove();
                purchaseCoinsError = null;
            }
            RNIap.endConnection();};
    }, [])

    async function dispatchConsumable(productId) {
        if(productId === '10000_coins')
            dispatch({type:HOLD_DRAW_ADD_WINNINGS, payload: 10000});
        else
            dispatch({type:HOLD_DRAW_ADD_WINNINGS, payload: 50000});
        navigator.goBack();
    }

    async function setUpStore() {

        await RNIap.initConnection().then(() => {
            getProducts();
            RNIap.consumeAllItemsAndroid();
            RNIap.flushFailedPurchasesCachedAsPendingAndroid().catch(() => {
            }).then(() => {
                setLog(log + "Connection Successful");

                purchaseCoinsUpdate = purchaseUpdatedListener(async (purchase: InAppPurchase | ProductPurchase ) => {
                    const receipt = purchase.transactionReceipt;

                    if (receipt) {
                        try{
                            await RNIap.finishTransaction(purchase,true);
                        } catch(err) {
                            console.warn('Acknowledge Error:', err);
                        }
                        dispatchConsumable(purchase.productId);
                    }
                });

                purchaseCoinsError = purchaseErrorListener((error: PurchaseError) => {
                    console.warn('purchaseErrorListener', error);
                    Alert.alert('Purchasing Error. Try again in a little while.');
                });
            })
        })
    }

    async function getProducts(){
        try{
            const products: Products[] = await RNIap.getProducts(itemSkus);
            setProducts(products);
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
                            navigator.goBack();
                        }}
                    >
                        <Image style={{width:'100%',height:'100%', resizeMode:'contain'}} source={CLOSE_BUTTON}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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
