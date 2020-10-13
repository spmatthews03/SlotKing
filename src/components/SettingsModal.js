import React, {useState} from 'react';
import {Image, Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {CLOSE_BUTTON} from "../constants/imageConstants";
import {Switch} from "react-native-gesture-handler";
import SwitchSelector from "react-native-switch-selector";


const SettingsModal = (props) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible}
            onRequestClose={() => {
                props.setVisible(!props.visible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {/*<View style={{flexDirection:'row'}}>*/}
                    {/*    <Text style={styles.modalText}>Sound</Text>*/}
                    {/*    <Switch*/}
                    {/*        trackColor={{ false: "#767577", true: "#81b0ff" }}*/}
                    {/*        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}*/}
                    {/*        ios_backgroundColor="#3e3e3e"*/}
                    {/*        onValueChange={toggleSwitch}*/}
                    {/*        value={isEnabled}*/}
                    {/*    />*/}
                    {/*</View>*/}
                    {/*<View style={{alignItems:'space-between', flexDirection:'row'}}>*/}
                    {/*    <Text style={styles.modalText}>Card Color</Text>*/}
                    {/*    <View style={{width:'40%'}}>*/}
                    {/*        <SwitchSelector*/}
                    {/*            options={options}*/}
                    {/*            hasPadding*/}
                    {/*            textCStyle={styles.textContainerSwitch}*/}
                    {/*            textStyle={styles.switchText}*/}
                    {/*            textColor={"gold"}*/}
                    {/*            buttonColor={"#0f4660"}*/}
                    {/*            selectedTextStyle={styles.switchTextSelected}*/}
                    {/*            backgroundColor={"#0f2636"}*/}
                    {/*            borderColor={"gold"}*/}
                    {/*            selectedColor={'gold'}*/}
                    {/*            initial={0}*/}
                    {/*            onPress={value => console.log('Hello')}*/}
                    {/*        />*/}
                    {/*    </View>*/}
                    {/*</View>*/}
                    <Text style={styles.modalText}>Hello World!</Text>
                    <View style={{height:40, width:40}}>
                        <TouchableOpacity
                            onPress={() => {
                                props.setVisible(!props.visible);
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

export default SettingsModal;

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
