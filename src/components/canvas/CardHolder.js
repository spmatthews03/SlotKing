import React, { Component, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { dealFaceDown } from '../../store/actions/actions';

const mapDispatchToProps = dispatch => {
    return {
        dealFaceDownFunction: (card) => dispatch(dealFaceDown(card)),
    };
};

const mapStateToProps = state => {
    return{
        cards: state.reducer.cards,
        // dealing: state.reducer.cards
    };
};

class CardHolder extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        setTimeout(() => {
            this.props.dealFaceDownFunction(this.props.num);
        }, this.props.wait);
    }

    

  render() { 
    return (
        <View className='hidden' style={{flex:1, alignItems:'center',paddingVertical:5}}>
            <Image
                style={{width:'100%', height:'100%', resizeMode:'contain'}}
                source={this.props.cards[this.props.num]}/>
        </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardHolder);