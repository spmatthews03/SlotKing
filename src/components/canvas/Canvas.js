import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Image } from 'react-native';
import BetMarker from './BetMarker';
import CardHolder from './CardHolder';
import { connect } from 'react-redux';
import {gameStates, gameModes} from '../../../constants/gameStates';
import { discardingComplete, flippingComplete } from '../../store/actions/actions';


const mapDispatchToProps = dispatch => {
  return {
      finishedDiscarding: () => dispatch(discardingComplete()),
      finishedFlipping: () => dispatch(flippingComplete())
  };
};

const mapStateToProps = state => {
  return{
      gameState: state.reducer.gameState,
      game: state.reducer.game,
      cards: state.reducer.cards,
  };
};

class Canvas extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps){
      if(this.props.game == gameModes.STOPPED){
        if(this.props.gameState == gameStates.DISCARDING){
          this.props.finishedDiscarding();
        } else if(this.props.gameState == gameStates.FLIPPING){
          this.props.finishedFlipping();
        }
      }
    }
 
    render() {

        return (
          <View style={{flex:4}}>
            <View style={{flex:1, paddingHorizontal:30}}>
              <View style={{flex:1}}>
                <ImageBackground style={{height:'100%',resizeMode:'contain'}}
                  source={require('../../assets/images/canvas/canvas_frame_complete.png')}>
                  <View style={{flex:1, paddingVertical:10, paddingHorizontal:10}}>
                  <View style={{flex:1}}>
                    {/* top row of the red bet markers */}
                    <View style={{flex:1, flexDirection:'row',}}>
                      <BetMarker num={16} style={{alignItems:'flex-start'}} direction='down'/>
                      <BetMarker num={15} style={{alignItems:'center'}} direction='down'/>
                      <BetMarker num={14} style={{alignItems:'center'}} direction='down'/>
                      <BetMarker num={13} style={{alignItems:'center'}} direction='down'/>
                      <BetMarker num={12} style={{alignItems:'flex-end'}} direction='down'/>
                    </View>
                    {/* top row of card placers markers */}
                    <View style={{flex:1.5, flexDirection:'row',}}>
                      <BetMarker num={1} style={{justifyContent:'center'}} direction='right'/>
                      <CardHolder src={this.props.cards[1]} num="1" state={this.props.gameState} wait={100}/>
                      <CardHolder src={this.props.cards[2]} num="2" state={this.props.gameState} wait={200}/>
                      <CardHolder src={this.props.cards[3]} num="3" state={this.props.gameState} wait={300}/>
                      <BetMarker num={11} style={{justifyContent:'center', alignItems:'flex-end'}} direction='left'/>
                    </View>
                    {/* top row of card placers markers */}
                    <View style={{flex:1.5, flexDirection:'row',}}>
                      <BetMarker num={2} style={{justifyContent:'center'}} direction='right'/>
                      <CardHolder src={this.props.cards[4]} num="4" state={this.props.gameState} wait={400}/>
                      <CardHolder src={this.props.cards[5]} num="5" state={this.props.gameState} wait={500}/>
                      <CardHolder src={this.props.cards[6]} num="6" state={this.props.gameState} wait={600}/>
                      <BetMarker num={10} style={{justifyContent:'center', alignItems:'flex-end'}} direction='left'/>
                    </View>
                    {/* top row of card placers markers */}
                    <View style={{flex:1.5, flexDirection:'row',}}>
                      <BetMarker num={3} style={{justifyContent:'center'}} direction='right'/>
                      <CardHolder src={this.props.cards[7]} num="7" state={this.props.gameState} wait={700}/>
                      <CardHolder src={this.props.cards[8]} num="8" state={this.props.gameState} wait={800}/>
                      <CardHolder src={this.props.cards[9]} num="9" state={this.props.gameState} wait={900}/>
                      <BetMarker num={9} style={{justifyContent:'center', alignItems:'flex-end'}} direction='left'/>
                    </View>
                    <View style={{flex:1, flexDirection:'row',}}>
                      <BetMarker num={4} style={{justifyContent:'flex-end', alignItems:'flex-start'}} direction='up'/>
                      <BetMarker num={5} style={{justifyContent:'flex-end', alignItems:'center'}} direction='up'/>
                      <BetMarker num={6} style={{justifyContent:'flex-end', alignItems:'center'}} direction='up'/>
                      <BetMarker num={7} style={{justifyContent:'flex-end', alignItems:'center'}} direction='up'/>
                      <BetMarker num={8} style={{justifyContent:'flex-end', alignItems:'flex-end'}} direction='up'/>
                    </View>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </View>
          </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);