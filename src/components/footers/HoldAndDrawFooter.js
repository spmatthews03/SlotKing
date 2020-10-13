import React, {useState, useEffect, useRef} from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import {
    PLAY_BUTTON_2,
    HOLD_DRAW_BUTTON_HI,
    BUY_CHIPS,
    FOOTER_PRICEBOARD,
    FOOTER_RULES, FOOTER_AD
} from '../../constants/imageConstants';
import { useSelector, useDispatch } from 'react-redux';
import {
    HOLD_DRAW_ADD_WINNINGS,
    NEED_AD} from '../../constants/actionTypes';
import { RewardedAd, RewardedAdEventType, TestIds } from '@react-native-firebase/admob';
import Rules from "../gameRules/Rules";
import PriceboardModal from "../PriceboardModal";
import BuyModal from "../BuyModal";

// const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
const adUnitId = TestIds.REWARDED;

const HoldAndDrawFooter = (props) => {
    const needAd = useSelector(state => state.versionReducer.adReady);
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false);
    const [modalVisible, setModalVisible] = useState(true);
    const [priceboardVisible, setPriceboardVisible] = useState(false);
    const [buyModalVisible, setBuyModalVisible] = useState(false);

    const rewarded = useRef(RewardedAd.createForAdRequest(adUnitId, {
        requestNonPersonalizedAdsOnly: true,
        keywords: ['fashion', 'clothing'],
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
        }
        });

        // Start loading the rewarded ad straight away
        rewarded.current.load();

        // Unsubscribe from events on unmount
        return () => {
            eventListener();
        };
    }, []);

    if(props.credit < 250 && needAd != true){
        dispatch({type: NEED_AD, payload: true})
    }

    return (
        <View style={{flex:.7, backgroundColor:'#0f2636', flexDirection:'row', padding:8, justifyContent:'center'}}>
            <Rules
                isVisible={modalVisible}
                setModalVisibility={() => {setModalVisible(!modalVisible)}}/>
            <PriceboardModal
                isVisible={priceboardVisible}
                setPriceboardVisibility={() => {setPriceboardVisible(!priceboardVisible)}}/>
            <BuyModal
                isVisible={buyModalVisible}
                setVisibility={() => {setBuyModalVisible(!buyModalVisible)}}/>
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Image
                        style={{width:'100%', padding:3, resizeMode:'contain', height:'100%'}}
                        source={HOLD_DRAW_BUTTON_HI}/>
                </View>
                <View style={{flex: 2, justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity
                        style={{width:'100%', padding:3, justifyContent:'center'}}
                        onPress={() => {setBuyModalVisible(true)}}>
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

export default HoldAndDrawFooter;
