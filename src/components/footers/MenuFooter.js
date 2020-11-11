import React, { useState } from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {BUY_CHIPS, TOTAL_BET_BUTTON} from "../../constants/imageConstants";
import BuyModal from "../BuyModal";

const MenuFooter = () => {
    const [buyModalVisible, setBuyModalVisible] = useState(false);

    return (
        <View style={{flex:.7, backgroundColor:'#0f2636', flexDirection:'row', padding:8, justifyContent:'center'}}>
            <View style={{flex:1, justifyContent:'center', flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Image
                        style={{width:'100%', resizeMode:'contain', height:'100%'}}
                        source={require('../../assets/images/game_logos/flyindream.png')}/>
                </View>
                <BuyModal
                    isVisible={buyModalVisible}
                    setVisibility={() => {setBuyModalVisible(!buyModalVisible)}}/>
                {/*<SettingsModal visible={settingsVisible} setVisible={setSettingsVisible} />*/}
                <View style={{flex:4}}/>
                <View style={{flex: 2, justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity
                        style={{width:'100%', padding:3, justifyContent:'center'}}
                        onPress={() => {setBuyModalVisible(true)}}>
                        <Image
                            style={{width:'100%', height:'100%', resizeMode:'contain'}}
                            source={BUY_CHIPS}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default MenuFooter;
