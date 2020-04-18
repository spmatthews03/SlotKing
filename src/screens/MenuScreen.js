import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, StatusBar, TouchableOpacity, Image, Text } from 'react-native';
// import MenuFooter from '../components/footers/MenuFooter';
import { connect } from 'react-redux';
import {setGame} from '../store/actions/actions';

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
        header: null
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
                source={require('../assets/images/background.png')}>
                <StatusBar hidden={true}/>
                <View style={{flex:.8, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:'gold', fontSize:24, fontWeight:'bold'}}>SELECT A GAME</Text>
                </View>
                <View style={{flex:10, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20}}>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity
                            disabled={true}
                            onPress={()=> this.navigateToGame('Game')}>
                            <Image
                                style={{width:170, height:170, opacity:.5}}
                                source={require('../assets/images/buttons/button_rimpim_tournament.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center', padding:5}}>
                        <TouchableOpacity
                            disabled={true}
                            onPress={()=> navigate()}>
                            <Image
                                style={{width:170, height:170, opacity:.5}}
                                source={require('../assets/images/buttons/button_rimpim_single.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center', padding:5}}>
                        <TouchableOpacity
                            disabled={true}
                            onPress={()=> this.navigateToGame('Game')}>
                            <Image
                                style={{width:170, height:170, opacity:.5}}
                                source={require('../assets/images/buttons/button_wild.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center', padding:5}}>
                        <TouchableOpacity
                            onPress={()=> this.navigateToGame('Game')}>
                            <Image
                                style={{width:170, height:170}}
                                source={require('../assets/images/buttons/button_jackpot.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center', padding:5}}>
                        <TouchableOpacity
                            disabled={true}
                            onPress={()=> this.navigateToGame('Game')}>
                            <Image
                                style={{width:170, height:170, opacity:.5}}
                                source={require('../assets/images/buttons/button_bonus.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center', padding:5}}>
                        <TouchableOpacity
                            disabled={true}
                            onPress={()=> this.navigateToGame('Game')}>
                            <Image
                                style={{width:170, height:170, opacity:.5}}
                                source={require('../assets/images/buttons/button_pay.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center', padding:5}}>
                        <TouchableOpacity
                            // disabled={true}
                            onPress={()=> this.navigateToGame('Stopped')}>
                            <Image
                                style={{width:170, height:170}}
                                source={require('../assets/images/buttons/button_skill.png')}/>
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
    }
});
