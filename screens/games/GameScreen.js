import React, { Component } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import JackpotBar from '../../components/JackpotBar';
import MenuFooter from '../../components/MenuFooter';

export default class GameScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <JackpotBar />,
    headerStyle: {
      backgroundColor: '#0f2636'
    },
    headerLeft: null
  };

  constructor(props) {
    super(props);

    this.state = {
      highlighted_chip: 1,
      total_bet: 0,
      opacities: {
        yellow: 0.2,
        purple: 0.2,
        green: 0.2,
        red: 0.2,
        gold: 0.2
      }
    };
  }

  setHighlightedChip = color => {
    this.state.opacities.yellow = 0.2;
    this.state.opacities.purple = 0.2;
    this.state.opacities.green = 0.2;
    this.state.opacities.red = 0.2;
    this.state.opacities.gold = 0.2;

    if (color == 'yellow') {
      this.state.opacities.yellow = 1;
      this.state.highlighted_chip = 1;
    }
    if (color == 'purple') {
      this.state.opacities.purple = 1;
      this.state.highlighted_chip = 5;
    }
    if (color == 'green') {
      this.state.opacities.green = 1;
      this.state.highlighted_chip = 10;
    }
    if (color == 'red') {
      this.state.opacities.red = 1;
      this.state.highlighted_chip = 25;
    }
    if (color == 'gold') {
      this.state.opacities.gold = 1;
      this.state.highlighted_chip = 100;
    }

    this.setState({
      highlighted_chip: this.state.highlighted_chip,
      opacities: this.state.opacities,
      total_bet: this.state.total_bet + this.state.highlighted_chip,
    });
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../assets/images/background.png")}
      >
        <StatusBar hidden={true} />
        <View style={{ flex: 5, flexDirection: 'row' }}>
          <View style={{ flex: 4 }}>
            <View style={{ flex: 1, paddingTop: 10 }}>
              <Image style={{flex: 3, width: '100%',  height: '100%', resizeMode: 'contain'}}
                source={require('../../assets/images/canvas.png')}/>
              <View style={{ flex: 2, justifyContent: 'center', padding: 5 }}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 50}}>
                  <TouchableOpacity style={{ flex: 1, width: '100%', padding: 10 }}>
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
                    style={{ flex: 1, width: '100%', padding: 10 }}
                  >
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
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingHorizontal: 35,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => this.setHighlightedChip('yellow')}
                    style={styles.flexOneStyles}
                  >
                    <Image
                      style={[
                        styles.chipStyle, {opacity: this.state.opacities.yellow}
                      ]}
                      source={require('../../assets/images/chips/chip_one.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.setHighlightedChip('purple')}
                    style={styles.flexOneStyles}
                  >
                    <Image
                      style={[
                        styles.chipStyle, {opacity: this.state.opacities.purple}
                      ]}
                      source={require('../../assets/images/chips/chip_five.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.setHighlightedChip('green')}
                    style={styles.flexOneStyles}
                  >
                    <Image
                      style={[
                        styles.chipStyle, {opacity: this.state.opacities.green}
                      ]}
                      source={require('../../assets/images/chips/chip_ten.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.setHighlightedChip('red')}
                    style={styles.flexOneStyles}>
                    <Image
                      style={[
                        styles.chipStyle, {opacity: this.state.opacities.red}
                      ]}
                      source={require('../../assets/images/chips/chip_twenty.png')}/>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.setHighlightedChip('gold')}
                    style={styles.flexOneStyles}>
                    <Image
                      style={[
                        styles.chipStyle, {opacity: this.state.opacities.gold}
                      ]}
                      source={require('../../assets/images/chips/chip_hundred.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingHorizontal: 5,
                  }}>
                  <TouchableOpacity
                    style={styles.flexOneStyles}>
                    <Image style={styles.bottomButtonsStyle}
                      source={require('../../assets/images/reset_bets.png')}/>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.flexOneStyles}>
                    <Image style={styles.bottomButtonsStyle}
                      source={require('../../assets/images/bet_repeat.png')}/>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.flexOneStyles}>
                    <Image style={styles.bottomButtonsStyle}
                      source={require('../../assets/images/total_bet.png')}/>
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
                      <Text>{this.state.total_bet}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.flexOneStyles}>
                    <Image
                      style={styles.bottomButtonsStyle}
                      source={require('../../assets/images/gold_play.png')}/>
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
  chipStyle:{
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
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
  }
});
