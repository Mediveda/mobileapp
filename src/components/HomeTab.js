import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';



export const HomeTab = (props) => {
  const { titel, onPress, imagesource, price } = props
  return (
    <View style={{ alignItems: "center", flex: 1 }} >
      <TouchableOpacity style={styles.TouchableOpacitystyle}
        onPress={onPress}
      >
        <View style={styles.container}>

        <View style={{marginHorizontal:10}}>
            <Image
              style={{ height: 50, width: 50, }}
              source={imagesource}
            />
          </View>

          <View style={{flexDirection:"column",justifyContent:"space-between",}}>
            <Text style={styles.text }>{titel}</Text>
           <View><Text style={styles.pricetxt}>{price} </Text></View> 
            <Text style={styles.icon}>View All</Text>
          </View>
           
          

        </View>



      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    TouchableOpacitystyle: {
    flex: 1,
    flexDirection: "row",
    height: 120,
    width: 180,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    padding: 10,
    margin: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,


  },
  container: {
    flex: 1,
    flexDirection: "row",
    padding:10,
    justifyContent: 'space-between',
   

  },
  text: {
   fontFamily:"Raleway-ExtraBold",
   fontSize:18,
  },
  pricetxt:{
   fontFamily:"Raleway-Bold",
   fontSize:18, 
  },
  icon:{
    fontFamily:"Raleway-Bold",
    marginTop:10

  }


})