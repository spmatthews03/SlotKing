import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default class CreditBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      startDisable: false
    }
  }


  render() {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:12, color:'goldenrod'}}>CREDIT</Text>   
            <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>{this.props.credit}</Text>      
        </View>
    );
  }
}