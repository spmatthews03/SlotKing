import React from 'react';
import { View, StatusBar, Image } from 'react-native';
import {TABLE_SLOT_KING_LOGO, LOGO_GIF} from '../constants/imageConstants';

const SplashScreen = () => {
    return (
        <View style={{flex:1, backgroundColor:'black'}}>
            <StatusBar hidden={true}/>
            <View style={{flex: 6, justifyContent:'center', alignItems:'center'}}>
                <View style={{flex:1, width:'100%', padding:20, justifyContent:'center', alignItems:'center'}}>
                    <Image source={LOGO_GIF} style={{width: 300, height: 300}}/>
                </View>
            </View>
        </View>
    )
}

export default SplashScreen
