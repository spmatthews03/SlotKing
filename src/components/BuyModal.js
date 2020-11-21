import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {
    CLOSE_BUTTON,
    PURCHASE_10000,
    PURCHASE_50000
} from "../constants/imageConstants";
import RNIap from 'react-native-iap';


const BuyModal = (navigation) => {
    const navigator = navigation.navigation;

    async function getChips(productId){
        try{
            await RNIap.requestPurchase(productId, false);
            navigator.goBack();
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
        backgroundColor: '#0f2636',
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
        color:'white',
        fontSize:38
    },
    centeredView: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    }
})
