import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default class JackpotDealerPriceboard extends Component {
  render() {
    return (
        <ScrollView>
            <Image
                style={{width:'100%', resizeMode:'contain'}}
                source={require('../assets/images/priceboard_jackpot_dealer.png')}/>
        </ScrollView>
    );
  }
}