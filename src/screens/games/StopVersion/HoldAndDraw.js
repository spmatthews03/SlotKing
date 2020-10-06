import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, StatusBar, Text, TouchableOpacity, View, Alert, Platform } from 'react-native';
import HoldAndDrawHeader from '../../../components/stoppedComponents/HoldAndDrawHeader';
import Canvas from '../../../components/stoppedComponents/canvas/Canvas';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';
import WinningsBar from '../../../components/WinningsBar';
import DiscardBar from '../../../components/stoppedComponents/DiscardBar';
import ButtonBar from '../../../components/stoppedComponents/ButtonBar';
import HoldAndDrawFooter from '../../../components/footers/HoldAndDrawFooter';
import {gameStates} from '../../../constants/gameStates';
import { stoppedCalculator, stoppedBigCalculator } from '../../../helpers/payoutCalculators';
import GoldBetBar from '../../../components/betting/GoldBetBar';
import {
  TOGGLE_BET_BIG,
  TOGGLE_BET_SMALL,
  FLIP_BIG,
  FLIP_SMALL,
  HOLD_DRAW_ADD_WINNINGS,
  DEAL_BIG,
  DEAL_SMALL,
  DISCARD_BIG,
  DISCARD_SMALL,
  BET
} from '../../../constants/actionTypes';
import { BACKGROUND, TABLE_SLOT_KING_LOGO, PLAY_BUTTON_2 } from '../../../constants/imageConstants';
import { cardDeal, coinThud, win } from '../../../helpers/sounds';

const HoldAndDraw = (navigation) => {
  const navigator = navigation.navigation;
  const version = navigator.getParam('version','3x3');
  const credit = useSelector(state => state.versionReducer.credit);
  const soundOn = useSelector(state => state.versionReducer.soundOn);
  var gameState;
  var chips;
  var cards;
  var TOGGLE_BET;
  var FLIP;
  var DEAL;
  var DISCARD;
  if(version == '3x3'){
    gameState = useSelector(state => state.drawReducer.gameState)
    chips = useSelector(state => state.drawReducer.chips)
    cards = useSelector(state => state.drawReducer.cards)
    TOGGLE_BET = TOGGLE_BET_SMALL;
    FLIP = FLIP_SMALL;
    DEAL = DEAL_SMALL;
    DISCARD = DISCARD_SMALL;
  } else {
    gameState = useSelector(state => state.drawReducerBig.gameState)
    chips = useSelector(state => state.drawReducerBig.chips)
    cards = useSelector(state => state.drawReducerBig.cards)
    TOGGLE_BET = TOGGLE_BET_BIG;
    FLIP = FLIP_BIG;
    DEAL = DEAL_BIG;
    DISCARD = DISCARD_BIG;
  }
  const dispatch = useDispatch();
  const [winnings, setWinnings] = useState(0);
  const [totalBet, setTotalBet] = useState(calcTotalBet(chips));


  useEffect(() => {
    if(gameState === gameStates.RESULTS){
      let payload;
      if(version == '3x3')
        payload = stoppedCalculator(calcTotalBet(chips)/16, cards);
      else
        payload = stoppedBigCalculator(calcTotalBet(chips)/20, cards);

      if(payload > totalBet)
        win.play();

      setWinnings(payload);
      dispatch({type:HOLD_DRAW_ADD_WINNINGS, payload});
    }
  },[gameState])

  useEffect(() => {
    setTotalBet(calcTotalBet(chips));
  },[chips])

  function flipFunction(payload) {
    dispatch({type:FLIP});
    dispatch({type: BET, payload})
  }

  function toggleBet(payload) {
    coinThud.play();
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

  function deal(){
    dispatch({type: DEAL});
    cardDeal.play();
  }

  function draw(){
    dispatch({type: DISCARD})
    cardDeal.play()
  }


  function bettingButtons(bet) {
    return(
      <View style={{flex:1}}>
        <View style={{flex: .5, flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 50}}>
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
            onPress={() => deal()}
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
            onPress={() => draw()}
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
      <HoldAndDrawHeader credit={credit} navigation={navigator}/>
      <View style={{ flex: 6, flexDirection: 'row' }}>
        <View style={{ flex: 4, paddingVertical:10}}>
          <View style={{ flex: 1}}>
            <Canvas version={version}/>
            <View style={{ flex: 2, justifyContent: 'center', padding: 5 }}>
              {tmpFunction(totalBet)}
            </View>
          </View>
        </View>
      </View>
      <HoldAndDrawFooter credit={credit} state={gameState} navigation={navigator} version={version}/>
    </ImageBackground>
  );
}


export default HoldAndDraw;

