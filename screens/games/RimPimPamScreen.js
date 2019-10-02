import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, StatusBar, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import ActionBar from '../components/ActionBar';
import CardPlacer from '../components/CardPlacer';
import Cards, { CARDS } from '../constants/cards';
import shuffle from '../helpers/cards';

export default class RimPimPamScreen extends React.Component {
    static navigationOptions = {
        headerTitle:<ActionBar/>,
        headerStyle:{
            backgroundColor:'#0f2636'
        },
        headerLeft: null

    }

    constructor(props){
        super(props);
        this.state = {
            //
            deck: null,
        }
    }

    getRimPimPamDeck = () => {
        // get deck
        this.setState({
            deck: shuffle(CARDS)
        })
    }

    componentDidMount(){
        this.getRimPimPamDeck();
      }

    render() {
        return (
            <ImageBackground
                style={styles.backgroundImage}
                source={require('../assets/images/gameBackground.png')}>
                <StatusBar hidden={true}/>
                <View style={{flex:5}}> 
                    {/* <View style={{flex:2}}/>                 */}
                    <View style={{flex:1}}>
                        <View style={{flex:1, padding:10}}>
                            <Image 
                                style={{flex:5, width:'100%', height: '100%', resizeMode:'contain'}}
                                source={require('../assets/images/gameboard.png')}/>
                            <View style={{flex:2, flexDirection:'row', justifyContent:'center', padding:2}}>
                                <View style={{flex:2,flexDirection:'row', justifyContent:'center',paddingRight:10}}>
                                    <Image 
                                        style={{flex:1, width:'100%', height: '100%', resizeMode:'contain',margin:5}}
                                        source={require('../assets/images/blue_card.png')}/>
                                    <Image 
                                        style={{flex:1, width:'100%', height: '100%', resizeMode:'contain',margin:5}}
                                        source={require('../assets/images/bar_card.png')}/>
                                </View>
                                <View style={{flex:3, flexDirection:'row',paddingLeft:10}}>
                                    <Image 
                                        style={{flex:1, width:'100%', height: '100%', resizeMode:'contain',margin:5}}
                                        source={require('../assets/images/blue_card.png')}/>
                                    <Image 
                                        style={{flex:1, width:'100%', height: '100%', resizeMode:'contain',margin:5}}
                                        source={require('../assets/images/wild_card.png')}/>
                                    <Image 
                                        style={{flex:1, width:'100%', height: '100%', resizeMode:'contain',margin:5}}
                                        source={require('../assets/images/crown_card.png')}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor:'#0f2636', flexDirection:'row', padding:5}}>
                    <Image 
                        style={{flex:1, width:'100%', height: '100%', resizeMode:'contain'}}
                        source={require('../assets/images/rimpimpamsingle_logo.png')}/>
                    <View style={{flex:3}}></View>
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