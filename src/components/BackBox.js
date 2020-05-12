import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default class BackBox extends Component {
  render() {
    return (
        <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Icon name='keyboard-arrow-left' size={32} style={{color:'red'}}/>
            <Text style={{color:'white'}}></Text>   
        </View>
    );
  }
}