import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import BackBox from '../components/BackBox';
import TimerBox from '../components/TimerBox';
import ScoreBox from '../components/ScoreBox';

export default class ActionBar extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection: 'row', backgroundColor:'#0f2636', alignItems:'center', justifyContent:'space-between'}}>
        <View style={{flex:1, alignItems:'flex-start'}}>
            <BackBox/>
        </View>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <TimerBox/>
        </View>
        <View style={{flex:1,  alignItems:'flex-end'}}>
            <ScoreBox/>
        </View>
      </View>
    );
  }
}