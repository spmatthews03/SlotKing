import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default class Deck extends Component {
  constructor(props){
    super(props);
    this.state = {
      //
    }
  }

  componentDidMount(){
    //
  }


  render() {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={styles.timeTitle}>Time</Text>   
            <Text style={styles.timerText}>{this.state.minutes_Counter}:{this.state.seconds_Counter}</Text>   
        </View>
    );
  }
}

const styles = StyleSheet.create({
  timerText:{
    fontSize: 18,
    fontWeight:'bold',
    color:'white'
  },
  timeTitle:{
    fontSize:12,
    color:'goldenrod'
  }
})