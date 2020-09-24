/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import Priceboard from './screens/JackpotDealerPriceboard';
import HoldAndDraw from './screens/games/StopVersion/HoldAndDraw';
import HoldAndDrawHi from './screens/games/StopVersion/HoldAndDrawHi';
import SplashScreen from './screens/SplashScreen';
import admob, { MaxAdContentRating } from '@react-native-firebase/admob';

admob()
  .setRequestConfiguration({
    // Update all future requests suitable for parental guidance
    maxAdContentRating: MaxAdContentRating.PG,

    // Indicates that you want your content treated as child-directed for purposes of COPPA.
    tagForChildDirectedTreatment: true,

    // Indicates that you want the ad request to be handled in a
    // manner suitable for users under the age of consent.
    tagForUnderAgeOfConsent: true,
  })
  .then(() => {
    // Request config successfully set!
  });

const stackNavigator = createStackNavigator({
  Splash: {
    screen:SplashScreen,
    navigationOptions:{
      headerShown: false
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions:{
      headerShown: false
    }
  },
  Menu: {
    screen: MenuScreen
  },
  HoldAndDraw: {
    screen: HoldAndDraw,
    navigationOptions: {
      headerShown: false
    },
  },
  HoldAndDrawHI: {
    screen: HoldAndDrawHi,
    navigationOptions: {
      headerShown: false
    },
  },
  Priceboard: {
    screen: Priceboard,
    navigationOptions: {
      headerShown: false
    }
  }
});

export default createAppContainer(stackNavigator);
