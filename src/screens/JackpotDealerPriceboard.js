import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const Priceboard = () => {

  return (
    <ScrollView>
      <View style={{flex:1}}>
        <Image
            style={{width:'100%',resizeMode:'contain'}}
            source={require('../assets/images/priceboard_jackpot_dealer.png')}/>
        </View>
    </ScrollView>
  );
}

export default Priceboard;