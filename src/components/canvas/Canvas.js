import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import BetMarker from './BetMarker';
import CardHolder from './CardHolder';
import { connect } from 'react-redux';
import { dealFaceDown, flipCards } from '../../store/actions/actions';

const mapDispatchToProps = dispatch => {
  return {
      flipCardsFunction: (card) => dispatch(flipCards(card))
  };
};

const mapStateToProps = state => {
  return{
      cards: state.reducer.cards,
      betting: state.reducer.betting
  };
};

class Canvas extends Component {
    constructor(props) {
        super(props);
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
                      <CardHolder src={this.props.cards[1]} num="1" wait={100}/>
                      <CardHolder src={this.props.cards[2]} num="2" wait={200}/>
                      <CardHolder src={this.props.cards[3]} num="3" wait={300}/>
                      <BetMarker num={11} style={{justifyContent:'center', alignItems:'flex-end'}} direction='left'/>
                    </View>
                    {/* top row of card placers markers */}
                    <View style={{flex:1.5, flexDirection:'row',}}>
                      <BetMarker num={2} style={{justifyContent:'center'}} direction='right'/>
                      <CardHolder src={this.props.cards[4]} num="4" wait={400}/>
                      <CardHolder src={this.props.cards[5]} num="5" wait={500}/>
                      <CardHolder src={this.props.cards[6]} num="6" wait={600}/>
                      <BetMarker num={10} style={{justifyContent:'center', alignItems:'flex-end'}} direction='left'/>
                    </View>
                    {/* top row of card placers markers */}
                    <View style={{flex:1.5, flexDirection:'row',}}>
                      <BetMarker num={3} style={{justifyContent:'center'}} direction='right'/>
                      <CardHolder src={this.props.cards[7]} num="7" wait={700}/>
                      <CardHolder src={this.props.cards[8]} num="8" wait={800}/>
                      <CardHolder src={this.props.cards[9]} num="9" wait={900}/>
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