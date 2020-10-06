import React, { useState } from 'react';

import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { DIAMOND_CHIP } from '../../constants/imageConstants';

const DiamondChip = (props) => {
  const [on, setOn] = useState(props.chip);

  function chipToggle(){
    setOn(!on);
    props.chipCallback(props.chipNum);
  }

  return (
      <View style={[styles.flexOneStyles, {opacity: on ? 1 : .5}]}>
          <TouchableOpacity onPress={() => chipToggle()} style={{flex:1}} >
              <Image
                  style={[styles.chipStyle]}
                  source={DIAMOND_CHIP}/>
              <View style={styles.totalBet}>
                  <Text style={styles.totalBetText}>{props.chipNum}</Text>
              </View>
          </TouchableOpacity>
      </View>
  );
}
export default DiamondChip;

var styles = StyleSheet.create({
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
        fontSize: 30,
        fontFamily: 'PlayfairDisplay-Bold',
        color: 'black',
        textAlign: 'center'
      }
})
