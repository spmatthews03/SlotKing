import React, { Component } from 'react';
import {View, TouchableOpacity, Animated} from 'react-native';
import { connect } from 'react-redux';
import {gameStates} from '../../../constants/gameStates';
import { getCardImage } from '../../../helpers/dealer';
import { CARD_HOLDER } from '../../../constants/imageConstants';
import { HI_DEALING_SMALL, HI_DEALING_BIG, HI_DEAL_NEW_SMALL, HI_DEAL_NEW_BIG } from '../../../constants/actionTypes';
import { buttonClick } from '../../../helpers/sounds';

const mapDispatchToProps = dispatch => {
    return {
        dealFaceDownFunction: (card, version) => {version === '3x3' ? dispatch({type: HI_DEALING_SMALL, card}) : dispatch({type:HI_DEALING_BIG, card})},
        dealNewCardFunction: (card, version) => {version === '3x3' ? dispatch({type: HI_DEAL_NEW_SMALL, card}) : dispatch({type:HI_DEAL_NEW_BIG, card})}
    };
};

const mapStateToProps = state => {
    if(state.versionReducer.version === '3x3'){
        return{
            version: state.versionReducer.version,
            winningLines: state.drawReducerHI.winningLines
        };
    } else {
        return{
            version: state.versionReducer.version,
            winningLines: state.drawReducerBigHI.winningLines
        };
    }
};

class CardHolderHi extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: false
        }
    }

    animatedValue = new Animated.Value(0);

    componentDidMount(){
        if(this.props.state === gameStates.DEALING){
            this.props.dealFaceDownFunction(this.props.num, this.props.version);
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.state === gameStates.RESULTS){
            if(this.state.selected)
                this.setState({selected: false});
            if(this.props.winningLines !== prevProps.winningLines) {
                this.props.winningLines.forEach(line => {
                    if (line.includes(parseInt(this.props.num))) {
                        Animated.sequence([
                            Animated.timing(this.animatedValue, {toValue: 1, duration:200, useNativeDriver:true}),
                            Animated.timing(this.animatedValue, {toValue: 0, duration:200, useNativeDriver:true})
                        ]).start();
                    }
                })
            }
        }
        if(this.props.state === gameStates.BETTING){
            if(this.props.src === CARD_HOLDER){
                this.props.dealFaceDownFunction(this.props.num, this.props.version);
            }
        } else if(this.props.state === gameStates.DISCARDING && !this.state.selected){
            this.props.dealNewCardFunction(this.props.num, this.props.version);
        }
    }

    selectCard(){
        this.setState(prevState => ({selected: !prevState.selected}));
        buttonClick.play();
    }

    cardType = () => {
        return(
            <TouchableOpacity
                disabled={this.props.state !== gameStates.WAIT_ON_DISCARD}
                onPress={()=>this.selectCard()}
                style={{width:'75%', height:'100%', resizeMode:'contain', borderWidth: this.state.selected ? 3 : 0, borderColor: this.state.selected ? 'gold' : null}}>
                <Animated.Image
                    style={{
                        width:'100%',
                        height:'100%',
                        resizeMode:'contain',
                        transform: [
                            {
                                scale: this.animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 1.15]
                                })
                            }
                        ]
                    }}
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

export default connect(mapStateToProps, mapDispatchToProps)(CardHolderHi);
