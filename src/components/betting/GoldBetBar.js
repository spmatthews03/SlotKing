import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import GoldChip from './GoldChip';


class GoldBetBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex:1, borderRadius:15, borderColor:'gold', borderWidth: 1, backgroundColor:'#0f2636', flexDirection:'row', padding:8, justifyContent:'center'}}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        paddingHorizontal: 35,
                    }}
                    >
                    <GoldChip chip={this.props.chips["16"]} chipCallback={this.props.parentCallback} chipNum={16}/>
                    <GoldChip chip={this.props.chips["32"]} chipCallback={this.props.parentCallback} chipNum={32}/>
                    <GoldChip chip={this.props.chips["48"]} chipCallback={this.props.parentCallback} chipNum={48}/>
                    <GoldChip chip={this.props.chips["64"]} chipCallback={this.props.parentCallback} chipNum={64}/>
                </View>
        </View>
        );
    }
  }

export default GoldBetBar;

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
    totalBet: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    totalBetText: {
      fontWeight: 'bold',
      fontSize: 30,
      fontFamily: 'Roboto-Bold',
      color: 'black',
      textAlign: 'center'
    }
  });