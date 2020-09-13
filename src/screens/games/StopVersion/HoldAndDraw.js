import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, StatusBar, Text, TouchableOpacity, View, Alert, Platform } from 'react-native';
import HoldAndDrawHeader from '../../../components/stoppedComponents/HoldAndDrawHeader';
import StoppedCanvas from '../../../components/stoppedComponents/canvas/StoppedCanvas';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';
import { DEAL, DISCARD } from '../../../store/actions/actions';
import WinningsBar from '../../../components/dealerComponents/WinningsBar';
import DiscardBar from '../../../components/stoppedComponents/DiscardBar';
import ButtonBar from '../../../components/stoppedComponents/ButtonBar';
import HoldAndDrawFooter from '../../../components/footers/HoldAndDrawFooter';
import {gameStates} from '../../../constants/gameStates';
import { stoppedCalculator } from '../../../helpers/payoutCalculators';
import GoldBetBar from '../../../components/betting/GoldBetBar';
import { TOGGLE_BET, HOLD_DRAW_FLIP, HOLD_DRAW_ADD_WINNINGS, TOGGLE_BET_OFF } from '../../../constants/actionTypes';
import { BACKGROUND, TABLE_SLOT_KING_LOGO, PLAY_BUTTON_2 } from '../../../constants/imageConstants';


const HoldAndDraw = (navigation) => {
  const gameState = useSelector(state => state.drawReducer.gameState)
  const chips = useSelector(state => state.drawReducer.chips)
  const credit = useSelector(state => state.drawReducer.credit)
  const cards = useSelector(state => state.drawReducer.cards)

  const dispatch = useDispatch();
  const [winnings, setWinnings] = useState(0);
  const [totalBet, setTotalBet] = useState(calcTotalBet(chips));


  useEffect(() => {
    if(gameState === gameStates.RESULTS){
      let payload = stoppedCalculator(calcTotalBet(chips)/16, cards);
      setWinnings(payload);
      dispatch({type:HOLD_DRAW_ADD_WINNINGS, payload});
    }
  },[gameState])

  useEffect(() => {
    setTotalBet(calcTotalBet(chips));
  },[chips])

  function flipFunction(payload) {
    dispatch({type:HOLD_DRAW_FLIP, payload});
  }

  function toggleBet(payload) {
    dispatch({ type: TOGGLE_BET, payload})
  }

  function rewardAlert(){
    if(Platform.OS == 'android')
      Alert.alert("Congratulations! You just earned $500 in chips!");
  }

  function calcTotalBet(gameChips) {
    var total = 0;
    let chips = gameChips;
    for(var i = 0; i < Object.keys(chips).length; i++){
      var chip = Object.keys(chips)[i]
      if(chips[chip])
        total = total + parseInt(chip);
    }
    return total;
  }


  function bettingButtons(bet) {
    return(
              <View style={{flex:1}}>
                <View style={{flex: .5, flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 50}}>
                  <Image
                    style={{width:'100%',height:'100%', resizeMode:'contain'}} 
                    source={TABLE_SLOT_KING_LOGO}/>
                </View>
                <GoldBetBar credit={credit} chips={chips} parentCallback={toggleBet}/>
                <ButtonBar 
                  total_bet={bet}
                  flip={flipFunction}
                  />
              </View>
    )
  }


  function dealButton(bet) {
    return(
      <View style={{flex:1}}>
        <View style={{flex:1.5}}>
          {gameState === gameStates.NEW_GAME ? null : 
            <WinningsBar totalbet={bet} winnings={winnings}/>
          }
        </View>
        <View
          style={[styles.buttonBar, {alignItems:"center", justifyContent:"center"}]}>
          <TouchableOpacity
            onPress={() => dispatch({type: DEAL})}
            style={[styles.flexOneStyles]}>
            <Image
              style={styles.bottomButtonsStyle}
              source={PLAY_BUTTON_2}/>
            <View
              style={styles.dealButton}>
              <Text style={styles.dealText}>{"DEAL"}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  function discardButton() {
    return(
      <View style={{flex:1}}>
        <View style={{flex:1.5}}>
          <DiscardBar/>
        </View>
        <View
          style={[styles.buttonBar, {alignItems:"center", justifyContent:"center"}]}>
          <TouchableOpacity
            onPress={() => dispatch({type: DISCARD})}
            style={[styles.flexOneStyles]}>
            <Image
              style={styles.bottomButtonsStyle}
              source={PLAY_BUTTON_2}/>
            <View
              style={styles.dealButton}>
              <Text style={styles.dealText}>{"DRAW"}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  function tmpFunction(bet) {
    if(gameState === gameStates.RESULTS || gameState === gameStates.NEW_GAME){
      return dealButton(bet);
    } else if(gameState === gameStates.WAIT_ON_DISCARD){
      return discardButton();
    } else if(gameState === gameStates.BETTING){
      return bettingButtons(bet);
    }
  }

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={BACKGROUND}
    >
      <StatusBar hidden={true} />
      <HoldAndDrawHeader credit={credit} navigation={navigation}/>
      <View style={{ flex: 6, flexDirection: 'row' }}>
        <View style={{ flex: 4, paddingVertical:10}}>
          <View style={{ flex: 1}}>
            <StoppedCanvas/>
            <View style={{ flex: 2, justifyContent: 'center', padding: 5 }}>
              {tmpFunction(totalBet)}
            </View>
          </View>
        </View>
      </View>
      <HoldAndDrawFooter credit={credit} state={gameState} navigation={navigation}/>
    </ImageBackground> 
  );
}


export default HoldAndDraw;

