import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, StatusBar, TouchableOpacity, Image, Text } from 'react-native';
import MenuFooter from '../components/MenuFooter';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    }


    render() {
        const{navigate} = this.props.navigation;
        return (
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../assets/images/main_menu_background.png')}>
                <StatusBar hidden={true}/>
                <View style={{flex:6, justifyContent:'center', alignItems:'center'}}>
                    <View style={{flex:1, width:'100%', padding:20}}>
                        <Image
                            style={{flex:1, width:'100%', height:'100%', resizeMode:'contain'}}
                            source={require('../assets/images/king_nobet_nowin.png')}/>
                        <Image
                            style={{flex:1, width:'100%', height:'100%', resizeMode:'contain'}}
                            source={require('../assets/images/tableslotking.png')}/>
                    </View>
                    <View style={{flex:1,  paddingHorizontal:20, paddingTop:50, justifyContent:'center', alignItems:'center'}}>
                        <View style={{justifyContent:'center', alignItems:'center'}}>
                            <TouchableOpacity
                                onPress={()=> navigate('Menu')}>
                                <Image
                                    style={{width:130, height:60}}
                                    source={require('../assets/images/play.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <MenuFooter/>
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
    }
});