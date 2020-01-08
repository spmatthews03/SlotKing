import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default class CardPlacer extends Component {
  render() {
    return (
        <View style={styles.cardPlacer}/>
    );
  }
}

const styles = StyleSheet.create({
    cardPlacer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'goldenrod',
        borderWidth:1,
        borderRadius:10,
        backgroundColor:'rgba(15,38,54,.2)'
    }
});