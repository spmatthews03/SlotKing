import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default class TimerBox extends Component {
  render() {
    return (
        <View style={{flex:1, alignItems:'center'}}>
            <Text style={{fontSize:12,color:'goldenrod'}}>Time</Text>   
            <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>1:58</Text>   
        </View>
    );
  }
}