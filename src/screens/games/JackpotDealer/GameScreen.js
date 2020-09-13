import React from 'react';
import { Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ChipBar from '../../../components/betting/ChipBar';
import Canvas from '../../../components/dealerComponents/canvas/Canvas';
import { connect } from 'react-redux';
import { styles } from './styles';
import { deal, resetBet, repeatBet, betAll, flip } from '../../../store/actions/actions';
import JackpotDealerFooter from '../../../components/footers/JackpotDealerFooter';
import WinningsBar from '../../../components/dealerComponents/WinningsBar';
import ButtonBar from '../../../components/betting/ButtonBar';
import {gameStates} from '../../../constants/gameStates';


const mapStateToProps = state => {
  return{
    gameStarted: state.reducer.gameStarted,
    gameState: state.reducer.gameState,
    betting: state.reducer.betting,
    credit: state.reducer.credit,
    highlighted_chip: state.reducer.highlighted_chip,
    total_bet: state.reducer.total_bet,
    jackpot: state.reducer.jackpot,
    jackpotDisable: false,
    bets:{
      bet1: state.reducer.bets.bet1,
      bet2: state.reducer.bets.bet2,
      bet3: state.reducer.bets.bet3,
      bet4: state.reducer.bets.bet4,
      bet5: state.reducer.bets.bet5,
      bet6: state.reducer.bets.bet6,
      bet7: state.reducer.bets.bet7,
      bet8: state.reducer.bets.bet8,
      bet9: state.reducer.bets.bet9,
      bet10: state.reducer.bets.bet10,
      bet11: state.reducer.bets.bet11,
      bet12: state.reducer.bets.bet12,
      bet13: state.reducer.bets.bet13,
      bet14: state.reducer.bets.bet14,
      bet15: state.reducer.bets.bet15,
      bet16: state.reducer.bets.bet16,
    },
    previous_bets: state.reducer.previous_bets,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetBetFunction: () => dispatch(resetBet()),
    repeatBetFunction: () => dispatch(repeatBet()),
    dealFunction: () => dispatch(deal()),
    betAllFunction: () => dispatch(betAll()),
    flipFunction: () => dispatch(flip())
  };
};



class GameScreen extends React.Component {
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
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 50}}>
                  <TouchableOpacity
                    disabled={this.props.highlighted_chip == 0 ? true : false}
                    onPress={() => this.props.betAllFunction()}
                    style={{ flex: 1, width: '100%', padding: 10, opacity:this.props.highlighted_chip == 0 ? 0.2 : 1 }}>
                    <Image style={styles.bottomButtonsStyle}
                      source={require('../../../assets/images/bet_all.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.betJackpot()}
                    disabled={this.props.highlighted_chip == 0 ? true : false}
                    style={{ flex: 1, width: '100%', padding: 10, opacity:this.props.highlighted_chip == 0 ? 0.2 : 1 }}>
                    <Image style={styles.bottomButtonsStyle}
                      source={require('../../../assets/images/bet_jackpot.png')}
                    />
                  </TouchableOpacity>
                </View>
                <ChipBar/>
                <ButtonBar/>
              </View>
    )
  }

  dealButton = () => {
    return(
      <View style={{flex:1}}>
        <View style={{flex:1.5}}>
          {this.props.gameState === gameStates.NEW_GAME ? null : 
            <WinningsBar/>
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




  render() {
    return (
      
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../../assets/images/background.png")}
      >
        <StatusBar hidden={true} />
        {/* <JackpotBar credit={this.props.credit} jackpot={this.props.jackpot}/> */}
        <View style={{ flex: 6, flexDirection: 'row' }}>
          <View style={{ flex: 4, paddingVertical:10}}>
            <View style={{ flex: 1}}>
              <Canvas/>
              <View style={{ flex: 2, justifyContent: 'center', padding: 5 }}>
                {this.props.gameState === gameStates.RESULTS || this.props.gameState === gameStates.NEW_GAME ? this.dealButton() : this.bettingButtons()}
              </View>
            </View>
          </View>
        </View>
        <JackpotDealerFooter navigation={this.props.navigation}/>
      </ImageBackground>
    );
  }
}


export default connect( mapStateToProps, mapDispatchToProps) (GameScreen);

