import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class WinningsBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.winningBarViewStyle}>
                <View
                    style={styles.winningBarStyle}>
                    <Text style={styles.totalBetText}>Your Total Bet: {this.props.totalbet}</Text>
                    <Text style={styles.winningBetText}>Your Winnings: {this.props.winnings}</Text>
                </View>
        </View>
        );
    }
  }

export default WinningsBar;

const styles = StyleSheet.create({
    imageContainer: {
      flex: 1,
      alignItems: 'stretch'
    },
    container: {
      flex: 1,
      paddingTop: 2
    },
    backgroundImage: {
      flex: 1,
      width: undefined,
      height: undefined
    },
    chipStyle:{
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'contain'
    },
    winningBarViewStyle:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    },
    winningBarStyle:{
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 35,
      borderColor:'gold',
      borderWidth: 1,
      backgroundColor:'rgba(24, 58, 82,.5)',
      marginHorizontal:-35
    },
    bottomButtonsStyle:{
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    flexOneStyles:{
      flex: 1,
      width: '100%',
      padding: 5
    },
    totalBetText: {
      color:'white',
      fontSize:24,
      textAlign:'center',
      fontFamily:'PlayfairDisplay-Bold'
    },
    winningBetText: {
      color:'white',
      fontSize:30,
      textAlign:'center',
      fontFamily:'PlayfairDisplay-Bold'
    }
  });
