import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';

export default class HomeScreen extends React.Component {
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
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <View style={{position:'absolute', bottom:50}}>
                        <Button
                            title="Enter"
                            type="outline"
                            raise={true}
                            buttonStyle={{borderRadius:15, borderColor:'white', width:100}}
                            titleStyle={{color:'white'}}
                            onPress={() => navigate('Game')}
                            />
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