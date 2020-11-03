import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, StatusBar, Text, TouchableOpacity, View, Alert, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';
import WinningsBar from '../../../components/WinningsBar';
import DiscardBar from '../../../components/stoppedComponents/DiscardBar';
import ButtonBar from '../../../components/stoppedComponents/ButtonBar';
import HoldAndDrawFooterHI from '../../../components/footers/HoldAndDrawFooterHI';
import {gameStates} from '../../../constants/gameStates';
import { stoppedCalculator, stoppedBigCalculator } from '../../../helpers/payoutCalculators';
import {
  HI_TOGGLE_BET_BIG,
  HI_TOGGLE_BET_SMALL,
  HI_FLIP_BIG,
  HI_FLIP_SMALL,
  HOLD_DRAW_ADD_WINNINGS,
  HI_DEAL_BIG,
  HI_DEAL_SMALL,
  HI_DISCARD_BIG,
  HI_DISCARD_SMALL,
  BET, HI_SET_WINNINGS_LINES_SMALL, HI_SET_WINNINGS_LINES_BIG
} from '../../../constants/actionTypes';
import {PLAY_BUTTON_2, HI_BACKGROUND, TABLE_SLOT_KING_LOGO} from '../../../constants/imageConstants';
import { cardDeal, coinThud, win } from '../../../helpers/sounds';
import CanvasHI from '../../../components/stoppedComponents/canvas/CanvasHI';
import HoldAndDrawHeaderHI from '../../../components/stoppedComponents/HoldAndDrawHeaderHI';
import DiamondBetBar from '../../../components/betting/DiamondBetBar';

const HoldAndDrawHi = (navigation) => {
  const navigator = navigation.navigation;
  const version = navigator.getParam('version','3x3');
  const credit = useSelector(state => state.versionReducer.credit);
  const soundOn = useSelector(state => state.versionReducer.soundOn);
  let gameState;
  let chips;
  let cards;
  let TOGGLE_BET;
  let FLIP;
  let DEAL;
  let DISCARD;
  let WINNING_LINES;
  if(version == '3x3'){
    gameState = useSelector(state => state.drawReducerHI.gameState)
    chips = useSelector(state => state.drawReducerHI.chips)
    cards = useSelector(state => state.drawReducerHI.cards)
    TOGGLE_BET = HI_TOGGLE_BET_SMALL;
    FLIP = HI_FLIP_SMALL;
    DEAL = HI_DEAL_SMALL;
    DISCARD = HI_DISCARD_SMALL;
    WINNING_LINES = HI_SET_WINNINGS_LINES_SMALL;
  } else {
    gameState = useSelector(state => state.drawReducerBigHI.gameState)
    chips = useSelector(state => state.drawReducerBigHI.chips)
    cards = useSelector(state => state.drawReducerBigHI.cards)
    TOGGLE_BET = HI_TOGGLE_BET_BIG;
    FLIP = HI_FLIP_BIG;
    DEAL = HI_DEAL_BIG;
    DISCARD = HI_DISCARD_BIG;
    WINNING_LINES = HI_SET_WINNINGS_LINES_BIG;
  }
  const dispatch = useDispatch();
  const [winnings, setWinnings] = useState(0);
  const [totalBet, setTotalBet] = useState(calcTotalBet(chips));


  useEffect(() => {
    if(gameState === gameStates.RESULTS){
      let calculated;
      if(version == '3x3')
        calculated = stoppedCalculator(calcTotalBet(chips)/16, cards);
      else
        calculated = stoppedBigCalculator(calcTotalBet(chips)/20, cards);

      let payload = calculated.winnings;
      if(payload > totalBet)
        win.play();

      let winningLines = calculated.winning_lines;

      setWinnings(payload);
      dispatch({type:HOLD_DRAW_ADD_WINNINGS, payload});
      dispatch({type:WINNING_LINES, winningLines});
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
          <Image
              style={{width:'100%', height:'100%', resizeMode:'contain'}}
              source={TABLE_SLOT_KING_LOGO}/>
        </View>
        <DiamondBetBar credit={credit} chips={chips} parentCallback={toggleBet}/>
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
      source={HI_BACKGROUND}
    >
      <StatusBar hidden={true} />
      <HoldAndDrawHeaderHI credit={credit} navigation={navigator}/>
      <View style={{ flex: 6, flexDirection: 'row' }}>
        <View style={{ flex: 4, paddingVertical:10}}>
          <View style={{ flex: 1}}>
            <CanvasHI version={version}/>
            <View style={{ flex: 2, justifyContent: 'center', padding: 5 }}>
              {tmpFunction(totalBet)}
            </View>
          </View>
        </View>
      </View>
      <HoldAndDrawFooterHI credit={credit} state={gameState} navigation={navigator} version={version} totalBet={totalBet}/>
    </ImageBackground>
  );
}


export default HoldAndDrawHi;

