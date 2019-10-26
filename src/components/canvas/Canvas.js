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
                      <BetMarker num={16} style={{alignItems:'flex-start'}} direction='down'/>
                      <BetMarker num={15} style={{alignItems:'center'}} direction='down'/>
                      <BetMarker num={14} style={{alignItems:'center'}} direction='down'/>
                      <BetMarker num={13} style={{alignItems:'center'}} direction='down'/>
                      <BetMarker num={12} style={{alignItems:'flex-end'}} direction='down'/>
                    </View>
                    {/* top row of card placers markers */}
                    <View style={{flex:1.5, flexDirection:'row',}}>
                      <BetMarker num={1} style={{justifyContent:'center'}} direction='right'/>
                      <CardHolder num={1}/>
                      <CardHolder num={2}/>
                      <CardHolder num={3}/>
                      <BetMarker num={11} style={{justifyContent:'center', alignItems:'flex-end'}} direction='left'/>
                    </View>
                    {/* top row of card placers markers */}
                    <View style={{flex:1.5, flexDirection:'row',}}>
                      <BetMarker num={2} style={{justifyContent:'center'}} direction='right'/>
                      <CardHolder num={4}/>
                      <CardHolder num={5}/>
                      <CardHolder num={6}/>
                      <BetMarker num={10} style={{justifyContent:'center', alignItems:'flex-end'}} direction='left'/>
                    </View>
                    {/* top row of card placers markers */}
                    <View style={{flex:1.5, flexDirection:'row',}}>
                      <BetMarker num={3} style={{justifyContent:'center'}} direction='right'/>
                      <CardHolder num={7}/>
                      <CardHolder num={8}/>
                      <CardHolder num={9}/>
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