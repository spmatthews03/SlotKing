import React from 'react';
import { View } from 'react-native';
import DiamondChip from './DiamondChip';


const DiamondBetBar = (props) => {

  function chipBar() {
    var chipBarArray = [];
    for(var i = 0; i < Object.keys(props.chips).length; i++)
    {
      var chip = Object.keys(props.chips)[i];
      chipBarArray.push(<DiamondChip chip={props.chips[chip]} chipCallback={props.parentCallback} chipNum={chip}/>);
    }
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
