import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default class TimerBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      timer: null,
      minutes_Counter: '00',
      seconds_Counter: '00',
      startDisable: false
    }
  }

  timerStart = () => {
    let timer = setInterval(() => {
 
      var num = (Number(this.state.seconds_Counter) + 1).toString(),
        count = this.state.minutes_Counter;
 
      if (Number(this.state.seconds_Counter) == 59) {
        count = (Number(this.state.minutes_Counter) + 1).toString();
        num = '00';
      }
 
      this.setState({
        minutes_Counter: count.length == 1 ? '0' + count : count,
        seconds_Counter: num.length == 1 ? '0' + num : num
      });
    }, 1000);
    this.setState({ timer });
   }

  componentWillMount(){
    this
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