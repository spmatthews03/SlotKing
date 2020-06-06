import React, { Component } from 'react';
 
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { TouchableOpacity } from 'react-native';

export default class BackBox extends Component {
  constructor(props){
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }

  render() {
    return (
        <View style={{justifyContent:'center', alignItems:'flex-start'}}>
          <View style={{height:'100%', width:'45%',justifyContent:'center'}}>
            <TouchableOpacity onPress={this.handleBackButtonClick} style={{height:'70%', justifyContent:'center', alignItems:'center'}}>
              <Image style={{height:'100%', resizeMode:'contain'}} source={require('../assets/images/buttons/button_close.png')}/>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}