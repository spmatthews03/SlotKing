import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image } from 'react-native';
import BackBox from './BackBox';
import JackpotBox from './JackpotBox';
import CreditBox from './CreditBox';

export default class HoldAndDrawHeader extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{flex:0.6, flexDirection: 'row', backgroundColor:'#0f2636', alignItems:'center', justifyContent:'center'}}>
        <View style={{flex:1}}>
            <BackBox/>
        </View>
        <View style={{flex:7,  alignItems:'center'}}>
          <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
              <Text style={{fontSize:14, color:'goldenrod'}}>CREDIT</Text>   
              <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>{this.props.credit}</Text>      
          </View>        
        </View>
      </View>
    );
  }
}