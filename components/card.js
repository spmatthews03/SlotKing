import React, { Component } from 'react';

import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      in_playerhand = false;
      discarded = false;
    }
  }

  render() {
    return (
      <
      <TouchableOpacity>
        <Image
          source={require('../assets/card/cherry.png')}
          style={[
            commonStyle.card,
            this.props.style,
            { transform: [{ rotate: this.props.rotation + 'deg'}]},
          ]}
        />
      </TouchableOpacity>
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