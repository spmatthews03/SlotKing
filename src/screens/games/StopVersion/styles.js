import { StyleSheet } from 'react-native';

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
    bottomButtonsStyle:{
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
        justifyContent:'center'
    },
    flexOneStyles:{
      flex: 1,
      padding: 5
    },
    totalBetText: {
      fontSize: 18,
      fontFamily: 'PlayfairDisplay-Bold',
      color: 'white',
      textAlign: 'center',
        textAlignVertical:'center',
    padding:'5%'
    },
    flipText: {
      fontSize: 20,
      fontFamily: 'PlayfairDisplay-Bold',
      color: 'white',
      textAlign: 'center'
    },
    dealText: {
      fontSize: 20,
      fontFamily: 'PlayfairDisplay-Bold',
      color: 'white',
      textAlign: 'center'
    },
    adButtonText: {
      fontSize: 14,
      fontFamily: 'PlayfairDisplay-Bold',
      color: 'white',
      textAlign: 'center'
    },
    dealButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    totalBet: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonBar: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingHorizontal: 5,
    }
  });

  export {styles};
