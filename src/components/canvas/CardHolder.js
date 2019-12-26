import React, { Component, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { dealFaceDown, flipCards } from '../../store/actions/actions';

const mapDispatchToProps = dispatch => {
    return {
        dealFaceDownFunction: (card) => dispatch(dealFaceDown(card)),
        flipCardsFunction: (card) => dispatch(flipCards(card))
    };
};

const mapStateToProps = state => {
    return{
        cards: state.reducer.cards,
        flipping: state.reducer.flipping,
        unflipped_cards : state.reducer.unflipped_cards
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

    componentDidUpdate(prevProps){
        let tmp = this.props.cards[this.props.num];
        let tmp2 = prevProps.cards[this.props.num];
        let tmp3 = this.props.unflipped_cards[this.props.num];

        if(this.props.flipping && tmp !== tmp3){
            setTimeout(() => {
                this.props.flipCardsFunction(this.props.num);
            }, this.props.wait);
        }
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