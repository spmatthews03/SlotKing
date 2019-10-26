import React, { Component } from 'react';
import { Animated, View, Image, StyleSheet, Easing, TouchableOpacity, ImageBackground } from 'react-native';


export default class LeftBets extends Component {
    constructor(props) {
        super(props);

        this.state = {
            highlighted_chip: 0,
            total_bet: 0,
            opacities: {
                yellow: 0.2,
                purple: 0.2,
                green: 0.2,
                red: 0.2,
                gold: 0.2
            }
        };
    }



    render() {
        return (
            <View style={{position:'absolute', height:'100%', top:0,left:0}}>      
                <View style={{flex:1}}>
                    <View style={{flex:1, alignItems:'center',paddingVertical:5}}>
                        <Image
                            style={{height:'100%', resizeMode:'contain'}}
                            source={require('../../assets/images/canvas/red_left.png')}/>
                    </View>
                    {/* <View style={{flex:1, alignItems:'center',paddingVertical:5}}>
                        <Image
                            style={{height:'100%', resizeMode:'contain'}}
                            source={require('../../assets/images/canvas/red_left.png')}/>
                    </View>
                    <View style={{flex:1, alignItems:'center',paddingVertical:5}}>
                        <Image
                            style={{height:'100%', resizeMode:'contain'}}
                            source={require('../../assets/images/canvas/red_left.png')}/>
                    </View> */}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageContainer: {
      flex: 1,
      alignItems: 'stretch'
    },
    container: {
      flex: 1,
      paddingTop: 2
    },
    backgroundImage: {
      flex: 1,
      width: undefined,
      height: undefined
    },
    chipStyle:{
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'contain'
    },
    bottomButtonsStyle:{
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    flexOneStyles:{
      flex: 1,
      width: '100%',
      padding: 5
    }
  });