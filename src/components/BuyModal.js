import React, {useState} from 'react';
import {Image, ImageBackground, Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {
    CLOSE_BUTTON,
    PURCHASE_10000,
    PURCHASE_50000
} from "../constants/imageConstants";

const BuyModal = (props) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.isVisible}
            onRequestClose={() => {
                props.setPriceboardVisibility();
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
                                onPress={() => console.log("Hello")}>
                                <Image
                                    style={{width:'100%', height:'100%', resizeMode:'contain'}}
                                    source={PURCHASE_10000}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                            <TouchableOpacity
                                style={{width:200, height:200, padding:3, justifyContent:'center'}}
                                onPress={() => console.log("Hello")}>
                                <Image
                                    style={{width:'100%', height:'100%', resizeMode:'contain'}}
                                    source={PURCHASE_50000}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{height:40, width:40}}>
                        <TouchableOpacity
                            onPress={() => {
                                props.setPriceboardVisibility();
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
