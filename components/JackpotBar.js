import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import BackBox from './BackBox';
import JackpotBox from './JackpotBox';
import CreditBox from './CreditBox';

export default class JackpotBar extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection: 'row', backgroundColor:'#0f2636', alignItems:'center', justifyContent:'space-between'}}>
        <View style={{flex:1, alignItems:'flex-start'}}>
            <BackBox/>
        </View>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <JackpotBox/>
        </View>
        <View style={{flex:1,  alignItems:'flex-end'}}>
            <CreditBox/>
        </View>
      </View>
    );
  }
}