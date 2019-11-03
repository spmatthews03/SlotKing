import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';


export default class JackpotDealerFooter extends Component {
  render() {
    return (
        <View style={{flex:.7, backgroundColor:'#0f2636', flexDirection:'row', padding:8, justifyContent:'center'}}>
        <Image 
            style={{flex:1, width:'100%', height: '100%'}}
            source={require('../assets/images/game_logos/jackpot.png')}/>
        <View style={{flex:3, justifyContent:'center'}}>
            <View style={{flex:1,flexDirection:'row', justifyContent:'flex-end'}}>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity style={{padding:2, justifyContent:'center'}}>
                        <Image
                            style={{width:125, height:38}}
                            source={require('../assets/images/buttons/button_priceboard.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity
                        onPress={()=> alert('image clicked')}
                        style={{padding :2, justifyContent:'center'}}>
                        <Image
                            style={{width:125, height:38}}
                            source={require('../assets/images/buttons/best_players_score.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
    );
  }
}