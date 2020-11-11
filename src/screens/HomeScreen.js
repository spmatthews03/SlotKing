import React from 'react';
import { ImageBackground, StyleSheet, View, StatusBar, TouchableOpacity, Image } from 'react-native';
import { TABLE_SLOT_KING_LOGO, PLAY_BUTTON_1, HOME_SCREEN_BACKGROUND, NO_BET_NO_WIN } from '../constants/imageConstants';
import { penClick } from '../helpers/sounds';
import MenuFooter from "../components/footers/MenuFooter";


class HomeScreen extends React.Component {

    purchaseUpdateSubscription = null
    purchaseErrorSubscription = null


    render() {
        const{navigate} = this.props.navigation;

        function onPressPlay() {
            penClick.play();
            navigate('Menu');
        }

        return (
            <ImageBackground
                style={styles.backgroundImage}
                source={HOME_SCREEN_BACKGROUND}>
                <StatusBar hidden={true}/>
                <View style={{flex:7, justifyContent:'center', alignItems:'center'}}>
                    <View style={{flex:1, width:'100%', padding:20}}>
                        <Image
                            style={{flex:1, width:'100%', height:'100%', resizeMode:'contain'}}
                            source={NO_BET_NO_WIN}/>
                        <Image
                            style={{flex:1, width:'100%', height:'100%', resizeMode:'contain'}}
                            source={TABLE_SLOT_KING_LOGO}/>
                    </View>
                    <View style={{flex:1,  paddingHorizontal:10, paddingTop:50, justifyContent:'center', alignItems:'center'}}>
                        <View style={{justifyContent:'center', alignItems:'center'}}>
                            <TouchableOpacity
                                onPress={()=> onPressPlay()}>
                                <Image
                                    style={{width:191, height:51}}
                                    source={PLAY_BUTTON_1}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <MenuFooter />
            </ImageBackground>
        );
    };
}

export default HomeScreen;

const styles = StyleSheet.create({
    imageContainer:{
        flex: 1,
        alignItems:'stretch'
    },
    container: {
        flex:1,
        paddingTop: 2
    },
    backgroundImage:{
        flex: 1,
        width: undefined,
        height: undefined
    },
    centeredView: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
      },
      modalView: {
        width:'75%',
        height:'50%',
        margin: 20,
        backgroundColor: '#0f2636',
        borderRadius: 20,
        // borderColor:'#ae8625',
        borderWidth:1,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        color:'goldenrod',
        fontFamily:'PlayfairDisplay-BoldItalic'
      },
      switchText: {
        marginBottom: 15,
        color:'goldenrod',
        fontFamily:'PlayfairDisplay-BoldItalic',
        textAlignVertical:'auto'
        },
      switchTextSelected: {
        marginBottom: 15,
        textAlign: "center",
        color:'goldenrod',
        fontFamily:'PlayfairDisplay-BoldItalic'
      },
      textContainerSwitch:{
          justifyContent:'center',
          alignItems:'center',
          textAlignVertical:'center'
        }
});
