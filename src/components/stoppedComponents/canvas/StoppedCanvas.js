import React, { Component, version } from 'react';
import { View, StyleSheet, ImageBackground, Image } from 'react-native';
import StoppedCardHolder from './StoppedCardHolder';
import { connect } from 'react-redux';
import {gameStates, gameModes} from '../../../constants/gameStates';
import { CANVAS_FRAME_COMPLETE } from '../../../constants/imageConstants';
import { DONE_DISCARDING_SMALL, DONE_FLIPPING_SMALL, DONE_DISCARDING_BIG, DONE_FLIPPING_BIG } from '../../../constants/actionTypes';

const mapDispatchToProps = dispatch => {
  return {
      finishedDiscarding: (version) => {version == '3x3' ? dispatch({type: DONE_DISCARDING_SMALL}) : dispatch({type: DONE_DISCARDING_BIG})},
      finishedFlipping: (version) => {version == '3x3' ? dispatch({type:DONE_FLIPPING_SMALL}) : dispatch({type:DONE_FLIPPING_BIG})}
  };
};

const mapStateToProps = state => {
  if(state.versionReducer.version == '3x3') {
    return{
        gameState: state.drawReducer.gameState,
        game: state.drawReducer.game,
        cards: state.drawReducer.cards,
        version: state.versionReducer.version
    };
  } else {
    return{
        gameState: state.drawReducerBig.gameState,
        game: state.drawReducerBig.game,
        cards: state.drawReducerBig.cards, 
        version: state.versionReducer.version
    }
  }
};

class StoppedCanvas extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps){
      if(this.props.game == gameModes.STOPPED){
        if(this.props.gameState == gameStates.DISCARDING){
          this.props.finishedDiscarding(this.props.version);
        } else if(this.props.gameState == gameStates.FLIPPING){
          this.props.finishedFlipping(this.props.version);
        }
      }
    }
 
    render() {
      if(this.props.version == '3x3'){
        return (
            (<View style={{flex:4}}>
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
            </View>)
        )
      } else {
        return(
        (<View style={{flex:4}}>
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
                    <View style={{flex:1}}>
                      <StoppedCardHolder src={this.props.cards[4]} num="4" state={this.props.gameState} wait={400}/>
                    </View>
                  </View>
                  <View style={{flex:1, flexDirection:'row',}}>
                    <View style={{flex:1}}>
                      <StoppedCardHolder src={this.props.cards[5]} num="5" state={this.props.gameState} wait={500}/>
                    </View>
                    <View style={{flex:1}}>
                      <StoppedCardHolder src={this.props.cards[6]} num="6" state={this.props.gameState} wait={600}/>
                    </View>
                    <View style={{flex:1}}>
                      <StoppedCardHolder src={this.props.cards[7]} num="7" state={this.props.gameState} wait={700}/>
                    </View>
                    <View style={{flex:1}}>
                      <StoppedCardHolder src={this.props.cards[8]} num="8" state={this.props.gameState} wait={800}/>
                    </View>
                  </View>
                  <View style={{flex:1, flexDirection:'row',}}>
                    <View style={{flex:1}}>
                      <StoppedCardHolder src={this.props.cards[9]} num="9" state={this.props.gameState} wait={900}/>
                    </View>
                    <View style={{flex:1}}>
                      <StoppedCardHolder src={this.props.cards[10]} num="10" state={this.props.gameState} wait={1000}/>
                    </View>
                    <View style={{flex:1}}>
                      <StoppedCardHolder src={this.props.cards[11]} num="11" state={this.props.gameState} wait={1100}/>
                    </View>
                    <View style={{flex:1}}>
                      <StoppedCardHolder src={this.props.cards[12]} num="12" state={this.props.gameState} wait={1200}/>
                    </View>
                  </View>
                  <View style={{flex:1, flexDirection:'row',}}>
                    <View style={{flex:1}}>
                      <StoppedCardHolder src={this.props.cards[13]} num="13" state={this.props.gameState} wait={1300}/>
                    </View>
                    <View style={{flex:1}}>
                      <StoppedCardHolder src={this.props.cards[14]} num="14" state={this.props.gameState} wait={1400}/>
                    </View>
                    <View style={{flex:1}}>
                      <StoppedCardHolder src={this.props.cards[15]} num="15" state={this.props.gameState} wait={1500}/>
                    </View>
                    <View style={{flex:1}}>
                      <StoppedCardHolder src={this.props.cards[16]} num="16" state={this.props.gameState} wait={1600}/>
                    </View>
                  </View>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </View>
        </View>)
        )
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoppedCanvas);