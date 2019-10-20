import React, { Component } from 'react';
import { Animated, View, Image, StyleSheet, Easing, TouchableOpacity, ImageBackground } from 'react-native';
import LeftBets from './LeftBets';
import BetMarker from './BetMarker';
import CardHolder from './CardHolder';


export default class Canvas extends Component {
  // static getDerivedStateFromProps(props, state){
  //   if (props.bets !== state.bets) {
  //     return { bets: props.bets};
  //   }
  //   return null;
  // }

    constructor(props) {
        super(props);

        this.state = {
            // highlighted_chip: 0,
            // bets:{
            //   bet1: 0,
            //   bet2: 0,
            //   bet3: 0,
            //   bet4: 0,
            //   bet5: 0,
            //   bet6: 0,
            //   bet7: 0,
            //   bet8: 0,
            //   bet9: 0,
            //   bet10: 0,
            //   bet11: 0,
            //   bet12: 0,
            //   bet13: 0,
            //   bet14: 0,
            //   bet15: 0,
            //   bet16: 0,
            // }
        };
    }


    componentDidMount(){
      this.setState({
        bets: this.props.bets,
      });
    }

    betMarkerCallback = (num) => {
      this.props.callback(num);
    }

    render() {
        return (
          <View style={{flex:4}}>
            <View style={{flex:1, paddingHorizontal:35}}>
              <View style={{flex:1}}>
                <ImageBackground style={{height:'100%',resizeMode:'contain'}}
                  source={require('../../assets/images/canvas/canvas_frame_complete.png')}>
                  <View style={{flex:1, paddingVertical:30, paddingHorizontal:15}}>
                  <View style={{flex:1}}>
                    {/* top row of the red bet markers */}
                    <View style={{flex:1, flexDirection:'row',}}>
                      <BetMarker num={16} chip={this.props.chip} style={{alignItems:'flex-start'}} parentCallback={this.betMarkerCallback} bet={this.props.bets.bet16} direction='down'/>
                      <BetMarker num={15} chip={this.props.chip} style={{alignItems:'center'}} parentCallback={this.betMarkerCallback} bet={this.props.bets.bet15} direction='down'/>
                      <BetMarker num={14} chip={this.props.chip} style={{alignItems:'center'}} parentCallback={this.betMarkerCallback} bet={this.props.bets.bet14} direction='down'/>
                      <BetMarker num={13} chip={this.props.chip} style={{alignItems:'center'}} parentCallback={this.betMarkerCallback} bet={this.props.bets.bet13} direction='down'/>
                      <BetMarker num={12} chip={this.props.chip} style={{alignItems:'flex-end'}} parentCallback={this.betMarkerCallback} bet={this.props.bets.bet12} direction='down'/>
                    </View>
                    {/* top row of card placers markers */}
                    <View style={{flex:1.5, flexDirection:'row',}}>
                      <BetMarker num={1} chip={this.props.chip} style={{justifyContent:'center'}} parentCallback={this.betMarkerCallback} bet={this.props.bets.bet1} direction='right'/>
                      <CardHolder card={this.props.cards.card1}/>
                      <CardHolder card={this.props.cards.card2}/>
                      <CardHolder card={this.props.cards.card3}/>
                      <BetMarker num={11} chip={this.props.chip} style={{justifyContent:'center', alignItems:'flex-end'}} parentCallback={this.betMarkerCallback} bet={this.props.bets.bet11} direction='left'/>
                    </View>
                    {/* top row of card placers markers */}
                    <View style={{flex:1.5, flexDirection:'row',}}>
                      <BetMarker num={2} chip={this.props.chip} style={{justifyContent:'center'}} parentCallback={this.betMarkerCallback} bet={this.props.bets.bet2} direction='right'/>
                      <CardHolder card={this.props.cards.card4}/>
                      <CardHolder card={this.props.cards.card5}/>
                      <CardHolder card={this.props.cards.card6}/>
                      <BetMarker num={10} chip={this.props.chip} style={{justifyContent:'center', alignItems:'flex-end'}} parentCallback={this.betMarkerCallback} bet={this.props.bets.bet10} direction='left'/>
                    </View>
                    {/* top row of card placers markers */}
                    <View style={{flex:1.5, flexDirection:'row',}}>
                      <BetMarker num={3} chip={this.props.chip} style={{justifyContent:'center'}} parentCallback={this.betMarkerCallback} bet={this.props.bets.bet3} direction='right'/>
                      <CardHolder card={this.props.cards.card7}/>
                      <CardHolder card={this.props.cards.card8}/>
                      <CardHolder card={this.props.cards.card9}/>
                      <BetMarker num={9} chip={this.props.chip} style={{justifyContent:'center', alignItems:'flex-end'}} parentCallback={this.betMarkerCallback} bet={this.props.bets.bet9} direction='left'/>
                    </View>
                    <View style={{flex:1, flexDirection:'row',}}>
                      <BetMarker num={4} chip={this.props.chip} style={{justifyContent:'flex-end', alignItems:'flex-start'}} parentCallback={this.betMarkerCallback} bet={this.props.bets.bet4} direction='up'/>
                      <BetMarker num={5} chip={this.props.chip} style={{justifyContent:'flex-end', alignItems:'center'}} parentCallback={this.betMarkerCallback} bet={this.props.bets.bet5} direction='up'/>
                      <BetMarker num={6} chip={this.props.chip} style={{justifyContent:'flex-end', alignItems:'center'}} parentCallback={this.betMarkerCallback} bet={this.props.bets.bet6} direction='up'/>
                      <BetMarker num={7} chip={this.props.chip} style={{justifyContent:'flex-end', alignItems:'center'}} parentCallback={this.betMarkerCallback} bet={this.props.bets.bet7} direction='up'/>
                      <BetMarker num={8} chip={this.props.chip} style={{justifyContent:'flex-end', alignItems:'flex-end'}} parentCallback={this.betMarkerCallback} bet={this.props.bets.bet8} direction='up'/>
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

const styles = StyleSheet.create({
    imageContainer: {
      flex: 1,
      alignItems: 'stretch'
    },
    container: {
      flex: 1,
      paddingTop: 2
    },
    backgroundImage: {
      flex: 1,
      width: undefined,
      height: undefined
    },
    chipStyle:{
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'contain'
    },
    bottomButtonsStyle:{
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    flexOneStyles:{
      flex: 1,
      width: '100%',
      padding: 5
    }
  });