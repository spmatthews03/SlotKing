import React, { useState } from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {TOTAL_BET_BUTTON} from "../../constants/imageConstants";
import {styles} from "../../screens/games/StopVersion/styles";
import PurchaseModal from "../PurchaseModal";
import SettingsModal from "../SettingsModal";

const MenuFooter = () => {
    const [purchaseVisible, setPurchaseVisible] = useState(false);
    const [settingsVisible, setSettingsVisible] = useState(false);

    return (
        <View style={{flex:.7, backgroundColor:'#0f2636', flexDirection:'row', padding:8, justifyContent:'center'}}>
        <Image
            style={{flex:1, width:'100%', height: '100%', resizeMode:'contain'}}
            source={require('../../assets/images/game_logos/flyindream.png')}/>
        <View style={{flex:3, justifyContent:'center'}}>
            <PurchaseModal visible={purchaseVisible} setVisible={setPurchaseVisible} />
            <SettingsModal visible={settingsVisible} setVisible={setSettingsVisible} />
            <View style={{flex:1,flexDirection:'row', justifyContent:'flex-end'}}>
                <View style={{flex:2}}/>
                <View style={{flex:3, justifyContent:'center', alignItems:'center', paddingHorizontal:20}}>
                    <TouchableOpacity onPress={() => setPurchaseVisible(!purchaseVisible)} style={{width:'100%', padding:2, justifyContent:'center'}}>
                        <Image
                            style={{width:'100%', resizeMode:'contain'}}
                            source={TOTAL_BET_BUTTON}/>
                        <View
                            style={styles.totalBet}>
                            <Text style={styles.totalBetText}>Buy</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity
                        onPress={()=> alert('image clicked')}
                        style={{width:'100%', padding :2, justifyContent:'center'}}>
                        <Image
                            style={{width:'100%', resizeMode:'contain'}}
                            source={require('../../assets/images/buttons/button_friends.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity
                    onPress={()=> setSettingsVisible(!settingsVisible)}
                    style={{width:'100%', padding:2, justifyContent:'center'}}>
                    <Image
                        style={{width:'100%', resizeMode:'contain'}}
                        source={require('../../assets/images/buttons/button_options.png')}/>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
    );
}

export default MenuFooter;
