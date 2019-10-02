import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, StatusBar, TouchableOpacity, Image, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import MenuFooter from '../components/MenuFooter';

export default class MenuScreen extends React.Component {
    static navigationOptions = {
        header: null
    }


    render() {
        const{navigate} = this.props.navigation;
        return (
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../assets/images/background.png')}>
                <StatusBar hidden={true}/>
                <View style={{flex:6, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between', alignItems:'center', padding:20}}>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity
                            disabled={true}
                            onPress={()=> navigate('Game')}>
                            <Image
                                style={{width:170, height:170, opacity:.5}}
                                source={require('../assets/images/buttons/button_rimpim_tournament.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity
                            disabled={true}
                            onPress={()=> navigate('Game')}>
                            <Image
                                style={{width:170, height:170, opacity:.5}}
                                source={require('../assets/images/buttons/button_rimpim_single.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity
                            disabled={true}
                            onPress={()=> navigate('Game')}>
                            <Image
                                style={{width:170, height:170, opacity:.5}}
                                source={require('../assets/images/buttons/button_wild.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity
                            onPress={()=> navigate('Game')}>
                            <Image
                                style={{width:170, height:170}}
                                source={require('../assets/images/buttons/button_jackpot.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity
                            disabled={true}
                            onPress={()=> navigate('Game')}>
                            <Image
                                style={{width:170, height:170, opacity:.5}}
                                source={require('../assets/images/buttons/button_bonus.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity
                            disabled={true}
                            onPress={()=> navigate('Game')}>
                            <Image
                                style={{width:170, height:170, opacity:.5}}
                                source={require('../assets/images/buttons/button_play.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity
                            disabled={true}
                            onPress={()=> navigate('Game')}>
                            <Image
                                style={{width:170, height:170, opacity:.5}}
                                source={require('../assets/images/buttons/button_skill.png')}/>
                        </TouchableOpacity>
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