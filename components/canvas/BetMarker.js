import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';


export default class BetMarker extends Component {
    constructor(props){
        super(props);

        this.state={
            direction: '',
        };
    }
    
    componentDidMount(){
        var passedDirection;
        if(this.props.direction == 'left'){
            passedDirection = require('../../assets/images/canvas/red_right.png');
        }
        else if(this.props.direction == 'right'){
            passedDirection = require('../../assets/images/canvas/red_left.png');
        }
        else if(this.props.direction == 'down'){
            passedDirection = require('../../assets/images/canvas/red_upper.png');
        }
        else{
            passedDirection = require('../../assets/images/canvas/red_bottom.png');
        }

        this.setState({
            direction: passedDirection,
        });
    }

  render() {
    return (
        <View style={{flex:1, alignItems:'center',paddingVertical:5}}>
            <TouchableOpacity style={{flex:1, width:'100%'}}>  
            <Image
                style={{width:'100%', height:'100%', resizeMode:'contain'}}
                source={this.state.direction}/>
            </TouchableOpacity>
        </View>
    );
  }
}