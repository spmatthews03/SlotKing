import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet, View, StatusBar, Image } from 'react-native';
import { TABLE_SLOT_KING_LOGO, FLY_IN_DREAM_LOGO, BACKGROUND } from '../constants/imageConstants';
import Spinner from 'react-native-loading-spinner-overlay';


const SplashScreen = ({navigation}) => {
    const [spinning, setNoSpinner] = React.useState(true);

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home');
            setNoSpinner(false)
        }, 3000)
    }, [])

    return (
        <ImageBackground
        style={styles.backgroundImage}
        source={BACKGROUND}>
        <StatusBar hidden={true}/>
        <View style={{flex: 6, justifyContent:'center', alignItems:'center'}}>
            <View style={{flex:1, width:'100%', padding:20}}>
                <Image
                    style={{flex:1, width:'100%', height:'100%', resizeMode:'contain'}}
                    source={TABLE_SLOT_KING_LOGO}/>
                <Spinner
                    visible={spinning}
                    textContent={'Loading...'}
                    textStyle={{color:'white'}}
                    />
                <View style={{flex:1, alignItems:'center', justifyContent:'flex-end'}}>
                    <View style={{width:'20%',height:'20%'}}>
                        <Image
                            style={{ width:'100%', height:'100%', resizeMode:'contain'}}
                            source={FLY_IN_DREAM_LOGO}/>
                    </View>
                </View>
            </View>
        </View>
    </ImageBackground>
    )
}

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
    }
});

export default SplashScreen