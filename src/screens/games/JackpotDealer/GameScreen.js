import React from 'react';
import { Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ChipBar from '../../../components/ChipBar';
import JackpotBar from '../../../components/JackpotBar';
import MenuFooter from '../../../components/MenuFooter';
import Canvas from '../../../components/canvas/Canvas';
import shuffle from '../../../../helpers/dealer';
import CARDS from '../../../../constants/cards';
import { connect } from 'react-redux';
import { styles } from './styles';
import { deal, resetBet, repeatBet } from '../../../store/actions/actions';


const mapStateToProps = state => {
  return{
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
  };
};



class GameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  betAll = () => {
    this.setState({
      total_bet: this.state.total_bet + this.state.highlighted_chip * 16,
    })
  }

  betRepeat = () => {
    this.setState({
      bets: this.state.previous_bets,
    },() => {
      this.setState({total_bet: this.getTotalBet()})
    })
  }

  // dealNine = (cards) => {
  //   var deckOfNine = {};

  //   for( int i = 0; i < 3; i++){
  //     if(cards[i] == 'BAR'){
  //       deckOfNine.
  //     }
  //   }
  // }


  betJackpot = () => {
    this.setState({
      total_bet: this.state.total_bet + this.state.highlighted_chip * 16,
      jackpotDisable: true
    })
  }


  render() {
    const { navigate } = this.props.navigation;

    return (
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../../assets/images/background.png")}
      >
        <StatusBar hidden={true} />
        <JackpotBar credit={this.props.credit} jackpot={this.props.jackpot}/>
        <View style={{ flex: 6, flexDirection: 'row' }}>
          <View style={{ flex: 4, paddingVertical:10}}>
            <View style={{ flex: 1}}>
              <Canvas/>
              <View style={{ flex: 2, justifyContent: 'center', padding: 5 }}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 50}}>
                  <TouchableOpacity
                    onPress={() => this.betAll()}
                    style={{ flex: 1, width: '100%', padding: 10 }}>
                    <Image
                      style={{
                        flex: 1,
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                      }}
                      source={require('../../../assets/images/bet_all.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.betJackpot()}
                    disabled={this.props.highlighted_chip == 0 ? true : false}
                    style={{ flex: 1, width: '100%', padding: 10, opacity:this.props.highlighted_chip == 0 ? 0.2 : 1 }}>
                    <Image
                      style={{
                        flex: 1,
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                      }}
                      source={require('../../../assets/images/bet_jackpot.png')}
                    />
                  </TouchableOpacity>
                </View>
                <ChipBar parentCallback={this.chipBarCallback}/>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingHorizontal: 5,
                  }}>
                  <TouchableOpacity
                    disabled={this.props.total_bet === 0 ? true : false}
                    onPress={() => this.props.resetBetFunction()}
                    style={[styles.flexOneStyles, {opacity:this.props.total_bet === 0 ? 0.2 : 1}]}>
                    <Image style={styles.bottomButtonsStyle}
                      source={require('../../../assets/images/reset_bets.png')}/>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.props.repeatBetFunction()}
                    disabled={this.props.previous_bets === null ? true : false}
                    style={[styles.flexOneStyles, {opacity:this.props.previous_bets === null ? 0.2 : 1}]}>
                    <Image style={styles.bottomButtonsStyle}
                      source={require('../../../assets/images/bet_repeat.png')}/>
                  </TouchableOpacity>
                  <TouchableOpacity
                    disabled={true}
                    style={styles.flexOneStyles}>
                    <Image style={styles.bottomButtonsStyle}
                      source={require('../../../assets/images/buttons/button_totalbet.png')}/>
                    <View
                      style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={styles.totalBetText}>{"TOTAL BET\n" + this.props.total_bet}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.props.dealFunction()}
                    disabled={this.props.total_bet == 0 ? true : false}
                    style={[styles.flexOneStyles, {opacity:this.props.total_bet == 0 ? 0.2 : 1} ]}>
                    <Image
                      style={styles.bottomButtonsStyle}
                      source={require('../../../assets/images/buttons/button_play__button_play_2.png')}/>
                    <View
                      style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={styles.dealText}>{"DEAL"}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <MenuFooter/>
      </ImageBackground>
    );
  }
}


export default connect( mapStateToProps, mapDispatchToProps) (GameScreen);

