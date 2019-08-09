import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, StatusBar, Image } from 'react-native';
import { Button } from 'react-native-elements';

export default class GameScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../assets/images/gameBackground.png')}>
                <StatusBar hidden={true}/>
                <View style={{flex:5, paddingTop:20, justifyContent:'center', alignItems:'center'}}>
                    {/* <Image 
                        style={{flex:1, width:undefined}}
                        source={require('../assets/images/rimpimpamtournament.png')}/> */}
                    <Image 
                        style={{flex:1, width:'100%', height: '100%', resizeMode:'contain'}}
                        source={require('../assets/images/gameboard.png')}/>
                </View>
                <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
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