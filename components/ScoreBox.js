import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default class ScoreBox extends Component {
  render() {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center', paddingRight:20}}>
            <Text style={{fontSize:12, color:'goldenrod'}}>Score</Text>   
            <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>080</Text>      
        </View>
    );
  }
}