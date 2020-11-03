import React from 'react';
import { ImageBackground, StyleSheet, View, StatusBar, TouchableOpacity, Image, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import {
    BACKGROUND,
    HOLD_DRAW_BUTTON,
    HOLD_DRAW_BIG_BUTTON,
    NO_BET_NO_WIN,
    HOLD_DRAW_BUTTON_HI,
    HOLD_DRAW_BIG_BUTTON_HI
    } from '../constants/imageConstants';
import {
    SET_VERSION} from '../constants/actionTypes';
import { penClick } from '../helpers/sounds';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MenuFooter from "../components/footers/MenuFooter";

const mapStateToProps = state => {
    return{
        unlocked: state.versionReducer.unlocked
    };
  };

const mapDispatchToProps = dispatch => {
    return {
        setGameVersion: (version, size) => dispatch({type: size, version})
    };
  };

class MenuScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    }

    setGame(game, version){
        this.props.setGameVersion(version, SET_VERSION)

    }

    navigateToGame = (game,version) => {
        penClick.play();
        this.setGame(game, version);
        this.props.navigation.navigate(game,{version: version});
    }

    showLockedAlert() {
        Alert.alert(
            'Hi-Limit Tables Are Locked!',
            'These rooms require 10,000 credit to unlock!',
            [
                {
                    text: 'Ok',

                },
            ],
        );
    }

    render() {
        return (
            <ImageBackground
                style={styles.backgroundImage}
                source={BACKGROUND}>
                <StatusBar hidden={true}/>
                <Image source={NO_BET_NO_WIN} style={{width:150, height:150, resizeMode:'contain'}}/>
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text style={styles.selectGameText}>Select A Game</Text>
                </View>
                <View style={{flex:6,justifyContent:'center', alignItems:'center'}}>
                    <Text style={styles.roomText}>Standard Room</Text>
                    <View style={{flex:1, flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <View style={{flex:1, justifyContent:'center', alignItems:'center', padding:20}}>
                                <TouchableOpacity
                                    style={{width:'100%', justifyContent: 'center'}}
                                    onPress={()=> this.navigateToGame('HoldAndDraw','3x3')}>
                                    <Image
                                        style={{width:'100%', height:'100%', resizeMode:'contain'}}
                                        source={HOLD_DRAW_BUTTON}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flex:1}}>
                            <View style={{flex:1, justifyContent:'center', alignItems:'center', padding:20}}>
                                <TouchableOpacity
                                    style={{width:'100%', justifyContent: 'center'}}
                                    onPress={()=> this.navigateToGame('HoldAndDraw','4x4')}>
                                    <Image
                                        style={{width:'100%', height:'100%', resizeMode:'contain'}}
                                        source={HOLD_DRAW_BIG_BUTTON}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.roomText}>Hi-Limit Room</Text>
                    <View style={{flex:1, flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <View style={{flex:1, justifyContent:'center', alignItems:'center', padding:20}}>
                                <TouchableOpacity
                                    disabled={!this.props.unlocked}
                                    style={{width:'100%', justifyContent: 'center'}}
                                    onPress={()=> this.navigateToGame('HoldAndDrawHI','3x3')}>
                                    <ImageBackground
                                        style={{width:'100%', height:'100%'}}
                                        imageStyle={{opacity: !this.props.unlocked ? 0.4 : 1}}
                                        resizeMode={'contain'}
                                        source={HOLD_DRAW_BUTTON_HI}>
                                        {!this.props.unlocked ?
                                            <View style={{width:40, height:40, position:'absolute', top:10, right:25, justifyContent:'center', alignItems:'center'}}>
                                                <TouchableOpacity
                                                    onPress={() => this.showLockedAlert()}
                                                    style={{}}>
                                                    <Icon name="lock" size={30} color="gold"/>
                                                </TouchableOpacity>
                                            </View>: null }
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flex:1}}>
                            <View style={{flex:1, justifyContent:'center', alignItems:'center', padding:20}}>
                                <TouchableOpacity
                                    disabled={!this.props.unlocked}
                                    style={{width:'100%', justifyContent: 'center'}}
                                    onPress={()=> this.navigateToGame('HoldAndDrawHI','4x4')}>
                                    <ImageBackground
                                        style={{width:'100%', height:'100%'}}
                                        imageStyle={{opacity: !this.props.unlocked ? 0.4 : 1}}
                                        resizeMode={'contain'}
                                        source={HOLD_DRAW_BIG_BUTTON_HI}>
                                        {!this.props.unlocked ?
                                            <View style={{width:40, height:40, position:'absolute', top:10, right:25, justifyContent:'center', alignItems:'center'}}>
                                                <TouchableOpacity
                                                    onPress={() => this.showLockedAlert()}
                                                    style={{}}>
                                                    <Icon name="lock" size={30} color="gold"/>
                                                </TouchableOpacity>
                                            </View>: null }
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <MenuFooter/>
            </ImageBackground>
        );
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(MenuScreen);


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
        height: undefined,
        justifyContent:'center',
        alignItems:'center'
    },
    selectGameText: {
        fontFamily:'PlayfairDisplay-Bold',
        // color:'#f7ef8a',
        color:'white',
        fontSize:38
    },
    roomText: {
        fontFamily:'PlayfairDisplay-Bold',
        paddingVertical:20,
        color:'#f7ef8a',
        // color:'white',
        fontSize:24
    }
});
