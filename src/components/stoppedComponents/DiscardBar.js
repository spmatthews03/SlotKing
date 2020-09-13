import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class DiscardBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.discardBarViewStyle}>
                <View
                    style={styles.discardBarStyle}>
                    <Text style={styles.discardBetText}>SELECT THE CARDS YOU WANT TO HOLD</Text>
                </View>
        </View>
        );
    }
  }

export default DiscardBar;

const styles = StyleSheet.create({
    discardBarViewStyle:{
      flex:1, 
      flexDirection:'row', 
      justifyContent:'center', 
      alignItems:'center'
    },
    discardBarStyle:{
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 35,
      borderColor:'gold', 
      borderWidth: 1, 
      backgroundColor:'rgba(24, 58, 82,.5)',
      marginHorizontal:-35
    },
    discardBetText: {
      fontWeight:'bold',
      color:'white',
      fontSize:24,
      textAlign:'center'
    }
  });