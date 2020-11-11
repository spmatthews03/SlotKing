import React from 'react';
import { View, StatusBar, Image } from 'react-native';
import {TABLE_SLOT_KING_LOGO, LOGO_GIF} from '../constants/imageConstants';

const SplashScreen = () => {
    return (
        <View style={{flex:1, backgroundColor:'black'}}>
            <StatusBar hidden={true}/>
            <View style={{flex: 6, justifyContent:'center', alignItems:'center'}}>
                <View style={{flex:1, width:'100%', padding:20, justifyContent:'center', alignItems:'center'}}>
                    <Image
                        style={{flex:1, width:'100%', height:'100%', resizeMode:'contain'}}
                        source={TABLE_SLOT_KING_LOGO}/>
                    <Image source={LOGO_GIF} style={{width: 200, height: 200}}/>
                </View>
            </View>
        </View>
    )
}

export default SplashScreen
