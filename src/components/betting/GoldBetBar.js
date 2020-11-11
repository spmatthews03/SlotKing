import React from 'react';
import {Text, View} from 'react-native';
import GoldChip from './GoldChip';

const GoldBetBar = (props) => {

  function chipBar() {
    let chipBarArray = [];
    let total = 0;
    for(let i = 0; i < Object.keys(props.chips).length; i++)
    {
        let chip = Object.keys(props.chips)[i];
        total = total + parseInt(chip);
        if(total <= props.credit)
            chipBarArray.push(<GoldChip chip={props.chips[chip]} chipCallback={props.parentCallback} chipNum={chip}/>);
        else {
            if(props.chips[chip])
                props.parentCallback(chip);
        }
    }
      if(chipBarArray.length === 0)
          return (
              <View style={{height:'100%', justifyContent:'center', alignItems:'center'}}>
                  <Text style={{color:'white', fontSize:24, fontFamily:'PlayfairDisplay-Bold'}}>Not Enough Credit</Text>
              </View>)
    return chipBarArray;
  }

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
                {chipBar()}
          </View>
  </View>
  );
}

export default GoldBetBar;
