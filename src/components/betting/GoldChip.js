import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import {CHIP_16, CHIP_32, CHIP_48, CHIP_64, GOLD_CHIP} from '../../constants/imageConstants';

const GoldChip = (props) => {
  const [on, setOn] = useState(props.chip);

  function chipToggle(){
    setOn(!on);
    props.chipCallback(props.chipNum);
  }

  function getChipImage() {
      if(props.chipNum == "16")
        return CHIP_16
      // else if(props.chipNum == "20")
      //     return CHIP_20
      else if(props.chipNum == "32")
          return CHIP_32
      // else if(props.chipNum == "40")
      //     return CHIP_40
      else if(props.chipNum == "48")
          return CHIP_48
      // else if(props.chipNum == "60")
      //     return CHIP_60
      else if(props.chipNum == "64")
          return CHIP_64
      // else if(props.chipNum == "80")
      //     return CHIP_80
  }


  return (
      <View style={[styles.flexOneStyles, {opacity: on ? 1 : .5}]}>
          <TouchableOpacity onPress={() => chipToggle()} style={{flex:1}} >
              <Image
                  style={[styles.chipStyle]}
                  source={getChipImage()}/>
          </TouchableOpacity>
      </View>
  );
}
export default GoldChip;

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
        fontSize: 38,
        fontFamily: 'PlayfairDisplay-Bold',
        color: 'black',
        textAlign: 'center'
      }
})
