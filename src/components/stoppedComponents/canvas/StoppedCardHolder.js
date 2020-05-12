import React, { Component, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { dealFaceDown,flipCards, dealNewCard } from '../../../store/actions/actions';
import {gameStates, gameModes} from '../../../../constants/gameStates';
import { getCardImage } from '../../../../helpers/dealer';

const mapDispatchToProps = dispatch => {
    return {
        dealFaceDownFunction: (card) => dispatch(dealFaceDown(card)),
        flipCardsFunction: (card) => dispatch(flipCards(card)),
        dealNewCardFunction: (card) => dispatch(dealNewCard(card))
    };
};

const mapStateToProps = state => {
    return{
        game: state.reducer.game
    };
};

class StoppedCardHolder extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: false
        }
    }

    componentDidMount(){
        if(this.props.state == gameStates.DEALING){
            this.props.dealFaceDownFunction(this.props.num);
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.state == gameStates.RESULTS){
            if(this.state.selected)
                this.setState({selected: false});
        }
        if(this.props.state == gameStates.BETTING){
            if(this.props.src == require('../../../assets/images/canvas/card_holder.png')){
                this.props.dealFaceDownFunction(this.props.num);
            }
        } else if(this.props.state == gameStates.DISCARDING && !this.state.selected){
            this.props.dealNewCardFunction(this.props.num);
        }
    }


    cardType = () => {
        if(this.props.game == gameModes.STOPPED){
            return(
                <TouchableOpacity 
                    disabled={this.props.state === gameStates.WAIT_ON_DISCARD ? false : true}
                    onPress={()=> this.setState(prevState => ({selected: !prevState.selected}))}
                    style={{width:'75%', height:'100%', resizeMode:'contain', borderWidth: this.state.selected ? 3 : 0, borderColor: this.state.selected ? 'red' : null}}>
                    <Image
                        style={{width:'100%', height:'100%', resizeMode:'contain'}}
                        source={getCardImage(this.props.src)}/>
                </TouchableOpacity>
            )
        } else{
            return(
                <Image
                    style={{width:'100%', height:'100%', resizeMode:'contain'}}
                    source={getCardImage(this.props.src)}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(StoppedCardHolder);