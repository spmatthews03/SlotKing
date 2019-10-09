import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


export default class BetMarker extends Component {
    constructor(props){
        super(props);

        this.state={
            direction: require('../../assets/images/canvas/red_right.png'),
            text: 0,
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
            <TouchableOpacity 
                onPress={() => this.setState({text: this.props.chip})}
                style={{flex:1, width:'100%'}}>  
                <Image
                    style={{width:'100%', height:'100%', resizeMode:'contain'}}
                    source={this.state.direction}/>
                <View style={styles.textView}>
                    <Text style={styles.text}>{this.state.text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    textView: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    text: {
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        fontSize: 24
    },
  });