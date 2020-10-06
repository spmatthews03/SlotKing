import React, {useState} from 'react';
import {Image, Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {CLOSE_BUTTON} from "../constants/imageConstants";


const PriceboardModal = (props) => {

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
                    <Text style={styles.modalText}>Hello World!</Text>
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

export default PriceboardModal;

var styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding:100
    },
    modalView: {
        width:'75%',
        height:'50%',
        margin: 20,
        backgroundColor: '#0f2636',
        borderRadius: 20,
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
    centeredView: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
})
