import React, {useState, useEffect, useRef} from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { PLAY_BUTTON_2, HOLD_DRAW_BUTTON_HI } from '../../constants/imageConstants';
import { styles } from '../../screens/games/StopVersion/styles';
import { useSelector, useDispatch } from 'react-redux';
import { 
    HOLD_DRAW_ADD_WINNINGS,
    NEED_AD} from '../../constants/actionTypes';
import { RewardedAd, RewardedAdEventType, TestIds } from '@react-native-firebase/admob';

const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const HoldAndDrawFooterHI = (props) => {
    const needAd = useSelector(state => state.versionReducer.adReady);
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false);

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
        <View style={{flex:.7, backgroundColor:'#280000', flexDirection:'row', padding:8, justifyContent:'center'}}>
        <Image 
            style={{flex:1, resizeMode:'contain', height:'100%'}}
            source={HOLD_DRAW_BUTTON_HI}/>
        <View style={{flex:3, justifyContent:'center'}}>
            <View style={{flex:1,flexDirection:'row', justifyContent:'flex-end'}}>
                {needAd && loaded ? (
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity
                        style={{padding:2, justifyContent:'center'}}
                        onPress={() => rewarded.current.show()}>
                        <Image
                            style={{width:80, height:38, resizeMode:'contain'}}
                            source={PLAY_BUTTON_2}/>
                        <View
                         style={styles.dealButton}>
                            <Text style={styles.adButtonText}>{"Get $500"}</Text>
                        </View>
                    </TouchableOpacity>
                </View> ) : null }
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity
                        style={{padding:2, justifyContent:'center'}}
                        onPress={() => props.navigation.navigate('Priceboard')}>
                        <Image
                            style={{width:125, height:38}}
                            source={require('../../assets/images/buttons/button_priceboard.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
    );
}

export default HoldAndDrawFooterHI;