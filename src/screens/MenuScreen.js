import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, StatusBar, TouchableOpacity, Image, Text } from 'react-native';
// import MenuFooter from '../components/footers/MenuFooter';
import { connect } from 'react-redux';
import {setGame} from '../store/actions/actions';
import Icon from 'react-native-vector-icons/FontAwesome';
import { 
    BACKGROUND, 
    HOLD_DRAW_BUTTON, 
    RIMPIMPAM_TOURNAMENT,
    RIMPIMPAM_SINGLE, 
    WILD_DEALER, 
    JACKPOT_DEALER, 
    BONUS_DEALER, 
    PAY_N_PLAY, 
    SKILL_METER } from '../constants/imageConstants';

const mapStateToProps = state => {
    return{
        // NOTHING TO RETURN
    };
  };

const mapDispatchToProps = dispatch => {
    return {
        setChosenGame: (game) => dispatch(setGame(game)),
    };
  };

class MenuScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    }

    navigateToGame = (game) => {
        this.props.setChosenGame(game);
        this.props.navigation.navigate(game);
    }


    render() {
        const{navigate} = this.props.navigation;
        return (
            <ImageBackground
                style={styles.backgroundImage}
                source={BACKGROUND}>
                <StatusBar hidden={true}/>
                <View style={{flex:.8, justifyContent:'center', alignItems:'center'}}>
                    <Text style={styles.selectGameText}>CHOOSE A GAME</Text>
                </View>
                <View style={{flex:10, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20}}>
                    <View style={{justifyContent:'center', alignItems:'center', padding:5}}>
                        <TouchableOpacity
                            // disabled={true}
                            onPress={()=> this.navigateToGame('HoldAndDraw')}>
                            <Image
                                style={{width:170, height:170}}
                                source={HOLD_DRAW_BUTTON}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity
                            disabled={true}
                            onPress={()=> this.navigateToGame('Game')}>
                            <Icon name="lock" size={30} color="gold" style={{position:"absolute", top:10, right:10}}/>
                            <Image
                                style={{width:170, height:170, opacity:.5}}
                                source={RIMPIMPAM_TOURNAMENT}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center', padding:5}}>
                        <TouchableOpacity
                            disabled={true}
                            onPress={()=> navigate()}>
                            <Icon name="lock" size={30} color="gold" style={{position:"absolute", top:10, right:10}}/>
                            <Image
                                style={{width:170, height:170, opacity:.5}}
                                source={RIMPIMPAM_SINGLE}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center', padding:5}}>
                        <TouchableOpacity
                            disabled={true}
                            onPress={()=> this.navigateToGame('Game')}>
                            <Icon name="lock" size={30} color="gold" style={{position:"absolute", top:10, right:10}}/>
                            <Image
                                style={{width:170, height:170, opacity:.5}}
                                source={WILD_DEALER}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center', padding:5}}>
                        <TouchableOpacity
                            disabled={true}
                            onPress={()=> this.navigateToGame('Game')}>
                            <Icon name="lock" size={30} color="gold" style={{position:"absolute", top:10, right:10}}/>
                            <Image
                                style={{width:170, height:170, opacity:.5}}
                                source={JACKPOT_DEALER}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center', padding:5}}>
                        <TouchableOpacity
                            disabled={true}
                            onPress={()=> this.navigateToGame('Game')}>
                            <Icon name="lock" size={30} color="gold" style={{position:"absolute", top:10, right:10}}/>
                            <Image
                                style={{width:170, height:170, opacity:.5}}
                                source={BONUS_DEALER}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center', padding:5}}>
                        <TouchableOpacity
                            disabled={true}
                            onPress={()=> this.navigateToGame('Game')}>
                            <Icon name="lock" size={30} color="gold" style={{position:"absolute", top:10, right:10}}/>
                            <Image
                                style={{width:170, height:170, opacity:.5}}
                                source={PAY_N_PLAY}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center', padding:5}}>
                        <TouchableOpacity
                            disabled={true}
                            onPress={()=> this.navigateToGame('Game')}>
                            <Icon name="lock" size={30} color="gold" style={{position:"absolute", top:10, right:10}}/>
                            <Image
                                style={{width:170, height:170, opacity:.5}}
                                source={SKILL_METER}/>
                        </TouchableOpacity>
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
