import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default class JackpotBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      jackpot_Counter: '80',
      startDisable: false
    }
  }


  render() {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:12, color:'goldenrod'}}>JACKPOT</Text>   
            <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>{this.state.jackpot_Counter}</Text>      
        </View>
    );
  }
}