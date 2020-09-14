import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { dealFaceDown, dealNewCard } from '../../../store/actions/actions';
import {gameStates} from '../../../constants/gameStates';
import { getCardImage } from '../../../helpers/dealer';
import { CARD_HOLDER } from '../../../constants/imageConstants';
import { DEALING_SMALL, DEALING_BIG, DEAL_NEW_SMALL, DEAL_NEW_BIG } from '../../../constants/actionTypes';

const mapDispatchToProps = dispatch => {
    return {
        dealFaceDownFunction: (card, version) => {version == '3x3' ? dispatch({type: DEALING_SMALL, card}) : dispatch({type:DEALING_BIG, card})},
        dealNewCardFunction: (card, version) => {version == '3x3' ? dispatch({type: DEAL_NEW_SMALL, card}) : dispatch({type:DEAL_NEW_BIG, card})}
    };
};

const mapStateToProps = state => {
    if(state.versionReducer.version == '3x3'){
        return{
            game: state.drawReducer.game,
            version: state.versionReducer.version
        };
    } else {
        return{
            game: state.drawReducerBig.game,
            version: state.versionReducer.version
        };
    }

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
            this.props.dealFaceDownFunction(this.props.num, this.props.version);
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.state == gameStates.RESULTS){
            if(this.state.selected)
                this.setState({selected: false});
        }
        if(this.props.state == gameStates.BETTING){
            if(this.props.src == CARD_HOLDER){
                this.props.dealFaceDownFunction(this.props.num, this.props.version);
            }
        } else if(this.props.state == gameStates.DISCARDING && !this.state.selected){
            this.props.dealNewCardFunction(this.props.num, this.props.version);
        }
    }


    cardType = () => {
        return(
            <TouchableOpacity 
                disabled={this.props.state === gameStates.WAIT_ON_DISCARD ? false : true}
                onPress={()=> this.setState(prevState => ({selected: !prevState.selected}))}
                style={{width:'75%', height:'100%', resizeMode:'contain', borderWidth: this.state.selected ? 3 : 0, borderColor: this.state.selected ? 'gold' : null}}>
                <Image
                    style={{width:'100%', height:'100%', resizeMode:'contain'}}
                    source={getCardImage(this.props.src)}/>
            </TouchableOpacity>
        )
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