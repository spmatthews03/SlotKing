import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackBox from '../BackBox';

export default class GoldChip extends Component {
  constructor(props){
    super(props);
    this.state = {
        on: false
    }
  }

  componentDidMount(){
      this.setState({on: this.props.chip})
  }

  chipToggle(){
    this.setState((prevState => ({on: !prevState.on})));
    this.props.chipCallback(this.props.chipNum);
  }

  render() {
    return (
        <View style={[styles.flexOneStyles, {opacity: this.state.on ? 1 : .5}]}>
            <TouchableOpacity onPress={() => this.chipToggle()} style={{flex:1}} >
                <Image
                    style={[styles.chipStyle]}
                    source={require('../../assets/images/chips/chip_gold.png')}/>
                <View style={styles.totalBet}>
                    <Text style={styles.totalBetText}>${this.props.chipNum}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
  }
}

var styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: 2
      },
      chipStyle:{
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
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
        fontSize: 38,
        fontFamily: 'PlayfairDisplay',
        color: 'black',
        textAlign: 'center'
      }
})