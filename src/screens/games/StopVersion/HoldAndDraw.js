import React from 'react';
import { Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HoldAndDrawHeader from '../../../components/stoppedComponents/HoldAndDrawHeader';
import StoppedCanvas from '../../../components/stoppedComponents/canvas/StoppedCanvas';
import { connect } from 'react-redux';
import { styles } from './styles';
import { deal, resetBet, repeatBet, betAll, dealFaceDown, flipCards, flip, discard } from '../../../store/actions/actions';
import WinningsBar from '../../../components/dealerComponents/WinningsBar';
import DiscardBar from '../../../components/stoppedComponents/DiscardBar';
import ButtonBar from '../../../components/stoppedComponents/ButtonBar';
import HoldAndDrawFooter from '../../../components/footers/HoldAndDrawFooter';
import {gameStates} from '../../../../constants/gameStates';
import { stoppedCalculator } from '../../../../helpers/payoutCalculators';
import GoldBetBar from '../../../components/betting/GoldBetBar';
import { HOLD_DRAW_REPEAT_BET, TOGGLE_BET, HOLD_DRAW_FLIP, HOLD_DRAW_ADD_WINNINGS } from '../../../../constants/actionTypes';

const mapStateToProps = state => {
  return{
    gameStarted: state.drawReducer.gameStarted,
    gameState: state.drawReducer.gameState,
    betting: state.drawReducer.betting,
    chips: state.drawReducer.chips,
    credit: state.drawReducer.credit,
    total_bet: state.drawReducer.total_bet,
    cards: state.drawReducer.cards,
    previous_bets: state.drawReducer.previous_bets,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    repeatBetFunction: () => dispatch({type:HOLD_DRAW_REPEAT_BET}),
    toggleBetFunciton: (payload) => dispatch({type:TOGGLE_BET, payload}),
    dealFunction: () => dispatch(deal()),
    betAllFunction: () => dispatch(betAll()),
    flipFunction: (payload) => dispatch({type:HOLD_DRAW_FLIP, payload}),
    discardFunction: () => dispatch(discard()),
    addCredit: (payload) => dispatch({type:HOLD_DRAW_ADD_WINNINGS, payload})
  };
};



class HoldAndDraw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winnings: 0
    }
  }

  toggleBet = (chipvalue) => {
    this.props.toggleBetFunciton(chipvalue);
  }

  calcTotalBet = () => {
    var total = 0;
    let chips = this.props.chips;
    if(chips['16']){
        total = total + 16;
    }
    if(chips['32']){
        total = total + 32;
    }
    if(chips['48']){
        total = total + 48;
    }
    if(chips['64']){
        total = total + 64;
    }
    return total;
  }

  bettingButtons = (bet) => {
    return(
              <View style={{flex:1}}>
                <View style={{flex: .5, flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 50}}>
                  <Image
                    style={{width:'100%',height:'100%', resizeMode:'contain'}} 
                    source={require('../../../assets/images/tableslotking.png')}/>
                </View>
                <GoldBetBar chips={this.props.chips} parentCallback={this.toggleBet}/>
                <ButtonBar 
                  total_bet={bet}
                  flip={this.props.flipFunction}
                  />
              </View>
    )
  }


  discard = () => {
    var winnings = stoppedCalculator(this.props.cards);
    this.setState({winnings: winnings});
    this.props.discardFunction();
    this.props.addCredit(winnings);
  }


  dealButton = (bet) => {
    return(
      <View style={{flex:1}}>
        <View style={{flex:1.5}}>
          {this.props.gameState === gameStates.NEW_GAME ? null : 
            <WinningsBar totalbet={bet} winnings={this.state.winnings}/>
          }
        </View>
        <View
          style={[styles.buttonBar, {alignItems:"center", justifyContent:"center"}]}>
          <TouchableOpacity
            onPress={() => this.props.dealFunction()}
            style={[styles.flexOneStyles]}>
            <Image
              style={styles.bottomButtonsStyle}
              source={require('../../../assets/images/buttons/button_play__button_play_2.png')}/>
            <View
              style={styles.dealButton}>
              <Text style={styles.dealText}>{"DEAL"}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )

  }

  discardButton = () => {
    return(
      <View style={{flex:1}}>
        <View style={{flex:1.5}}>
          <DiscardBar/>
        </View>
        <View
          style={[styles.buttonBar, {alignItems:"center", justifyContent:"center"}]}>
          <TouchableOpacity
            onPress={() => this.discard()}
            style={[styles.flexOneStyles]}>
            <Image
              style={styles.bottomButtonsStyle}
              source={require('../../../assets/images/buttons/button_play__button_play_2.png')}/>
            <View
              style={styles.dealButton}>
              <Text style={styles.dealText}>{"DISCARD"}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  tmpFunction = (bet) => {
    if(this.props.gameState === gameStates.RESULTS || this.props.gameState === gameStates.NEW_GAME){
      return this.dealButton(bet);
    } else if(this.props.gameState === gameStates.WAIT_ON_DISCARD){
      return this.discardButton();
    } else if(this.props.gameState === gameStates.BETTING){
      return this.bettingButtons(bet);
    }
  }
  

  render() {
    var totalBet = this.calcTotalBet();

    return (
      
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../../assets/images/background.png")}
      >
        <StatusBar hidden={true} />
        <HoldAndDrawHeader credit={this.props.credit} navigation={this.props.navigation}/>
        <View style={{ flex: 6, flexDirection: 'row' }}>
          <View style={{ flex: 4, paddingVertical:10}}>
            <View style={{ flex: 1}}>
              <StoppedCanvas/>
              <View style={{ flex: 2, justifyContent: 'center', padding: 5 }}>
                {this.tmpFunction(totalBet)}
              </View>
            </View>
          </View>
        </View>
        <HoldAndDrawFooter navigation={this.props.navigation}/>
      </ImageBackground>
    );
  }
}


export default connect( mapStateToProps, mapDispatchToProps) (HoldAndDraw);

