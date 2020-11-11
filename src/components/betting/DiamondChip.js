import React, { useState } from 'react';

import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import {
    DIAMOND_160,
    DIAMOND_200,
    DIAMOND_320,
    DIAMOND_400,
    DIAMOND_480,
    DIAMOND_600,
    DIAMOND_640,
    DIAMOND_800,
} from '../../constants/imageConstants';

const DiamondChip = (props) => {
  const [on, setOn] = useState(props.chip);

  function chipToggle(){
    setOn(!on);
    props.chipCallback(props.chipNum);
  }

    function getDiamondImage() {
        if(props.chipNum === "160")
            return DIAMOND_160
        else if(props.chipNum === "200")
            return DIAMOND_200
        else if(props.chipNum === "320")
            return DIAMOND_320
        else if(props.chipNum === "400")
            return DIAMOND_400
        else if(props.chipNum === "480")
            return DIAMOND_480
        else if(props.chipNum === "600")
            return DIAMOND_600
        else if(props.chipNum === "640")
            return DIAMOND_640
        else if(props.chipNum === "800")
            return DIAMOND_800
    }

  return (
      <View style={[styles.flexOneStyles, {opacity: on ? 1 : .5}]}>
          <TouchableOpacity onPress={() => chipToggle()} style={{flex:1}} >
              <Image
                  style={[styles.chipStyle]}
                  source={getDiamondImage()}/>
          </TouchableOpacity>
      </View>
  );
}
export default DiamondChip;

const styles = StyleSheet.create({
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
