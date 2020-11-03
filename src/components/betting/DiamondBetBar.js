import React from 'react';
import { View, Text } from 'react-native';
import DiamondChip from './DiamondChip';


const DiamondBetBar = (props) => {

  function chipBar() {
    var chipBarArray = [];
    let total = 0;
    for(var i = 0; i < Object.keys(props.chips).length; i++)
    {
      var chip = Object.keys(props.chips)[i];
        total = total + parseInt(chip);
        if(total <= props.credit)
            chipBarArray.push(<DiamondChip chip={props.chips[chip]} chipCallback={props.parentCallback} chipNum={chip}/>);
        else {
            if(props.chips[chip])
                props.parentCallback(chip);
        }
    }
    if(chipBarArray.length == 0)
        return (
            <View style={{height:'100%', justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'white', fontSize:24, fontFamily:'PlayfairDisplay-Bold'}}>Not Enough Credit</Text>
            </View>)
    return chipBarArray;
  }

  return (
      <View style={{flex:1, borderRadius:15, borderColor:'gold', borderWidth: 1, backgroundColor:'#280000', flexDirection:'row', padding:8, justifyContent:'center'}}>
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

export default DiamondBetBar;
