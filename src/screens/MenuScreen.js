import React from 'react';
import { ImageBackground, StyleSheet, View, StatusBar, TouchableOpacity, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import {setGame} from '../store/actions/actions';
import { 
    BACKGROUND, 
    HOLD_DRAW_BUTTON, 
    RIMPIMPAM_TOURNAMENT,
    } from '../constants/imageConstants';
import {
    SET_VERSION, 
    SET_GAME_SMALL,
    SET_GAME_BIG} from '../constants/actionTypes';

const mapStateToProps = state => {
    return{
        // NOTHING TO RETURN
    };
  };

const mapDispatchToProps = dispatch => {
    return {
        setChosenGame: (game, size) => dispatch({type: size, game}),
        setGameVersion: (version, size) => dispatch({type: size, version})
    };
  };

class MenuScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    }

    setGame(game, version){
        if(version == "3x3"){
            this.props.setChosenGame(game, SET_GAME_SMALL);
        } else {
            this.props.setChosenGame(game, SET_GAME_BIG);
        }
        this.props.setGameVersion(version, SET_VERSION)

    }

    navigateToGame = (game,version) => {
        this.setGame(game, version);
        this.props.navigation.navigate(game,{version: version});
    }

    render() {
        return (
            <ImageBackground
                style={styles.backgroundImage}
                source={BACKGROUND}>
                <StatusBar hidden={true}/>
                <View style={{flex:.8, justifyContent:'center', alignItems:'center'}}>
                    <Text style={styles.selectGameText}>CHOOSE A GAME</Text>
                </View>
                <View style={{flex:10,justifyContent:'center', alignItems:'center', paddingHorizontal:20}}>
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                        <View style={{justifyContent:'center', alignItems:'center', padding:5}}>
                            <TouchableOpacity
                                onPress={()=> this.navigateToGame('HoldAndDraw','3x3')}>
                                <Image
                                    style={{width:220, height:220}}
                                    source={HOLD_DRAW_BUTTON}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                        <View style={{justifyContent:'center', alignItems:'center'}}>
                            <TouchableOpacity
                                onPress={()=> this.navigateToGame('HoldAndDraw','4x4')}>
                                <Image
                                    style={{width:220, height:220}}
                                    source={RIMPIMPAM_TOURNAMENT}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/* <MenuFooter/> */}
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
        height: undefined
    },
    selectGameText: {
        fontFamily:'PlayfairDisplay-BoldItalic',
        color:'#f7ef8a',
        fontSize:24
    }
});
