import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, StatusBar, TouchableOpacity, Image, Text, Modal, Alert } from 'react-native';
import MenuFooter from '../components/footers/MenuFooter';
import { TABLE_SLOT_KING_LOGO, PLAY_BUTTON_1, HOME_SCREEN_BACKGROUND, CANVAS_FRAME_COMPLETE, CLOSE_BUTTON } from '../constants/imageConstants';
import { Switch } from 'react-native-gesture-handler';
import SwitchSelector from "react-native-switch-selector";


export default class HomeScreen extends React.Component {
    state = {
        modalVisible: false,
        isEnabled: false
    };

    setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
    }

    setIsEnabled = (enable) => {
        this.setState({isEnabled: enable});
    }


    render() {
        const{navigate} = this.props.navigation;
        const { modalVisible } = this.state;
        const {isEnabled} = this.state;
        const toggleSwitch = () => this.setIsEnabled(previousState => !previousState);
        const options = [
            {label:'Blue', value:'blue'},
            {label:'Red', value:'red'}
        ];

        return (
            <ImageBackground
                style={styles.backgroundImage}
                source={HOME_SCREEN_BACKGROUND}>
                <StatusBar hidden={true}/>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!modalVisible);
                    }}
                    >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.modalText}>Sound</Text>
                                <Switch
                                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />                                
                            </View>
                            <View style={{alignItems:'space-between', flexDirection:'row'}}>
                                <Text style={styles.modalText}>Card Color</Text>
                                <View style={{width:'40%'}}>
                                    <SwitchSelector
                                        options={options}
                                        hasPadding
                                        textCStyle={styles.textContainerSwitch}
                                        textStyle={styles.switchText}
                                        textColor={"gold"}
                                        buttonColor={"#0f4660"}
                                        selectedTextStyle={styles.switchTextSelected}
                                        backgroundColor={"#0f2636"}
                                        borderColor={"gold"}
                                        selectedColor={'gold'}
                                        initial={0}
                                        onPress={value => console.log('Hello')}
                                    />    
                                </View>                            
                            </View>
                            <Text style={styles.modalText}>Hello World!</Text>
                            <View style={{height:40, width:40}}>
                                <TouchableOpacity
                                    onPress={() => {
                                    this.setModalVisible(!modalVisible);
                                    }}
                                >
                                    <Image style={{width:'100%',height:'100%', resizeMode:'contain'}} source={CLOSE_BUTTON}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    </Modal>
                <View style={{flex:6, justifyContent:'center', alignItems:'center'}}>
                    <View style={{flex:1, width:'100%', padding:20}}>
                        <Image
                            style={{flex:1, width:'100%', height:'100%', resizeMode:'contain'}}
                            source={require('../assets/images/king_nobet_nowin.png')}/>
                        <Image
                            style={{flex:1, width:'100%', height:'100%', resizeMode:'contain'}}
                            source={TABLE_SLOT_KING_LOGO}/>
                    </View>
                    <View style={{flex:1,  paddingHorizontal:10, paddingTop:50, justifyContent:'center', alignItems:'center'}}>
                        <View style={{justifyContent:'center', alignItems:'center'}}>
                            <TouchableOpacity
                                onPress={()=> navigate('Menu')}>
                                <Image
                                    style={{width:191, height:51}}
                                    source={PLAY_BUTTON_1}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <MenuFooter callback={this.setModalVisible}/>
            </ImageBackground>
        );
    };
}

const styles = StyleSheet.create({
    imageContainer:{
        flex: 1,
        alignItems:'stretch'
    },
    container: {
        flex:1,
        paddingTop: 2
    },
    backgroundImage:{
        flex: 1,
        width: undefined,
        height: undefined
    },
    centeredView: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
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
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        color:'goldenrod',
        fontFamily:'PlayfairDisplay-BoldItalic'
      },
      switchText: {
        marginBottom: 15,
        color:'goldenrod',
        fontFamily:'PlayfairDisplay-BoldItalic',
        textAlignVertical:'auto'
        },
      switchTextSelected: {
        marginBottom: 15,
        textAlign: "center",
        color:'goldenrod',
        fontFamily:'PlayfairDisplay-BoldItalic'
      },
      textContainerSwitch:{
          justifyContent:'center',
          alignItems:'center',
          textAlignVertical:'center'        
        }
});