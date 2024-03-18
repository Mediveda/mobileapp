//import liraries

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Color } from '../constants/Constants';
import { scale } from '../constants/Scale';
import { PrimaryButton } from './Button';



export const Askque=()=>{
  return(
    <View style={styles.container}>

      
        <Text style={styles.text}>Have Any Queston ?</Text>
        <Text style={styles.text}> Ask Here</Text>
        <Text style={{marginTop:5}}>  <Ionic name='chevron-forward-sharp' size={26}/></Text>
      
       
        

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
    padding:10,
    height:60,
    width:"100",
    backgroundColor:"#EAFDE5",
    margin:10,
    marginTop:20,
    borderRadius:15, borderBottomWidth: 1, 
    borderBottomColor: 'lightgray', 
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3, 
    elevation: 5, 

  },
  text:{
    fontFamily:"Raleway-ExtraBold",
    fontSize:18,
    paddingHorizontal:15,
    fontFamily:"Raleway-ExtraBold",
    
    

  }
})