import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, StatusBar, Text, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import ActionBar from '../components/ActionBar';
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default class GameScreen extends React.Component {
    static navigationOptions = {
        headerTitle:<ActionBar/>,
        headerStyle:{
            backgroundColor:'#0f2636'
        },
        headerLeft: null

    }
    render() {
        return (
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../assets/images/background.png')}>
                <StatusBar hidden={true}/>
                <View style={{flex:5, flexDirection:'row'}}> 
                    <View style={{flex:2}}/>                
                    <View style={{flex:4}}>
                        <View style={{flex:1}}>
                            <Image 
                                style={{flex:5, width:'100%', height: '100%', resizeMode:'contain'}}
                                source={require('../assets/images/gameboard.png')}/>
                            <View style={{flex:1, flexDirection:'row', justifyContent:'center', padding:5}}>
                                <Image 
                                    style={{flex:1, width:'100%', height: '100%', resizeMode:'contain'}}
                                    source={require('../assets/images/chip_one.png')}/>
                                <Image 
                                    style={{flex:1, width:'100%', height: '100%', resizeMode:'contain'}}
                                    source={require('../assets/images/chip_five.png')}/>
                                <Image 
                                    style={{flex:1, width:'100%', height: '100%', resizeMode:'contain'}}
                                    source={require('../assets/images/chip_ten.png')}/>
                                <Image 
                                    style={{flex:1, width:'100%', height: '100%', resizeMode:'contain'}}
                                    source={require('../assets/images/chip_twenty.png')}/>
                                <Image 
                                    style={{flex:1, width:'100%', height: '100%', resizeMode:'contain'}}
                                    source={require('../assets/images/chip_hundred.png')}/>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:2, justifyContent:'space-between', alignItems:'center'}}>
                        <Text>Jackpot</Text>
                        <View>
                            <Button
                                title="Bet All"
                                type="outline"
                                raise={true}
                                containerStyle={{padding:5}}
                                buttonStyle={{borderRadius:15, borderColor:'white', width:100}}
                                titleStyle={{color:'white'}}
                                // onPress={() => navigate('Game')}
                                />
                            <Button
                                title="Jackpot"
                                type="outline"
                                raise={true}
                                containerStyle={{padding:5}}
                                buttonStyle={{borderRadius:15, borderColor:'white', width:100}}
                                titleStyle={{color:'white'}}
                                // onPress={() => navigate('Game')}
                                />
                        </View>
                        <Button
                            title="Deal"
                            type="outline"
                            raise={true}
                            containerStyle={{padding:5}}
                            buttonStyle={{borderRadius:15, borderColor:'white', width:100}}
                            titleStyle={{color:'white'}}
                            // onPress={() => navigate('Game')}
                            />
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'#0f2636', flexDirection:'row', padding:8}}>
                    <Image 
                        style={{flex:1, width:'100%', height: '100%', resizeMode:'cover'}}
                        source={require('../assets/images/game_logos/jackpot.png')}/>
                    <View style={{flex:2,flexDirection:'row'}}>
                        {/* <TouchableOpacity> */}
                            <Image
                                style={{flex:1, width:'100%', height:'100%', resizeMode:'contain'}}
                                source={require('../assets/images/button_priceboard.png')}/>
                        {/* </TouchableOpacity> */}
                        {/* <TouchableOpacity> */}
                            <Image
                                style={{flex:1, width:'100%', height:'100%', resizeMode:'contain'}}
                                source={require('../assets/images/best_players_score.png')}/>
                        {/* </TouchableOpacity> */}
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