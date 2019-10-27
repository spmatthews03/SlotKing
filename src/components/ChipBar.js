import React, { Component } from 'react';
import { Animated, View, Image, StyleSheet, Easing, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';



const mapStateToProps = state => {
  return{
      opacities: state.reducer.opacities,
  };
};

const mapDispatchToProps = dispatch => {
  return {
      highlightChipFunction: (chipValue) => dispatch(highlightChip(chipValue)),
  };
};



class ChipBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            highlighted_chip: 0,
            total_bet: 0,
            opacities: {
                yellow: 0.2,
                purple: 0.2,
                green: 0.2,
                red: 0.2,
                gold: 0.2
            }
        };
    }


    setHighlightedChip = (color) => {

        this.state.opacities.yellow = 0.2;
        this.state.opacities.purple = 0.2;
        this.state.opacities.green = 0.2;
        this.state.opacities.red = 0.2;
        this.state.opacities.gold = 0.2;
    
        if (color == 'yellow') {
          this.state.opacities.yellow = 1;
          this.state.highlighted_chip = 1;
        }
        if (color == 'purple') {
          this.state.opacities.purple = 1;
          this.state.highlighted_chip = 5;
        }
        if (color == 'green') {
          this.state.opacities.green = 1;
          this.state.highlighted_chip = 10;
        }
        if (color == 'red') {
          this.state.opacities.red = 1;
          this.state.highlighted_chip = 20;
        }
        if (color == 'gold') {
          this.state.opacities.gold = 1;
          this.state.highlighted_chip = 100;
        }
    
        this.props.parentCallback(this.state.highlighted_chip);

        this.setState({
          opacities: this.state.opacities,
        });
      };

    


    render() {
        return (
            <View style={{flex:1, borderRadius:15, borderColor:'gold', borderWidth: 1, backgroundColor:'#0f2636', flexDirection:'row', padding:8, justifyContent:'center'}}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        paddingHorizontal: 35,
                    }}
                    >
                    <TouchableOpacity
                        onPress={() => this.props.highlightChipFunction('yellow')}
                        style={[styles.flexOneStyles]}
                    >
                        <Animated.Image
                        style={[
                            styles.chipStyle, {opacity: this.state.opacities.yellow}
                        ]}
                        source={require('../assets/images/chips/chip_one.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.highlightChipFunction('purple')}
                        style={styles.flexOneStyles}
                    >
                        <Image
                        style={[
                            styles.chipStyle, {opacity: this.state.opacities.purple}
                        ]}
                        source={require('../assets/images/chips/chip_five.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.highlightChipFunction('green')}
                        style={styles.flexOneStyles}
                    >
                        <Image
                        style={[
                            styles.chipStyle, {opacity: this.state.opacities.green}
                        ]}
                        source={require('../assets/images/chips/chip_ten.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.highlightChipFunction('red')}
                        style={styles.flexOneStyles}>
                        <Image
                        style={[
                            styles.chipStyle, {opacity: this.state.opacities.red}
                        ]}
                        source={require('../assets/images/chips/chip_twenty.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.highlightChipFunction('gold')}
                        style={styles.flexOneStyles}>
                        <Image
                        style={[
                            styles.chipStyle, {opacity: this.state.opacities.gold}
                        ]}
                        source={require('../assets/images/chips/chip_hundred.png')}
                        />
                    </TouchableOpacity>
                </View>
        </View>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChipBar);

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