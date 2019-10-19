import React from 'react';
import { Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ChipBar from '../../components/ChipBar';
import JackpotBar from '../../components/JackpotBar';
import MenuFooter from '../../components/MenuFooter';
import Canvas from '../../components/canvas/Canvas';
import shuffle from '../../helpers/dealer';
import CARDS from '../../constants/cards';

export default class GameScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      credit: 1000,
      highlighted_chip: 0,
      total_bet: '',
      jackpot: 100,
      jackpotDisable: false,
      bets:{
        bet1: 0,
        bet2: 0,
        bet3: 0,
        bet4: 0,
        bet5: 0,
        bet6: 0,
        bet7: 0,
        bet8: 0,
        bet9: 0,
        bet10: 0,
        bet11: 0,
        bet12: 0,
        bet13: 0,
        bet14: 0,
        bet15: 0,
        bet16: 0,
      },
      previous_bets: {},
      cards: {
        card1: require('../../assets/images/canvas/card_holder.png'),
        card2: require('../../assets/images/canvas/card_holder.png'),
        card3: require('../../assets/images/canvas/card_holder.png'),
        card4: require('../../assets/images/canvas/card_holder.png'),
        card5: require('../../assets/images/canvas/card_holder.png'),
        card6: require('../../assets/images/canvas/card_holder.png'),
        card7: require('../../assets/images/canvas/card_holder.png'),
        card8: require('../../assets/images/canvas/card_holder.png'),
        card9: require('../../assets/images/canvas/card_holder.png'),
      }
    };

    this.getTotalBet = this.getTotalBet.bind(this);
  }

  _getCredit = () => {
    this.setState({ credit: 10})
  }

  componentDidMount(){
    this.props.navigation.setParams({ credit: this._getCredit});
    this.setState({total_bet: this.getTotalBet()})
  }

  betAll = () => {
    this.setState({
      total_bet: this.state.total_bet + this.state.highlighted_chip * 16,
    })
  }

  betRepeat = () => {
    this.setState({
      total_bet: this.state.previous_bet,
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

  getTotalBet = () => {
    let bets = this.state.bets;
    return bets.bet1 + bets.bet2 + bets.bet3 + bets.bet4 + bets.bet5 + bets.bet6 +
           bets.bet7 + bets.bet8 + bets.bet9 + bets.bet10 + bets.bet11 + bets.bet12 +
           bets.bet13 + bets.bet14 + bets.bet15 + bets.bet16;
  }

  play = () => {
    // var deck = shuffle(CARDS);

    this.setState({
      previous_bets: this.state.bets,
      credit: this.state.credit - this.state.total_bet,
      bets: this.resetBets()
    })
  }

  betJackpot = () => {
    this.setState({
      total_bet: this.state.total_bet + this.state.highlighted_chip * 16,
      jackpotDisable: true
    })
  }

  canvasCallback = (bets) => {
    this.setState({
      bets: bets,
      total_bet: this.getTotalBet(),
    })
  }

  chipBarCallback = (data) => {
    this.setState({
      highlighted_chip: data
    })
  }

  // resetBets = () => {
  //   let bets = {
  //     bet1: 0,
  //     bet2: 0,
  //     bet3: 0,
  //     bet4: 0,
  //     bet5: 0,
  //     bet6: 0,
  //     bet7: 0,
  //     bet8: 0,
  //     bet9: 0,
  //     bet10: 0,
  //     bet11: 0,
  //     bet12: 0,
  //     bet13: 0,
  //     bet14: 0,
  //     bet15: 0,
  //     bet16: 0,
  //   }
  // }


  render() {
    const { navigate } = this.props.navigation;

    return (
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../assets/images/background.png")}
      >
        <StatusBar hidden={true} />
        <JackpotBar credit={this.state.credit} jackpot={this.state.jackpot}/>
        <View style={{ flex: 6, flexDirection: 'row' }}>
          <View style={{ flex: 4, paddingVertical:10}}>
            <View style={{ flex: 1}}>
              <Canvas cards={this.state.cards} bets={this.state.bets} chip={this.state.highlighted_chip} callback={this.canvasCallback}/>
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
                      source={require('../../assets/images/bet_all.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.betJackpot()}
                    disabled={this.state.highlighted_chip == 0 ? true : false}
                    style={{ flex: 1, width: '100%', padding: 10, opacity:this.state.highlighted_chip == 0 ? 0.2 : 1 }}>
                    <Image
                      style={{
                        flex: 1,
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain',
                      }}
                      source={require('../../assets/images/bet_jackpot.png')}
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
                    onPress={() => this.setState({total_bet: 0})}
                    style={styles.flexOneStyles}>
                    <Image style={styles.bottomButtonsStyle}
                      source={require('../../assets/images/reset_bets.png')}/>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.betRepeat()}
                    style={styles.flexOneStyles}>
                    <Image style={styles.bottomButtonsStyle}
                      source={require('../../assets/images/bet_repeat.png')}/>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.flexOneStyles}>
                    <Image style={styles.bottomButtonsStyle}
                      source={require('../../assets/images/buttons/button_totalbet.png')}/>
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
                      <Text style={styles.totalBetText}>{"TOTAL BET\n" + this.state.total_bet}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.play()}
                    disabled={this.state.total_bet == 0 ? true : false}
                    style={[styles.flexOneStyles, {opacity:this.state.total_bet == 0 ? 0.2 : 1} ]}>
                    <Image
                      style={styles.bottomButtonsStyle}
                      source={require('../../assets/images/buttons/button_play__button_play_2.png')}/>
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

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'stretch'
  },
  container: {
    flex: 1,
    paddingTop: 2
  },
  backgroundImage: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  bottomButtonsStyle:{
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  flexOneStyles:{
    flex: 1,
    width: '100%',
    padding: 5
  },
  totalBetText: {
    fontWeight: 'bold',
    fontSize: 13,
    fontFamily: 'Roboto-Bold',
    color: 'white',
    textAlign: 'center'
  },
  dealText: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: 'white',
    textAlign: 'center'
  }
});
