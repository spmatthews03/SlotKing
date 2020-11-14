import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import {styles} from '../../screens/games/StopVersion/styles';
import { TOTAL_BET_BUTTON, PLAY_BUTTON_2 } from '../../constants/imageConstants';


export default class ButtonBar extends Component {
    render() {
        return (
            <View
                style={styles.buttonBar}>
                <View style={styles.flexOneStyles}>
                    <View style={{width:'70%', alignSelf:'center'}}>
                        <TouchableOpacity
                            disabled={true}>
                            <ImageBackground style={styles.bottomButtonsStyle}
                                             imageStyle={{width:'100%', height:'100%', resizeMode:'contain'}}
                                source={TOTAL_BET_BUTTON}>
                            <View
                                style={{width:'100%', justifyContent:'center', alignItems:'center'}}>
                                <Text adjustsFontSizeToFit={true} numberOfLines={2} style={styles.totalBetText}>{"TOTAL BET\n" + this.props.total_bet}</Text>
                            </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.flexOneStyles, {justifyContent: 'center', alignItems:'center'}]}>
                    <TouchableOpacity
                        onPress={() => this.props.flip(this.props.total_bet)}
                        disabled={this.props.total_bet === 0}
                        style={{width:'70%', opacity:this.props.total_bet === 0 ? 0.2 : 1} }>
                        <Image
                            style={styles.bottomButtonsStyle}
                            source={PLAY_BUTTON_2}/>
                        <View
                            style={styles.dealButton}>
                            <Text style={styles.flipText}>{"FLIP"}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
  }
