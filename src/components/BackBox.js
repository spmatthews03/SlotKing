import React, { Component } from 'react';

import {View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { CLOSE_BUTTON } from '../constants/imageConstants';

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
        <View>
          {/*<View style={{height:'80%', width:'45%'}}>*/}
            <TouchableOpacity onPress={this.handleBackButtonClick}
                              style={{
                                position:'absolute',
                                top:10,
                                left:20,
                                width:50,
                                height:50,
                                justifyContent:'center',
                                alignItems:'center'}}>
              <Image style={{height:'100%', resizeMode:'contain'}} source={CLOSE_BUTTON}/>
            </TouchableOpacity>
          {/*</View>*/}
        </View>
    );
  }
}
