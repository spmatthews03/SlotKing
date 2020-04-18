import React, { Component } from 'react';
import { Animated, View, Image, StyleSheet, Easing, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { highlightChip,setOpacities } from '../../store/actions/actions';



const mapStateToProps = state => {
  return{
      opacities: state.reducer.opacities,
  };
};

const mapDispatchToProps = dispatch => {
  return {
      highlightChipFunction: (chipValue) => dispatch(highlightChip(chipValue)),
      setOpacitiesFunction: (opacities) => dispatch(setOpacities(opacities)),
  };
};



class ChipBar extends Component {
    constructor(props) {
        super(props);

        this.state = {}

    }


    setHighlightedChip = (color) => {
        let newOpacities = {
          yellow: 0.2,
          purple: 0.2,
          green: 0.2,
          red: 0.2,
          gold: 0.2
      };
      let newHighlightedChip;
    
        if (color == 'yellow') {
          newOpacities.yellow = 1;
          newHighlightedChip = 1;
        }
        if (color == 'purple') {
          newOpacities.purple = 1;
          newHighlightedChip = 5;
        }
        if (color == 'green') {
          newOpacities.green = 1;
          newHighlightedChip = 10;
        }
        if (color == 'red') {
          newOpacities.red = 1;
          newHighlightedChip = 20;
        }
        if (color == 'gold') {
          newOpacities.gold = 1;
          newHighlightedChip = 100;
        }
    
        this.props.highlightChipFunction(newHighlightedChip);
        this.props.setOpacitiesFunction(newOpacities);
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
                        onPress={() => this.setHighlightedChip('yellow')}
                        style={[styles.flexOneStyles]}
                    >
                        <Animated.Image
                        style={[
                            styles.chipStyle, {opacity: this.props.opacities.yellow}
                        ]}
                        source={require('../../assets/images/chips/chip_one.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.setHighlightedChip('purple')}
                        style={styles.flexOneStyles}
                    >
                        <Image
                        style={[
                            styles.chipStyle, {opacity: this.props.opacities.purple}
                        ]}
                        source={require('../../assets/images/chips/chip_five.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.setHighlightedChip('green')}
                        style={styles.flexOneStyles}
                    >
                        <Image
                        style={[
                            styles.chipStyle, {opacity: this.props.opacities.green}
                        ]}
                        source={require('../../assets/images/chips/chip_ten.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.setHighlightedChip('red')}
                        style={styles.flexOneStyles}>
                        <Image
                        style={[
                            styles.chipStyle, {opacity: this.props.opacities.red}
                        ]}
                        source={require('../../assets/images/chips/chip_twenty.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.setHighlightedChip('gold')}
                        style={styles.flexOneStyles}>
                        <Image
                        style={[
                            styles.chipStyle, {opacity: this.props.opacities.gold}
                        ]}
                        source={require('../../assets/images/chips/chip_hundred.png')}
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