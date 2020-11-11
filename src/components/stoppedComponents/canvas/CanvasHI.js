import React, { Component } from 'react';
import { View} from 'react-native';
import CardHolderHi from './CardHolderHi';
import { connect } from 'react-redux';
import {gameStates} from '../../../constants/gameStates';
import { HI_DONE_DISCARDING_SMALL, HI_DONE_FLIPPING_SMALL, HI_DONE_DISCARDING_BIG, HI_DONE_FLIPPING_BIG } from '../../../constants/actionTypes';

const mapDispatchToProps = dispatch => {
  return {
      finishedDiscarding: (version) => {version === '3x3' ? dispatch({type: HI_DONE_DISCARDING_SMALL}) : dispatch({type: HI_DONE_DISCARDING_BIG})},
      finishedFlipping: (version) => {version === '3x3' ? dispatch({type:HI_DONE_FLIPPING_SMALL}) : dispatch({type:HI_DONE_FLIPPING_BIG})}
  };
};

const mapStateToProps = state => {
  if(state.versionReducer.version === '3x3') {
    return{
        gameState: state.drawReducerHI.gameState,
        cards: state.drawReducerHI.cards,
        version: state.versionReducer.version
    };
  } else {
    return{
        gameState: state.drawReducerBigHI.gameState,
        cards: state.drawReducerBigHI.cards,
        version: state.versionReducer.version
    }
  }
};

class CanvasHI extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps){
      if(this.props.gameState === gameStates.DISCARDING){
        this.props.finishedDiscarding(this.props.version);
      } else if(this.props.gameState === gameStates.FLIPPING){
        this.props.finishedFlipping(this.props.version);
      }
    }

    render() {
      if(this.props.version === '3x3'){
        return (
            (<View style={{flex:4}}>
              <View style={{flex:1, paddingHorizontal:20}}>
                <View style={{flex:1}}>
                  <View style={{flex:1, paddingVertical:10, paddingHorizontal:10}}>
                    <View style={{flex:1}}>
                      {/* top row of card placers markers */}
                      <View style={{flex:1, flexDirection:'row',}}>
                        <View style={{flex:1}}>
                          <CardHolderHi src={this.props.cards[1]} num="1" state={this.props.gameState} wait={100}/>
                        </View>
                        <View style={{flex:1}}>
                          <CardHolderHi src={this.props.cards[2]} num="2" state={this.props.gameState} wait={200}/>
                        </View>
                        <View style={{flex:1}}>
                          <CardHolderHi src={this.props.cards[3]} num="3" state={this.props.gameState} wait={300}/>
                        </View>
                      </View>
                      {/* top row of card placers markers */}
                      <View style={{flex:1, flexDirection:'row',}}>
                        <View style={{flex:1}}>
                          <CardHolderHi src={this.props.cards[4]} num="4" state={this.props.gameState} wait={400}/>
                        </View>
                        <View style={{flex:1}}>
                          <CardHolderHi src={this.props.cards[5]} num="5" state={this.props.gameState} wait={500}/>
                        </View>
                        <View style={{flex:1}}>
                          <CardHolderHi src={this.props.cards[6]} num="6" state={this.props.gameState} wait={600}/>
                        </View>
                      </View>
                      {/* top row of card placers markers */}
                      <View style={{flex:1, flexDirection:'row',}}>
                        <View style={{flex:1}}>
                          <CardHolderHi src={this.props.cards[7]} num="7" state={this.props.gameState} wait={700}/>
                        </View>
                        <View style={{flex:1}}>
                          <CardHolderHi src={this.props.cards[8]} num="8" state={this.props.gameState} wait={800}/>
                        </View>
                        <View style={{flex:1}}>
                          <CardHolderHi src={this.props.cards[9]} num="9" state={this.props.gameState} wait={900}/>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>)
        )
      } else {
        return(
        (<View style={{flex:4}}>
          <View style={{flex:1, paddingHorizontal:20}}>
            <View style={{flex:1}}>
              <View style={{flex:1, paddingVertical:10, paddingHorizontal:10}}>
                <View style={{flex:1}}>
                  {/* top row of card placers markers */}
                  <View style={{flex:1, flexDirection:'row',}}>
                    <View style={{flex:1}}>
                      <CardHolderHi src={this.props.cards[1]} num="1" state={this.props.gameState} wait={100}/>
                    </View>
                    <View style={{flex:1}}>
                      <CardHolderHi src={this.props.cards[2]} num="2" state={this.props.gameState} wait={200}/>
                    </View>
                    <View style={{flex:1}}>
                      <CardHolderHi src={this.props.cards[3]} num="3" state={this.props.gameState} wait={300}/>
                    </View>
                    <View style={{flex:1}}>
                      <CardHolderHi src={this.props.cards[4]} num="4" state={this.props.gameState} wait={400}/>
                    </View>
                  </View>
                  <View style={{flex:1, flexDirection:'row',}}>
                    <View style={{flex:1}}>
                      <CardHolderHi src={this.props.cards[5]} num="5" state={this.props.gameState} wait={500}/>
                    </View>
                    <View style={{flex:1}}>
                      <CardHolderHi src={this.props.cards[6]} num="6" state={this.props.gameState} wait={600}/>
                    </View>
                    <View style={{flex:1}}>
                      <CardHolderHi src={this.props.cards[7]} num="7" state={this.props.gameState} wait={700}/>
                    </View>
                    <View style={{flex:1}}>
                      <CardHolderHi src={this.props.cards[8]} num="8" state={this.props.gameState} wait={800}/>
                    </View>
                  </View>
                  <View style={{flex:1, flexDirection:'row',}}>
                    <View style={{flex:1}}>
                      <CardHolderHi src={this.props.cards[9]} num="9" state={this.props.gameState} wait={900}/>
                    </View>
                    <View style={{flex:1}}>
                      <CardHolderHi src={this.props.cards[10]} num="10" state={this.props.gameState} wait={1000}/>
                    </View>
                    <View style={{flex:1}}>
                      <CardHolderHi src={this.props.cards[11]} num="11" state={this.props.gameState} wait={1100}/>
                    </View>
                    <View style={{flex:1}}>
                      <CardHolderHi src={this.props.cards[12]} num="12" state={this.props.gameState} wait={1200}/>
                    </View>
                  </View>
                  <View style={{flex:1, flexDirection:'row',}}>
                    <View style={{flex:1}}>
                      <CardHolderHi src={this.props.cards[13]} num="13" state={this.props.gameState} wait={1300}/>
                    </View>
                    <View style={{flex:1}}>
                      <CardHolderHi src={this.props.cards[14]} num="14" state={this.props.gameState} wait={1400}/>
                    </View>
                    <View style={{flex:1}}>
                      <CardHolderHi src={this.props.cards[15]} num="15" state={this.props.gameState} wait={1500}/>
                    </View>
                    <View style={{flex:1}}>
                      <CardHolderHi src={this.props.cards[16]} num="16" state={this.props.gameState} wait={1600}/>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>)
        )
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CanvasHI);
