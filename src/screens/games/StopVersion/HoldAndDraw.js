import React, { useEffect, useState } from 'react';
import {SafeAreaView, Image, ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import HoldAndDrawHeader from '../../../components/stoppedComponents/HoldAndDrawHeader';
import Canvas from '../../../components/stoppedComponents/canvas/Canvas';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';
import WinningsBar from '../../../components/WinningsBar';
import DiscardBar from '../../../components/stoppedComponents/DiscardBar';
import ButtonBar from '../../../components/stoppedComponents/ButtonBar';
import HoldAndDrawFooter from '../../../components/footers/HoldAndDrawFooter';
import {gameStates} from '../../../constants/gameStates';
import {stoppedCalculator, stoppedBigCalculator, calculateTotalBet} from '../../../helpers/payoutCalculators';
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
  SET_WINNINGS_LINES_SMALL,
  SET_WINNINGS_LINES_BIG,
  BET, SET_ROOM
} from '../../../constants/actionTypes';
import { BACKGROUND, TABLE_SLOT_KING_LOGO, PLAY_BUTTON_2 } from '../../../constants/imageConstants';
import { cardDeal, coinThud, win } from '../../../helpers/sounds';

const HoldAndDraw = (navigation) => {
  const navigator = navigation.navigation;
  const version = navigator.getParam('version','3x3');
  const credit = useSelector(state => state.versionReducer.credit);
  let gameState;
  let chips;
  let cards;
  let calculated;
  let TOGGLE_BET;
  let FLIP;
  let DEAL;
  let DISCARD;
  let WINNING_LINES;
  if(version === '3x3'){
    gameState = useSelector(state => state.drawReducer.gameState)
    chips = useSelector(state => state.drawReducer.chips)
    cards = useSelector(state => state.drawReducer.cards)
    calculated = useSelector(state => state.drawReducer.calculated)
    TOGGLE_BET = TOGGLE_BET_SMALL;
    FLIP = FLIP_SMALL;
    DEAL = DEAL_SMALL;
    DISCARD = DISCARD_SMALL;
    WINNING_LINES = SET_WINNINGS_LINES_SMALL;
  } else {
    gameState = useSelector(state => state.drawReducerBig.gameState)
    chips = useSelector(state => state.drawReducerBig.chips)
    cards = useSelector(state => state.drawReducerBig.cards)
    calculated = useSelector(state => state.drawReducerBig.calculated)
    TOGGLE_BET = TOGGLE_BET_BIG;
    FLIP = FLIP_BIG;
    DEAL = DEAL_BIG;
    DISCARD = DISCARD_BIG;
    WINNING_LINES = SET_WINNINGS_LINES_BIG;
  }
  const dispatch = useDispatch();
  const [winnings, setWinnings] = useState(0);
  const [totalBet, setTotalBet] = useState(calculateTotalBet(chips));


  useEffect(() => {
    if(gameState === gameStates.RESULTS){
      let calculated_results;
      if(version === '3x3')
        calculated_results = stoppedCalculator(calculateTotalBet(chips)/16, cards);
      else
        calculated_results = stoppedBigCalculator(calculateTotalBet(chips)/20, cards);

      let payload = calculated_results.winnings;
      if(payload > totalBet)
        win.play();

      let winningLines = calculated_results.winning_lines;

      setWinnings(payload);
      if(!calculated) {
        dispatch({type: HOLD_DRAW_ADD_WINNINGS, payload});
        dispatch({type: WINNING_LINES, winningLines});
      }
    }
  },[gameState])

  useEffect(() => {
    return() => dispatch({type: SET_ROOM, payload: null})
  }, [])

  useEffect(() => {
    setTotalBet(calculateTotalBet(chips));
  },[chips])

  function flipFunction(payload) {
    dispatch({type:FLIP});
    cardDeal.play();
    dispatch({type: BET, payload})
  }

  function toggleBet(payload) {
    coinThud.play();
    dispatch({ type: TOGGLE_BET, payload})
  }

  function deal(){
    dispatch({type: DEAL});
    cardDeal.play();
  }

  function draw(){
    dispatch({type: DISCARD});
    cardDeal.play();
  }


  function bettingButtons(bet) {
    return(
      <View style={{flex:1}}>
        <View style={{flex: .5, flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 50}}>
          <Image
            style={{width:'100%', height:'100%', resizeMode:'contain'}}
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
          {gameState === gameStates.NEW_GAME || !calculated ? null :
              <WinningsBar totalbet={bet} winnings={winnings}/>
          }
        </View>
        <View
          style={[styles.flexOneStyles, {alignItems:"center", justifyContent:"center"}]}>
          <TouchableOpacity
            onPress={() => deal()}
            style={{width:'40%'}}>
            <Image
              style={styles.bottomButtonsStyle}
              source={PLAY_BUTTON_2}/>
            <View
              style={styles.dealButton}>
              <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.dealText}>{"DEAL"}</Text>
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
          style={[styles.flexOneStyles, {alignItems:"center", justifyContent:"center"}]}>
          <TouchableOpacity
            onPress={() => draw()}
            style={{width:'40%'}}>
            <Image
              style={styles.bottomButtonsStyle}
              source={PLAY_BUTTON_2}/>
            <View
              style={styles.dealButton}>
              <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.dealText}>{"DRAW"}</Text>
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
      <SafeAreaView style={{flex:1}}>
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
      <HoldAndDrawFooter credit={credit} state={gameState} navigation={navigator} version={version} totatlBet={totalBet}/>
      </SafeAreaView>
    </ImageBackground>
  );
}


export default HoldAndDraw;

