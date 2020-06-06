import React, { Component } from 'react';
 
import { StyleSheet, View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BackBox from '../BackBox';

export default class HoldAndDrawHeader extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{flex:0.6, flexDirection: 'row', backgroundColor:'#0f2636', alignItems:'center', justifyContent:'center'}}>
        <View style={{flex:1}}>
            <BackBox navigation={this.props.navigation}/>
        </View>
        <View style={{flex:2, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
          <View style={{flex:1, alignItems:'flex-end'}}>
            <LinearGradient colors={['#ae8625','#dfbd69', '#926f34']} useAngle={true} angle={90} style={styles.linearGradient}>
              <View>
                <Text style={styles.creditText}>CREDIT: </Text>   
              </View>
            </LinearGradient>
          </View>
          <View style={{flex:1, alignItems:'flex-end', justifyContent:'center'}}>
            <Text style={styles.creditValueText}>${this.props.credit}</Text>      
          </View>        
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  linearGradient: {
    flex:1,
    paddingHorizontal:15,
    justifyContent:'center'
  },
  creditText: {
    fontSize:26,
    fontFamily:'PlayfairDisplay-BoldItalic'
  },
  creditValueText: {
    fontSize: 30,
    color:'#f7ef8a',
    textAlign: 'center',
    fontFamily:'PlayfairDisplay-Regular'
  }
})