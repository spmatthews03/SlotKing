import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';


export default class HoldAndDrawFooter extends React.Component {
    static navigationOptions = {
        header: null
    }

  render() {
    const{navigate} = this.props.navigation;

    return (
        <View style={{flex:.7, backgroundColor:'#0f2636', flexDirection:'row', padding:8, justifyContent:'center'}}>
        <Image 
            style={{flex:1, resizeMode:'contain', height:'100%'}}
            source={require('../../assets/images/buttons/button_holddraw.png')}/>
        <View style={{flex:3, justifyContent:'center'}}>
            <View style={{flex:1,flexDirection:'row', justifyContent:'flex-end'}}>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity style={{padding:2, justifyContent:'center'}}>
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
}