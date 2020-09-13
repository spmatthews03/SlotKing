import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Image } from 'react-native';
import StoppedCardHolder from './StoppedCardHolder';
import { connect } from 'react-redux';
import {gameStates, gameModes} from '../../../constants/gameStates';
import { discardingComplete, flippingComplete } from '../../../store/actions/actions';
import { CANVAS_FRAME_COMPLETE } from '../../../constants/imageConstants';


const mapDispatchToProps = dispatch => {
  return {
      finishedDiscarding: () => dispatch(discardingComplete()),
      finishedFlipping: () => dispatch(flippingComplete())
  };
};

const mapStateToProps = state => {
  return{
      gameState: state.drawReducer.gameState,
      game: state.drawReducer.game,
      cards: state.drawReducer.cards,
  };
};

class StoppedCanvas extends Component {
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
            <View style={{flex:1, paddingHorizontal:20}}>
              <View style={{flex:1}}>
                <ImageBackground style={{width:'100%', height:'100%'}} imageStyle={{width:'100%', height:'100%', resizeMode:'contain'}}
                  source={CANVAS_FRAME_COMPLETE}>
                  <View style={{flex:1, paddingVertical:10, paddingHorizontal:10}}>
                  <View style={{flex:1}}>
                    {/* top row of card placers markers */}
                    <View style={{flex:1, flexDirection:'row',}}>
                      <View style={{flex:1}}>
                        <StoppedCardHolder src={this.props.cards[1]} num="1" state={this.props.gameState} wait={100}/>
                      </View>
                      <View style={{flex:1}}>
                        <StoppedCardHolder src={this.props.cards[2]} num="2" state={this.props.gameState} wait={200}/>
                      </View>
                      <View style={{flex:1}}>
                        <StoppedCardHolder src={this.props.cards[3]} num="3" state={this.props.gameState} wait={300}/>
                      </View>
                    </View>
                    {/* top row of card placers markers */}
                    <View style={{flex:1, flexDirection:'row',}}>
                      <View style={{flex:1}}>
                        <StoppedCardHolder src={this.props.cards[4]} num="4" state={this.props.gameState} wait={400}/>
                      </View>
                      <View style={{flex:1}}>
                        <StoppedCardHolder src={this.props.cards[5]} num="5" state={this.props.gameState} wait={500}/>
                      </View>
                      <View style={{flex:1}}>
                        <StoppedCardHolder src={this.props.cards[6]} num="6" state={this.props.gameState} wait={600}/>
                      </View>
                    </View>
                    {/* top row of card placers markers */}
                    <View style={{flex:1, flexDirection:'row',}}>
                      <View style={{flex:1}}>
                        <StoppedCardHolder src={this.props.cards[7]} num="7" state={this.props.gameState} wait={700}/>
                      </View>
                      <View style={{flex:1}}>
                        <StoppedCardHolder src={this.props.cards[8]} num="8" state={this.props.gameState} wait={800}/>
                      </View>
                      <View style={{flex:1}}>
                        <StoppedCardHolder src={this.props.cards[9]} num="9" state={this.props.gameState} wait={900}/>
                      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(StoppedCanvas);