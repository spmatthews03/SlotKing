import React, {useEffect,createRef,useState,useRef} from 'react';
import {View, Alert, TouchableOpacity, ImageBackground, StyleSheet, Dimensions} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import {useDispatch, useSelector} from "react-redux";
import {CLAIM_CHIPS, HOLD_DRAW_ADD_WINNINGS, NEED_AD, SET_CLAIM_CHIP_TIME} from "../constants/actionTypes";
import {Image} from "react-native-elements";
import {CLAIM_BANNER, CLAIM_BUTTON, CLAIM_FOOTER} from "../constants/imageConstants";
import {RewardedAd, RewardedAdEventType, TestIds} from '@react-native-firebase/admob';
import SafeAreaView, {getInset} from "react-native-safe-area-view";

const adUnitId = __DEV__ ? TestIds.REWARDED : "ca-app-pub-6259743779729717/7388181067";

const {width, height} = Dimensions.get('window');
const topPadding = getInset('top', false);
const bottomPadding = getInset('bottom', false);

const ClaimAdPanel = () => {
    let slidingPanel = createRef();
    let dispatch = useDispatch();
    let claimAvailable = useSelector(state => state.versionReducer.claimChips)
    const [loaded, setLoaded] = useState(false);

    const rewarded = useRef(RewardedAd.createForAdRequest(adUnitId, {
        requestNonPersonalizedAdsOnly: true,
    }));


    useEffect(() => {
        const eventListener = rewarded.current.onAdEvent((type, error, reward) => {
            if (type === RewardedAdEventType.LOADED) {
                setLoaded(true);
            }

            if (type === RewardedAdEventType.EARNED_REWARD) {
                let payload = 250;
                dispatch({type:HOLD_DRAW_ADD_WINNINGS, payload})
                console.log('User earned reward of ', reward);
                dispatch({type: NEED_AD, payload: false});
                dispatch({type: CLAIM_CHIPS, claim: false})
                setLoaded(false);
            }

            if(type === "closed") {
                rewarded.current.load();
                dispatch({type: SET_CLAIM_CHIP_TIME});
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

    function rewardAlert() {
        Alert.alert('Congratulations!', 'You just earned 250 coins!', [
            {
                text: 'Ok',
            },
        ]);
    }



    return (
        <View>
            {claimAvailable && loaded ?
                <View style={{width:'100%', height:30}}>
                    <TouchableOpacity
                        onPress={() => slidingPanel.show()}
                        style={{flex:1, height:100}} >
                        <Image source={CLAIM_FOOTER} style={{width:'100%', height:'100%', resizeMode:'cover'}}/>
                    </TouchableOpacity>
                </View>
            :
            null}
            {/*<Button title='Claim $250' onPress={() => slidingPanel.show()} />*/}
            <SlidingUpPanel
                draggableRange={{top:150, bottom:0}}
                friction={.3}
                allowDragging={true}
                backdropOpacity={.5}
                height={150}
                ref={c => slidingPanel = c}>
                <SafeAreaView style={{flex:1}}>
                <View style={styles.container}>
                    <ImageBackground source={CLAIM_BANNER} style={styles.backgroundImage} imageStyle={{width:'100%', resizeMode:'cover'}}>
                        <TouchableOpacity
                            style={{height: 80, width: '40%'}}
                            onPress={() => {
                                slidingPanel.hide();
                                dispatch({type: CLAIM_CHIPS, claim: false});
                                rewarded.current.show();
                            }}>
                            <Image source={CLAIM_BUTTON} style={{width:'100%', height:'100%', resizeMode:'contain'}}/>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                </SafeAreaView>
            </SlidingUpPanel>
        </View>
    )
}

 export default ClaimAdPanel;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        top:50,
        // alignItems: 'center',
        justifyContent: 'center',
        borderTopColor:'goldenrod',
        borderTopWidth:2
    },
    backgroundImage:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
});
