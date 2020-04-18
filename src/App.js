/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator, createAppContainer } from 'react-navigation';
import React, { Fragment } from 'react';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/games/JackpotDealer/GameScreen';
import MenuScreen from './screens/MenuScreen';
import JackpotDealerPriceboard from './screens/JackpotDealerPriceboard';
import HighScoreScreen from './screens/HighScoreScreen';
import StoppedVersion from './screens/games/StopVersion/StoppedVersion';


const stackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Menu: {
    screen: MenuScreen
  },
  Game: {
    screen: GameScreen,
    navigationOptions: {
      header: null,
    },
  },
  Stopped: {
    screen: StoppedVersion,
    navigationOptions: {
      header: null,
    },
  },
  JackpotDealerPriceboard: {
    screen: JackpotDealerPriceboard,
    // navigationOptions: {
    //   header: null,
    // },
  },
  HighScoreScreen: {
    screen: HighScoreScreen,
    navigationOptions:{
      header: null,
    },
  }
});

export default createAppContainer(stackNavigator);
