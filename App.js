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
import GameScreen from './screens/games/GameScreen';
import MenuScreen from './screens/MenuScreen';
import JackpotDealerPriceboard from './screens/JackpotDealerPriceboard';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


const stackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Menu: {
    screen: MenuScreen
  },
  Game: {
    screen: GameScreen
  },
  JackpotDealerPriceboard: {
    screen: JackpotDealerPriceboard
  }
});

export default createAppContainer(stackNavigator);
