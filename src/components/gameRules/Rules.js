import React, {useState} from 'react';
import {Image, Modal, StyleSheet, Text, TouchableOpacity, View, ScrollView} from "react-native";
import {CLOSE_BUTTON} from "../../constants/imageConstants";
import {useSelector} from "react-redux";
import Swiper from "react-native-swiper";

const Rules = (props) => {
    const gameVersion = useSelector(state => state.versionReducer.version)

    function versionSwiper(){
        if(gameVersion == "3x3"){
            return(
                <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                    <ScrollView
                        style={{margin:10}}
                        contentContainerStyle={{justifyContent: 'center', alignItems:'center'}}>
                        <Text style={styles.ruleText}>
                            Nine cards will be dealt on the table. After the first deal, select the cards you want
                            to keep. Once you've selected your cards, hit 'Draw' to deal the next round of cards.
                            Your winnings will then be calculated.
                        </Text>
                        <Text style={styles.ruleText}>
                            You are paid out for connecting 2 or 3 cards,
                            as shown on the next slide.
                            There are 16 lines in the 3x3 version, so a minimum bet of 16 will allow you to play
                            all the lines.
                        </Text>
                    </ScrollView>
                </View>
            )
        } else {
            return (
                <Swiper style={{width:'99%'}} showsButtons={true}>
                    <ScrollView
                        style={{margin:10}}
                        contentContainerStyle={{justifyContent: 'center', alignItems:'center'}}>
                        <Text style={styles.ruleText}>
                            Sixteen cards will be dealt on the table. After the first deal, select the cards you want
                            to keep. Once you've selected your cards, hit 'Draw' to deal the next round of cards.
                            Your winnings will then be calculated.
                        </Text>
                        <Text style={styles.ruleText}>
                            You are paid out for connecting 3 or 4 cards,
                            as shown on the next slide.
                            There are 20 lines in the 4x4 version, so a minimum bet of 20 will allow you to play
                            all the lines.
                        </Text>
                    </ScrollView>
                </Swiper>
            )
        }
    }





    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.isVisible}
            onRequestClose={() => {
                props.setModalVisibility();
            }}
        >
            <View style={styles.modalCenteredView}>
                <View style={styles.ruleModal}>
                    <View style={{justifyContent: 'center', alignItems:'center'}}>
                        <Text style={styles.ruleTitle}>Hold & Draw Rules</Text>
                    </View>
                    {versionSwiper()}
                    <View style={{height:40, width:40}}>
                        <TouchableOpacity
                            onPress={() => {
                                props.setModalVisibility();
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

export default Rules;

var styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding:100
    },
    ruleModal: {
        width:'95%',
        height:'85%',
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
    modalCenteredView: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    ruleText: {
        fontSize: 24,
        marginTop: 15,
        letterSpacing:3,
        textAlign: "center",
        textAlignVertical:'center',
        color:'white',
        fontFamily:'PlayfairDisplay-Bold'
    },
    ruleTitle: {
        marginTop: 15,
        fontSize:30,
        textAlign: "center",
        color:'white',
        fontFamily:'PlayfairDisplay-BoldItalic'
    },
})
