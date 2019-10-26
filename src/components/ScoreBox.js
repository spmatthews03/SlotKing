import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image } from 'react-native';

export default class ScoreBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      score_Counter: '00',
      startDisable: false
    }
  }


  render() {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center', paddingRight:20}}>
            <Text style={{fontSize:12, color:'goldenrod'}}>Score</Text>   
            <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>{this.state.score_Counter}</Text>      
        </View>
    );
  }
}