import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image } from 'react-native';
import BackBox from './BackBox';
import JackpotBox from './JackpotBox';
import CreditBox from './CreditBox';

export default class JackpotBar extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{flex:0.7, flexDirection: 'row', backgroundColor:'#0f2636', alignItems:'center', justifyContent:'center'}}>
        <View style={{flex:1, alignItems:'flex-start'}}>
            <BackBox/>
        </View>
        <View style={{flex:1, justifyContent:'center', alignItems:'center', borderLeftColor:'gold', borderRightColor:'gold', borderWidth:1}}>
            <JackpotBox jackpot={this.props.jackpot}/>
        </View>
        <View style={{flex:1,  alignItems:'center'}}>
            <CreditBox credit={this.props.credit}/>
        </View>
      </View>
    );
  }
}