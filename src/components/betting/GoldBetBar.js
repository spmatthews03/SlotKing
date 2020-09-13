import React from 'react';
import { View } from 'react-native';
import GoldChip from './GoldChip';
import { useDispatch } from 'react-redux';
import { TOGGLE_BET } from '../../constants/actionTypes';


const GoldBetBar = (props) => {
  const dispatch = useDispatch();
  
  function chipBar() {
    var chipBarArray = [];
    for(var i = 0; i < Object.keys(props.chips).length; i++)
    {
      var chip = Object.keys(props.chips)[i];
      chipBarArray.push(<GoldChip chip={props.chips[chip]} chipCallback={props.parentCallback} chipNum={chip}/>);
    }
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
