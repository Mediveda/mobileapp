import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity,Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomHeader, { BackHeader } from '../components/Headers';
import { SliderBox } from "react-native-image-slider-box";
import { HomeTab } from '../components/HomeTab';
import TimeRangeSelector from '../components/Button';
import { Askque } from '../components/Items';


export default Home = ({navigation}) => {
  const [images, setImages] = useState([
    require('../assets/Image/A1.jpg'),
    require('../assets/Image/A1.jpg'),
    require('../assets/Image/A1.jpg'),
  ])

  return (
    <SafeAreaView>
      <ScrollView style={styles.container} >

        <View style={{padding:6,flex:1,alignItems:"center"}}>
        <SliderBox
          images={images}
          ImageComponentStyle={styles.image}
           sliderBoxHeight={170}
          parentWidth={380}
          dotColor="#7000FF"
          inactiveDotColor="gray"
          autoplay={true}
          circleLoop={true}
          dotStyle={{ borderRadius: 10, height:10, width:10  }}
        />
        </View>
        
        <TimeRangeSelector/>
       
        
        <View style={{  flexDirection: "row", }}>

          <HomeTab
            titel={"Stock "}
            price={"220"}
            imagesource={require('../assets/Image/stock.jpeg')}
            onPress={()=>navigation.navigate("Stock")}

          />

          <HomeTab
            titel={"Purchase "}
            price={"220"}
            imagesource={require('../assets/Image/purchase.jpeg')}
            onPress={()=>navigation.navigate("Purchase")}
          />

        </View>

        <View style={{  flexDirection: "row" }}>

          <HomeTab
            titel={"Sale "}
            price={"220 "}
            imagesource={require('../assets/Image/sale.jpeg')}
            onPress={()=>navigation.navigate("Sale")}
          />

          <HomeTab
            titel={"Expiry"}
            price={"22"}
            imagesource={require('../assets/Image/delete.jpeg')}
            onPress={()=>navigation.navigate("Stock")}
          />

        </View>
       
        <Askque/>

        
        <View style={{  flexDirection: "row", alignItems:"center" }}>

          <HomeTab
            titel={"AddStock "}
            onPress={() => { }}
          />

          <HomeTab
            titel={"Purchase "}
            onPress={() => { console.warn("hello"); }}
          />

        </View>

        <View style={{  flexDirection: "row" }}>

          <HomeTab
            titel={"Sale "}
            onPress={() => { console.warn("hello"); }}
          />

          <HomeTab
            titel={"Expiry"}
            onPress={() => { console.warn("hello"); }}
          />

        </View>
     





      </ScrollView>
    </SafeAreaView>
  );

}
const styles = StyleSheet.create({
  container: {
   backgroundColor:"white"
 

  },
  image: {
    resizeMode: 'cover', // Optional: adjust the image's resizeMode based on your requirements
    borderRadius: 20, // Optional: add borderRadius for rounded corners
    marginTop:10
  },

  button: {
    backgroundColor: 'green',
    width: 380,
    height: 50,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",

  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Raleway-Bold'
  },
  textStyle:{
    fontFamily:"Raleway-Bold"
  }
 
});

