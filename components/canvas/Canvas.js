import React, { Component } from 'react';
import { Animated, View, Image, StyleSheet, Easing, TouchableOpacity, ImageBackground } from 'react-native';


export default class Canvas extends Component {
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
          <View style={{flex:3}}>
            <View style={{flex:1, paddingHorizontal:45}}>
              <View style={{flex:1}}>
                <ImageBackground style={{height:'100%',resizeMode:'contain'}}
                  source={require('../../assets/images/canvas/canvas_frame_complete.png')}>
                  <View style={{flex:1, paddingVertical:30, paddingHorizontal:15}}>
                    <View style={{flex:1, flexDirection:'row',}}>
                      <View style={{flex:1, alignItems:'center',paddingVertical:5}}>
                            <Image
                                style={{height:'100%', resizeMode:'contain'}}
                                source={require('../../assets/images/canvas/card_holder.png')}/>
                      </View>
                      <View style={{flex:1, alignItems:'center',paddingVertical:5}}>
                            <Image
                                style={{height:'100%', resizeMode:'contain'}}
                                source={require('../../assets/images/canvas/card_holder.png')}/>
                      </View>
                      <View style={{flex:1, alignItems:'center',paddingVertical:5}}>
                            <Image
                                style={{height:'100%', resizeMode:'contain'}}
                                source={require('../../assets/images/canvas/card_holder.png')}/>
                      </View>
                    </View>
                    <View style={{flex:1, flexDirection:'row'}}>
                      <View style={{flex:1, alignItems:'center',paddingVertical:5}}>
                            <Image
                                style={{height:'100%', resizeMode:'contain'}}
                                source={require('../../assets/images/canvas/card_holder.png')}/>
                      </View>
                      <View style={{flex:1, alignItems:'center',paddingVertical:5}}>
                            <Image
                                style={{height:'100%', resizeMode:'contain'}}
                                source={require('../../assets/images/canvas/card_holder.png')}/>
                      </View>
                      <View style={{flex:1, alignItems:'center',paddingVertical:5}}>
                            <Image
                                style={{height:'100%', resizeMode:'contain'}}
                                source={require('../../assets/images/canvas/card_holder.png')}/>
                      </View>
                    </View>
                    <View style={{flex:1, flexDirection:'row'}}>
                      <View style={{flex:1, alignItems:'center',paddingVertical:5}}>
                            <Image
                                style={{height:'100%', resizeMode:'contain'}}
                                source={require('../../assets/images/canvas/card_holder.png')}/>
                      </View>
                      <View style={{flex:1, alignItems:'center',paddingVertical:5}}>
                            <Image
                                style={{height:'100%', resizeMode:'contain'}}
                                source={require('../../assets/images/canvas/card_holder.png')}/>
                      </View>
                      <View style={{flex:1, alignItems:'center',paddingVertical:5}}>
                            <Image
                                style={{height:'100%', resizeMode:'contain'}}
                                source={require('../../assets/images/canvas/card_holder.png')}/>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </View>
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