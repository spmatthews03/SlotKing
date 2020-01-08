import React, { Component } from 'react';
import { Image, ImageBackground, StatusBar, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';



function getColor(id){
  if(id === '1.'){
    return('rgba(255,255,255,0.4)')
  }
  else if(id === '2.'){
    return('rgba(255,255,255,0.2)')
  }
  else if(id === '3.'){
    return('rgba(255,255,255,0.1)')
  }
  else{
    return null;
  }
}



function HighScore({ id, name, time, score }) {
  return(
    <View style={[styles.itemContainer, {backgroundColor: getColor(id)}]}>
      <View style={[{flex:1}]}>
        <Text style={styles.itemIdTime}>{id}</Text>
      </View>
      <View style={{flex:6}}>
        <Text style={styles.itemName}>{name}</Text>
      </View>
      <View style={{flex:2}}>
        <Text style={styles.itemIdTime}>{time}</Text>
      </View>
      <View style={{flex:2}}>
        <Text style={styles.itemScore}>{score}</Text>
      </View>
    </View>
    
  )
}

function TableHeader(){
  return(
    <View style={styles.headerContainer}>
      <View style={[{flex:1}]}>
        <Text style={styles.headerStyle}>#</Text>
      </View>
      <View style={{flex:6}}>
        <Text style={styles.headerStyle}>Name</Text>
      </View>
      <View style={{flex:2, alignItems:'center'}}>
        <Text style={styles.headerStyle}>Time</Text>
      </View>
      <View style={{flex:2, alignItems:'center'}}>
        <Text style={styles.headerStyle}>Score</Text>
      </View>
    </View>
    
  )
}




export default class HighScoreScreen extends Component {
  

  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
      tableHead: ['Place','Name','Time','Score'],

       highScores: [
        { id: '1.', name: 'Wasif', time: '2:10', score: '720' },
        { id: '2.', name: 'Ali', time: '3:13', score: '690' },
        { id: '3.', name: 'Saad', time: '2:54', score: '670' },
        { id: '4.', name: 'Asad', time: '4:43', score: '660' },
        { id: '5.', name: 'Wasif', time: '5:22', score: '660' },
        { id: '6.', name: 'Ali', time: '3:55', score: '470' },
        { id: '7.', name: 'Saad', time: '2:12', score: '455' },
        { id: '8.', name: 'Asad', time: '3:14', score: '390' },
        { id: '9.', name: 'Wasif', time: '4:31', score: '390' },
        { id: '10.', name: 'Ali', time: '5:07', score: '100' },
       ]
    }
 }

  render() {

    return (
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../assets/images/background.png")}
      >
        <StatusBar hidden={true} />
        <View style={{ flex: 1}}>
          <View style={{ flex: 1, flexDirection:'row', margin: 50}}>
            <Image
              style={{width: '100%', height:'auto', resizeMode:'contain'}}
              source={require('../assets/images/king_nobet_nowin.png')}/>
          </View>
          <View style={{flex:4, padding:20}}>
            <View>
              {<TableHeader/>}
              <FlatList
                style={{borderWidth:.2,borderColor:'gold'}}
                data={this.state.highScores}
                renderItem={({item}) => (
                  <HighScore                  
                    id={item.id}
                    name={item.name}
                    time={item.time}
                    score={item.score}
                    />
                )}
                keyExtractor={item => item.id}
                />
              </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}



const styles = StyleSheet.create({
  imageContainer:{
      flex: 1,
      alignItems:'stretch'
  },
  backgroundImage:{
      flex: 1,
      width: undefined,
      height: undefined
  },
  container: { 
    flex: 1, 
    padding: 16,
    paddingTop: 30,
    // backgroundColor: 'rgba(255,255,255,0.)',
    
   },
  headerText:{
    color:'rgba(255,215,0,1.0)',
    margin: 6
  },
  head: { 
    height: 40, 


  },
  itemBorder:{
    borderColor:'gold',
    borderWidth:.2
  },
  itemIdTime: {
    fontSize: 14,
    color:'white',
    textAlign:'center',
    margin: 6,
  },
  itemName: {
    fontSize: 18,
    fontWeight:'bold',
    color:'white',
    margin: 6,
  },
  itemScore: {
    fontSize: 18,
    fontWeight:'bold',
    color:'white',
    textAlign:'center',
    margin: 6,
  },
  text: { 
    fontSize:20,
    margin: 6,
    color:'white'
  },
  itemContainer:{
    flexDirection:'row',
    alignItems:'center',
    borderColor:'white', 
    borderWidth:.3,
  },
  headerContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  headerStyle:{
    fontSize: 12,
    color:'gold',
    margin: 6,
  }
});