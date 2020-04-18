import React, { Component, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { dealFaceDown,flipCards, betting } from '../../store/actions/actions';

const mapDispatchToProps = dispatch => {
    return {
        dealFaceDownFunction: (card) => dispatch(dealFaceDown(card)),
        flipCardsFunction: (card) => dispatch(flipCards(card)),
        // initiateBetting: () => dispatch(betting())
    };
};

const mapStateToProps = state => {
    return{
        betting: state.reducer.betting,
        flipping: state.reducer.flipping,
        dealing: state.reducer.dealing,
        initialState: state.reducer.initialState,
        game: state.reducer.game
    };
};

class CardHolder extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: false
        }
    }

    componentDidMount(){
        if(this.props.dealing){
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
            if(this.props.src == require('../../assets/images/canvas/card_holder.png')){
                setTimeout(() => {
                    this.props.dealFaceDownFunction(this.props.num);
                }, this.props.wait);   
            }
        }
    }

    cardType = () => {
        if(this.props.game == "Stopped"){
            return(
                <TouchableOpacity 
                    onPress={()=> this.setState(prevState => ({selected: !prevState.selected}))}
                    style={{width:'100%', height:'100%', resizeMode:'contain', opacity: this.state.selected ? .2 : 1}}>
                    <Image
                        style={{width:'100%', height:'100%', resizeMode:'contain'}}
                        source={this.props.src}/>
                </TouchableOpacity>
            )
        } else{
            return(
                <Image
                    style={{width:'100%', height:'100%', resizeMode:'contain'}}
                    source={this.props.src}/>
            )
        }
    }

  render() { 
    return (
        <View className='hidden' style={{flex:1, alignItems:'center',paddingVertical:5}}>
            {this.cardType()}
        </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardHolder);