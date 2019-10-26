import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return{
        cards: state.reducer.cards
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

class CardHolder extends Component {
    constructor(props){
        super(props);

        this.state={
            card: require('../../assets/images/canvas/card_holder.png'),
            text: 0,
        };
    }

    


  render() {
    return (
        <View style={{flex:1, alignItems:'center',paddingVertical:5}}>
            <Image
                style={{width:'100%', height:'100%', resizeMode:'contain'}}
                source={this.state.card}/>
        </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardHolder);


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