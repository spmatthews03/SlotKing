import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import {styles} from '../../screens/games/StopVersion/styles';


export default class ButtonBar extends Component {
    render() {
        return (
            <View
                style={styles.buttonBar}>
                <TouchableOpacity
                disabled={true}
                style={styles.flexOneStyles}>
                    <Image style={styles.bottomButtonsStyle}
                        source={require('../../assets/images/buttons/button_totalbet.png')}/>
                    <View
                        style={styles.totalBet}>
                        <Text style={styles.totalBetText}>{"TOTAL BET\n" + this.props.total_bet}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.flip(this.props.total_bet)}
                    disabled={this.props.total_bet == 0 ? true : false}
                    style={[styles.flexOneStyles, {opacity:this.props.total_bet == 0 ? 0.2 : 1} ]}>
                    <Image
                        style={styles.bottomButtonsStyle}
                        source={require('../../assets/images/buttons/button_play__button_play_2.png')}/>
                    <View
                        style={styles.dealButton}>
                        <Text style={styles.flipText}>{"FLIP"}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
  }