import React, {useState, useEffect, useRef} from 'react';
import {View, Image, TouchableOpacity, Text, Alert} from 'react-native';
import {
    PLAY_BUTTON_2,
    HOLD_DRAW_BUTTON_HI,
    HOLD_DRAW_BUTTON,
    HOLD_DRAW_BIG_BUTTON, BUY_CHIPS, FOOTER_AD, FOOTER_RULES, FOOTER_PRICEBOARD, HOLD_DRAW_BIG_BUTTON_HI
} from '../../constants/imageConstants';
import { styles } from '../../screens/games/StopVersion/styles';
import { useSelector, useDispatch } from 'react-redux';
import {
    HOLD_DRAW_ADD_WINNINGS,
    NEED_AD} from '../../constants/actionTypes';
import { RewardedAd, RewardedAdEventType, TestIds } from '@react-native-firebase/admob';
import Rules from "../gameRules/Rules";
import PriceboardModal from "../PriceboardModal";
import BuyModal from "../BuyModal";

const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-6259743779729717/6744053933';

const HoldAndDrawFooterHI = (props) => {
    const version = useSelector(state => state.versionReducer.version);

    let image_source;
    if(version === '3x3') {
        image_source = HOLD_DRAW_BUTTON_HI;

    }
    else {
        image_source = HOLD_DRAW_BIG_BUTTON_HI;
    }

    const needAd = useSelector(state => state.versionReducer.adReady);
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [priceboardVisible, setPriceboardVisible] = useState(false);
    const [buyModalVisible, setBuyModalVisible] = useState(false);

    const rewarded = useRef(RewardedAd.createForAdRequest(adUnitId, {
        requestNonPersonalizedAdsOnly: true,
      }));


    useEffect(() => {
        const eventListener = rewarded.current.onAdEvent((type, error, reward) => {
            if (type === RewardedAdEventType.LOADED) {
                setLoaded(true);
            }

            if (type === RewardedAdEventType.EARNED_REWARD) {
                let payload = 500;
                dispatch({type:HOLD_DRAW_ADD_WINNINGS, payload})
                console.log('User earned reward of ', reward);
                dispatch({type: NEED_AD, payload: false});
                setLoaded(false);
            }

            if(type === "closed") {
                rewarded.current.load();
                rewardAlert();
            }
        });

        // Start loading the rewarded ad straight away
        rewarded.current.load();

        // Unsubscribe from events on unmount
        return () => {
            eventListener();
        };
    }, []);

    if(props.credit < 250 && needAd !== true){
        dispatch({type: NEED_AD, payload: true})
    }

    function rewardAlert() {
        Alert.alert('Congratulations!', 'You just earned 500 coins!', [
            {
                text: 'Ok',
            },
        ]);
    }

    return (
        <View style={{flex:.7, backgroundColor:'#280000', flexDirection:'row', padding:8, justifyContent:'center'}}>
            <Rules
                isVisible={modalVisible}
                setModalVisibility={() => {setModalVisible(!modalVisible)}}/>
            <PriceboardModal
                totalBet={props.totalBet}
                isVisible={priceboardVisible}
                setPriceboardVisibility={() => {setPriceboardVisible(!priceboardVisible)}}/>
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:1}}>

                    <Image
                        style={{width:'100%', padding:3, resizeMode:'contain', height:'100%'}}
                        source={image_source}/>
                </View>
                <View style={{flex: 2, justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity
                        style={{width:'100%', padding:3, justifyContent:'center'}}
                        onPress={() => {props.navigation.navigate('BuyModal')}}>
                        <Image
                            style={{width:'100%', height:'100%', resizeMode:'contain'}}
                            source={BUY_CHIPS}/>
                    </TouchableOpacity>
                </View>
                {needAd && loaded ? (
                    <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity
                            style={{width:'100%', padding:3, justifyContent:'center'}}
                            onPress={() => rewarded.current.show()}>
                            <Image
                                style={{width:'100%', height:'100%', resizeMode:'contain'}}
                                source={FOOTER_AD}/>
                        </TouchableOpacity>
                    </View> ) : <View style={{flex:1}}/> }
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity
                        style={{width:'100%', padding:3, justifyContent:'center'}}
                        onPress={() => {setModalVisible(true)}}>
                        <Image
                            style={{width:'100%', height:'100%', resizeMode:'contain'}}
                            source={FOOTER_RULES}/>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity
                        style={{width:'100%', padding:3, justifyContent:'center'}}
                        onPress={() => {setPriceboardVisible(true)}}>
                        <Image
                            style={{width:'100%', height:'100%', resizeMode:'contain'}}
                            source={FOOTER_PRICEBOARD}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default HoldAndDrawFooterHI;
