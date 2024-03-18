import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Linking ,SafeAreaView} from "react-native";
import { SliderBox } from "react-native-image-slider-box";

const App = ({navigation}) => {
    const [images, setImages] = useState([
      require('../../assets/Image/i1.png'),
      require('../../assets/Image/i2.png'),
      require('../../assets/Image/i3.png'),
    ]);
  
      const termsAndConditionsURL = 'https://www.medivedas.com/blank-3';

      const handleTermsPress = async () => {
        const supported = await Linking.canOpenURL(termsAndConditionsURL);
    
        if (supported) {
          await Linking.openURL(termsAndConditionsURL);
        } else {
          console.error(`Don't know how to open this URL: ${termsAndConditionsURL}`);
        }
      };


    return (
      

    
        <SafeAreaView style={styles.container}>

            <View style={{ alignItems: "center" }}>
                {/* <Image
                    source={require('../../assets/Image/logo.png')} // Replace with the correct path
                    style={styles.image}
                /> */}
                <Text style={{fontFamily:"Raleway-ExtraBold",fontSize:50,color:"#56de26",marginTop:20,marginBottom:20}}>
                  MEDI
                  <Text style={{fontFamily:"Raleway-ExtraBold",fontSize:50,color:"gray"}}>
                  VEDA
                </Text>
                </Text>
            </View>

            <SliderBox
                images={images}
                ImageComponentStyle={styles.image}
                sliderBoxHeight={500}
                dotColor="green"
                inactiveDotColor="gray"
                autoplay= {true}
                circleLoop={true
                }
                dotStyle={{borderRadius:10,height:10,width:30,}}
            />
            
            <View style={{justifyContent:"center",alignItems:"center",marginTop:30,}}>
                <TouchableOpacity style={styles.button} onPress={() => {
          navigation.navigate("Login")
        }}>
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>

            </View>

            <View style={{flexDirection:"row",justifyContent:"center",marginTop:20,}}>
               <Text style={{fontFamily:"Raleway-Bold"}}>Please read all </Text> 
               <TouchableOpacity onPress={handleTermsPress}>
               <Text style={{color:"green",fontFamily:"Raleway-Bold"}}> terms & condition</Text>
               </TouchableOpacity>
               
            </View>
        </SafeAreaView>
      

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white"
        // justifyContent: "center",
        // Additional styles for the container if needed
    },
    image: {
        // width: 450,
        // height: 500,
        resizeMode: 'cover', // Optional: adjust the image's resizeMode based on your requirements
        borderRadius: 10, // Optional: add borderRadius for rounded corners
    },

    button: {
        backgroundColor: 'green',
        width:380,
        height:50,
        padding: 10,
        borderRadius: 10,
        alignItems:"center",
        
      },

      buttonText: {
        color: 'white',
        fontSize: 16,  
        fontFamily:'Raleway-Bold'
      },
});

export default App;
