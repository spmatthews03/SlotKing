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
      total_bet: 0,
      jackpot: 100,
      jackpotDisable: false,
      previous_bet: 0,
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
  }

  _getCredit = () => {
    this.setState({ credit: 10})
  }

  componentDidMount(){
    this.props.navigation.setParams({ credit: this._getCredit});
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



  play = () => {
    // var deck = shuffle(CARDS);

    this.setState({
      previous_bet: this.state.total_bet,
      credit: this.state.credit - this.state.total_bet,
      total_bet: 0,
    })
  }

  betJackpot = () => {
    this.setState({
      total_bet: this.state.total_bet + this.state.highlighted_chip * 16,
      jackpotDisable: true
    })
  }

  betMarkerCallback = () => {
    this.setState({})
  }

  chipBarCallback = (data) => {
    this.setState({
      highlighted_chip: data
    })
  }


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
              <Canvas cards={this.state.cards} chip={this.state.highlighted_chip}/>
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
