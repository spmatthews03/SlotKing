import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { ADD_HOLD_DRAW_BET } from '../../../constants/actionTypes';



const mapStateToProps = state => {
  return{
    //
  };
};

const mapDispatchToProps = dispatch => (  {
      addBetFunction: payload => dispatch({type: ADD_HOLD_DRAW_BET, payload}),
});



class GoldBetBar extends Component {
    constructor(props) {
        super(props);
    }


    addChipBet = (number) => {
      let pressedChip;
      if (number == 'sixteen') {
        pressedChip = 16;
      }
      if (number == 'thirtytwo') {
        pressedChip = 32;
      }
      if (number == 'fortyeight') {
        pressedChip = 48;
      }
      if (number == 'sixtyfour') {
        pressedChip = 64;
      }

  
      this.props.addBetFunction(pressedChip);
    };

    


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
                    <TouchableOpacity
                        onPress={() => this.addChipBet('sixteen')}
                        style={[styles.flexOneStyles]}>
                        <Image
                          style={[styles.chipStyle]}
                          source={require('../../assets/images/chips/chip_gold.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.addChipBet('thirtytwo')}
                        style={styles.flexOneStyles}>
                        <Image
                          style={[styles.chipStyle]}
                          source={require('../../assets/images/chips/chip_gold.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.addChipBet('fortyeight')}
                        style={styles.flexOneStyles}>
                        <Image
                          style={[styles.chipStyle]}
                          source={require('../../assets/images/chips/chip_gold.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.addChipBet('sixtyfour')}
                        style={styles.flexOneStyles}>
                        <Image
                          style={[styles.chipStyle]}
                          source={require('../../assets/images/chips/chip_gold.png')}/>
                    </TouchableOpacity>
                </View>
        </View>
        );
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(GoldBetBar);

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
    }
  });