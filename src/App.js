/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {View} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import HoldAndDraw from './screens/games/StopVersion/HoldAndDraw';
import HoldAndDrawHi from './screens/games/StopVersion/HoldAndDrawHi';
import SplashScreen from './screens/SplashScreen';
import admob, { MaxAdContentRating } from '@react-native-firebase/admob';
import ClaimAdPanel from "./components/ClaimAdPanel";
import {CLAIM_CHIPS} from "./constants/actionTypes";
import { connect } from 'react-redux';
import {isLastClaimLongerThanFourHours} from "./helpers/adHelper";
import BuyModal from "./components/BuyModal";


const mapStateToProps = state => {
  return{
    claimChips: state.versionReducer.claimChips,
    claimChipsTime: state.versionReducer.claimChipsTime
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setClaimChips: (claim) => dispatch({type: CLAIM_CHIPS, claim})
  };
};

admob()
  .setRequestConfiguration({
    // Update all future requests suitable for parental guidance
    maxAdContentRating: MaxAdContentRating.T,

    // Indicates that you want your content treated as child-directed for purposes of COPPA.
    tagForChildDirectedTreatment: true,

    // Indicates that you want the ad request to be handled in a
    // manner suitable for users under the age of consent.
    tagForUnderAgeOfConsent: true,
  })
  .then(() => {
    // Request config successfully set!
  });

const SplashNavigator = createStackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      headerShown: false
    }
  }
});

const GameNavigator = createStackNavigator({
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
  BuyModal: {
    screen: BuyModal,
    navigationOptions: {
      headerShown: false
    },
  }
});
const SplashContainer = createAppContainer(SplashNavigator)
const AppContainer = createAppContainer(GameNavigator);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false});
    }, 5000);

    setInterval(() => {
      if(isLastClaimLongerThanFourHours(this.props.claimChipsTime))
        this.props.setClaimChips(true);
    }, 30000)

    if(isLastClaimLongerThanFourHours(this.props.claimChipsTime))
      this.props.setClaimChips(true);
  }

  render() {
    return (
        <View style={{flex: 1}}>
          <View style={{flex: 1}}>
            {this.state.loading ?
              <SplashContainer />
              :
              <AppContainer/>
            }
          </View>
          <ClaimAdPanel/>
        </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
