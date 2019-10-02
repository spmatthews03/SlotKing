import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, StatusBar, Text, Image, TouchableOpacity } from 'react-native';
import JackpotBar from '../../components/JackpotBar';

export default class GameScreen extends React.Component {
    static navigationOptions = {
        headerTitle:<JackpotBar/>,
        headerStyle:{
            backgroundColor:'#0f2636'
        },
        headerLeft: null

    }

    render() {
        const{navigate} = this.props.navigation;

        return (
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../assets/images/background.png')}>
                <StatusBar hidden={true}/>
                <View style={{flex:5, flexDirection:'row'}}> 
                    {/* <View style={{flex:2}}/>                 */}
                    <View style={{flex:4}}>
                        <View style={{flex:1, paddingTop:10}}>
                            <Image 
                                style={{flex:3, width:'100%', height: '100%', resizeMode:'contain'}}
                                source={require('../assets/images/canvas.png')}/>
                            <View style={{flex:2, justifyContent:'center', padding:5}}>
                                <View style={{flex:1, flexDirection:'row', justifyContent:'center', paddingLeft:50, paddingRight:50}}>
                                    <TouchableOpacity style={{flex:1,width:'100%', padding:10}}>
                                        <Image 
                                            style={{flex:1, width:'100%', height: '100%', resizeMode:'contain'}}
                                            source={require('../assets/images/bet_all.png')}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{flex:1,width:'100%', padding:10}}>
                                        <Image 
                                            style={{flex:1, width:'100%', height: '100%', resizeMode:'contain'}}
                                            source={require('../assets/images/bet_jackpot.png')}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:1, flexDirection:'row', justifyContent:'center', paddingLeft:35, paddingRight:35}}>
                                    <TouchableOpacity style={{flex:1,width:'100%', padding:5}}>
                                        <Image 
                                            style={{flex:1, width:'100%', height: '100%', resizeMode:'contain'}}
                                            source={require('../assets/images/chips/chip_one.png')}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{flex:1,width:'100%', padding:5}}>
                                        <Image 
                                            style={{flex:1, width:'100%', height: '100%', resizeMode:'contain'}}
                                            source={require('../assets/images/chips/chip_five.png')}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{flex:1,width:'100%', padding:5}}>
                                        <Image 
                                            style={{flex:1, width:'100%', height: '100%', resizeMode:'contain'}}
                                            source={require('../assets/images/chips/chip_ten.png')}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{flex:1,width:'100%', padding:5}}>
                                        <Image 
                                            style={{flex:1, width:'100%', height: '100%', resizeMode:'contain'}}
                                            source={require('../assets/images/chips/chip_twenty.png')}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{flex:1,width:'100%', padding:5}}>
                                        <Image 
                                            style={{flex:1, width:'100%', height: '100%', resizeMode:'contain'}}
                                            source={require('../assets/images/chips/chip_hundred.png')}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:1, flexDirection:'row', justifyContent:'center', padding:5}}>
                                    <TouchableOpacity style={{flex:1,width:'100%', padding:5}}>
                                        <Image 
                                            style={{flex:1, width:'100%', height: '100%', resizeMode:'contain', margin:5}}
                                            source={require('../assets/images/reset_bets.png')}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{flex:1,width:'100%', padding:5}}>
                                        <Image 
                                            style={{flex:1, width:'100%', height: '100%', resizeMode:'contain', margin:5}}
                                            source={require('../assets/images/bet_repeat.png')}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{flex:1,width:'100%', padding:5}}>
                                        <Image 
                                            style={{flex:1, width:'100%', height: '100%', resizeMode:'contain', margin:5}}
                                            source={require('../assets/images/total_bet.png')}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{flex:1,width:'100%', padding:5}}>
                                        <Image 
                                            style={{flex:1, width:'100%', height: '100%', resizeMode:'contain', margin:5}}
                                            source={require('../assets/images/gold_play.png')}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'#0f2636', flexDirection:'row', padding:8}}>
                    <Image 
                        style={{flex:1, width:'100%', height: '100%', resizeMode:'cover'}}
                        source={require('../assets/images/game_logos/jackpot.png')}/>
                    <View style={{flex:2,flexDirection:'row'}}>
                        <TouchableOpacity
                            onPress={()=> alert('image clicked')}
                            style={{flex:1, width:'100%', padding:2, alignItems:'center', justifyContent:'center'}}>
                            <Image
                                style={{width:'100%', resizeMode:'contain'}}
                                source={require('../assets/images/button_friends.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=> alert('image clicked')}
                            style={{flex:1, width:'100%', padding:2, alignItems:'center', justifyContent:'center'}}>
                            <Image
                                style={{width:'100%', resizeMode:'contain'}}
                                source={require('../assets/images/button_options.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=> navigate('JackpotDealerPriceboard')}
                            style={{flex:2, width:'100%', padding:2, alignItems:'center', justifyContent:'center'}}>
                            <Image
                                style={{width:'100%', resizeMode:'contain'}}
                                source={require('../assets/images/button_priceboard.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex:2, padding:2, alignItems:'center', justifyContent:'center'}}>
                            <Image
                                style={{width:'100%', resizeMode:'contain'}}
                                source={require('../assets/images/best_players_score.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
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