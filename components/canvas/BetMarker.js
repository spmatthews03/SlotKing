import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';


export default class BetMarker extends Component {
    constructor(props){
        super(props);

        this.state={
            direction: require('../../assets/images/canvas/red_circle.png'),
        }
    }
    


    componentDidMount(){
        var passedDirection;
        if(this.props.direction == 'left'){
            passedDirection = require('../../assets/images/canvas/red_circle.png');
        }
        else if(this.props.direction == 'right'){
            passedDirection = require('../../assets/images/canvas/red_circle.png');
        }
        else if(this.props.direction == 'down'){
            passedDirection = require('../../assets/images/canvas/red_circle.png');
        }
        else{
            passedDirection = require('../../assets/images/canvas/red_circle.png');
        }

        this.setState({
            direction: passedDirection,
            bet: this.props.bet,
        });
    }


  render() {
    return (
        <View style={{flex:1, alignItems:'center',paddingVertical:5}}>
            <TouchableOpacity 
                onPress={() => this.props.parentCallback(this.props.num)}
                style={[{flex:1, width:'100%'}, this.props.style]}>  
                <ImageBackground
                    style={{width:45, height:45}}
                    source={this.state.direction}>
                    <View style={styles.textView}>
                        <Text style={styles.text}>{this.props.bet == 0 ? '' : this.props.bet}</Text>
                    </View>
                </ImageBackground>
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
        fontSize: 18
    },
  });