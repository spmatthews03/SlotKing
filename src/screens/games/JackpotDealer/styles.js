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
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    flexOneStyles:{
      flex: 1,
      width: '100%',
      padding: 5
    },
    totalBetText: {
      fontWeight: 'bold',
      fontSize: 13,
      fontFamily: 'Roboto-Bold',
      color: 'white',
      textAlign: 'center'
    },
    dealText: {
      fontWeight: 'bold',
      fontSize: 20,
      fontFamily: 'Roboto-Bold',
      color: 'white',
      textAlign: 'center'
    }
  });

  export {styles};