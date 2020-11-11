import React, { Component } from 'react';

import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import BackBox from '../BackBox';
import { HEADER_HI } from '../../constants/imageConstants';

export default class HoldAndDrawHeaderHI extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{flex:1, flexDirection: 'row'}}>
        <ImageBackground source={HEADER_HI} style={{width:'100%', resizeMode:'contain', flexDirection:'row', justifyContent:'space-between'}}>
          <View style={{flex:1}}>
              <BackBox navigation={this.props.navigation}/>
          </View>
          <View style={{flex:1, alignItems:'flex-end'}}>
            <Text style={styles.creditText}>Credit</Text>
            <Text style={styles.creditValueText}>
              {"$" + this.props.credit}
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  creditText: {
    fontSize:16,
    fontFamily:'PlayfairDisplay-Bold',
    color:'#f7ef8a'
  },
  creditValueText: {
    fontSize: 24,
    // color:'#f7ef8a',
    color:'white',
    textAlign: 'center',
    fontFamily:'PlayfairDisplay-Regular'
  },
})
