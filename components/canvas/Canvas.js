import React, { Component } from 'react';
import { Animated, View, Image, StyleSheet, Easing, TouchableOpacity, ImageBackground } from 'react-native';
import LeftBets from './LeftBets';
import BetMarker from './BetMarker';
import CardHolder from './CardHolder';


export default class Canvas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            highlighted_chip: 0,
        };
    }


    componentDidMount(){
      this.setState({
        highlighted_chip: this.props.chip,
      });
    }

    // betMarkerCallback = (data) => {
    //   this.setState({
    //     highlighted_chip: data
    //   })
    // }

    render() {
        return (
          <View style={{flex:3}}>
            <View style={{flex:1, paddingHorizontal:45}}>
              <View style={{flex:1}}>
                <ImageBackground style={{height:'100%',resizeMode:'contain'}}
                  source={require('../../assets/images/canvas/canvas_frame_complete.png')}>
                  <View style={{flex:1, paddingVertical:30, paddingHorizontal:15}}>
                  <View style={{flex:1}}>
                    {/* top row of the red bet markers */}
                    <View style={{flex:1, flexDirection:'row',}}>
                      <BetMarker chip={this.props.chip} direction='down'/>
                      <BetMarker chip={this.props.chip} direction='down'/>
                      <BetMarker chip={this.props.chip} direction='down'/>
                      <BetMarker chip={this.props.chip} direction='down'/>
                      <BetMarker chip={this.props.chip} direction='down'/>
                    </View>
                    {/* top row of card placers markers */}
                    <View style={{flex:1, flexDirection:'row',}}>
                      <BetMarker chip={this.props.chip} direction='right'/>
                      <CardHolder card={this.props.cards.card1}/>
                      <CardHolder card={this.props.cards.card2}/>
                      <CardHolder card={this.props.cards.card3}/>
                      <BetMarker chip={this.props.chip} direction='left'/>
                    </View>
                    {/* top row of card placers markers */}
                    <View style={{flex:1, flexDirection:'row',}}>
                    <BetMarker chip={this.props.chip} direction='right'/>
                      <CardHolder card={this.props.cards.card4}/>
                      <CardHolder card={this.props.cards.card5}/>
                      <CardHolder card={this.props.cards.card6}/>
                      <BetMarker chip={this.props.chip} direction='left'/>
                    </View>
                    {/* top row of card placers markers */}
                    <View style={{flex:1, flexDirection:'row',}}>
                      <BetMarker chip={this.props.chip} direction='right'/>
                      <CardHolder card={this.props.cards.card7}/>
                      <CardHolder card={this.props.cards.card8}/>
                      <CardHolder card={this.props.cards.card9}/>
                      <BetMarker chip={this.props.chip} direction='left'/>
                    </View>
                    <View style={{flex:1, flexDirection:'row',}}>
                      <BetMarker chip={this.props.chip} direction='up'/>
                      <BetMarker chip={this.props.chip} direction='up'/>
                      <BetMarker chip={this.props.chip} direction='up'/>
                      <BetMarker chip={this.props.chip} direction='up'/>
                      <BetMarker chip={this.props.chip} direction='up'/>
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