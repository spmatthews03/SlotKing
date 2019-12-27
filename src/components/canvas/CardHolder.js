import React, { Component, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { dealFaceDown,flipCards } from '../../store/actions/actions';

const mapDispatchToProps = dispatch => {
    return {
        dealFaceDownFunction: (card) => dispatch(dealFaceDown(card)),
        flipCardsFunction: (card) => dispatch(flipCards(card))
    };
};

const mapStateToProps = state => {
    return{
        betting: state.reducer.betting,
        flipping: state.reducer.flipping,
        dealing: state.reducer.dealing,
        initialState: state.reducer.initialState
    };
};

class CardHolder extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        if(this.props.betting){
            setTimeout(() => {
                this.props.dealFaceDownFunction(this.props.num);
            }, this.props.wait);
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.flipping && this.props.src !== prevProps.src){
            setTimeout(() => {
                this.props.flipCardsFunction(this.props.num);
            }, this.props.wait);
        } else if(this.props.dealing){
            // setTimeout(() => {
            //     this.props.dealFaceDownFunction(this.props.num);
            // }, 5000);

            setTimeout(() => {
                this.props.dealFaceDownFunction(this.props.num);
            }, this.props.wait+4000);
        }
    }


  render() { 
    return (
        <View className='hidden' style={{flex:1, alignItems:'center',paddingVertical:5}}>
            <Image
                style={{width:'100%', height:'100%', resizeMode:'contain'}}
                source={this.props.src}/>
        </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardHolder);