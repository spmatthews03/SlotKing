import React from 'react';
import { Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HoldAndDrawHeader from '../../../components/HoldAndDrawHeader';
import Canvas from '../../../components/stoppedComponents/canvas/StoppedCanvas';
import { connect } from 'react-redux';
import { styles } from './styles';
import { deal, resetBet, repeatBet, betAll, dealFaceDown, flipCards, flip, discard } from '../../../store/actions/actions';
import WinningsBar from '../../../components/dealerComponents/WinningsBar';
import DiscardBar from '../../../components/stoppedComponents/DiscardBar';
import ButtonBar from '../../../components/betting/ButtonBar';
import HoldAndDrawFooter from '../../../components/footers/HoldAndDrawFooter';
import {gameStates} from '../../../../constants/gameStates';
import { stoppedCalculator } from '../../../../helpers/payoutCalculators';
import GoldBetBar from '../../../components/betting/GoldBetBar';
import { HOLD_DRAW_REPEAT_BET } from '../../../../constants/actionTypes';

const mapStateToProps = state => {
  return{
    gameStarted: state.drawReducer.gameStarted,
    gameState: state.drawReducer.gameState,
    betting: state.drawReducer.betting,
    credit: state.drawReducer.credit,
    total_bet: state.drawReducer.total_bet,
    cards: state.drawReducer.cards,
    previous_bets: state.drawReducer.previous_bets,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetBetFunction: () => dispatch(resetBet()),
    repeatBetFunction: () => dispatch({type:HOLD_DRAW_REPEAT_BET}),
    dealFunction: () => dispatch(deal()),
    betAllFunction: () => dispatch(betAll()),
    flipFunction: () => dispatch(flip()),
    discardFunction: () => dispatch(discard())
  };
};



class HoldAndDraw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  betJackpot = () => {
    this.setState({
      total_bet: this.state.total_bet + this.state.highlighted_chip * 16,
      jackpotDisable: true
    })
  }

  bettingButtons = () => {
    return(
              <View style={{flex:1}}>
                <View style={{flex: .5, flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 50}}>
                </View>
                <GoldBetBar parentCallback={this.chipBarCallback}/>
                <ButtonBar 
                  total_bet={this.props.total_bet}
                  previous_bets={this.props.previous_bets}
                  resetBet={this.props.resetBetFunction}
                  repeatBet={this.props.repeatBetFunction}
                  flip={this.props.flipFunction}
                  />
              </View>
    )
  }

  dealButton = () => {
    return(
      <View style={{flex:1}}>
        <View style={{flex:1.5}}>
          {this.props.gameState === gameStates.NEW_GAME ? null : 
            <WinningsBar totalbet={this.props.total_bet} winnings={stoppedCalculator(this.props.cards)}/>
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
            onPress={() => this.props.discardFunction()}
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

  tmpFunction = () => {
    if(this.props.gameState === gameStates.RESULTS || this.props.gameState === gameStates.NEW_GAME){
      return this.dealButton();
    } else if(this.props.gameState === gameStates.WAIT_ON_DISCARD){
      return this.discardButton();
    } else if(this.props.gameState === gameStates.BETTING){
      return this.bettingButtons();
    }
  }
  




  render() {
    return (
      
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../../assets/images/background.png")}
      >
        <StatusBar hidden={true} />
        <HoldAndDrawHeader credit={this.props.credit} jackpot={this.props.jackpot}/>
        <View style={{ flex: 6, flexDirection: 'row' }}>
          <View style={{ flex: 4, paddingVertical:10}}>
            <View style={{ flex: 1}}>
              <Canvas/>
              <View style={{ flex: 2, justifyContent: 'center', padding: 5 }}>
                {this.tmpFunction()}
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

