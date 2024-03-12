import React, { useState } from 'react';
import { View, Text,TextInput, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useAuth } from '../../screens/authentication/context';
import {PrimaryButton } from '../../components/Button';



const Login = ({ navigation }) => {
  const { login, isAuthenticated } = useAuth();
  const [isSelected, setSelection] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic
      login();

    // If authenticated, navigate to Home
    if (isAuthenticated) {
      navigation.navigate('otp');
    }
  };

  return (
    <View style={{ paddingHorizontal: 10, flex: 1 }}>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 18, color: "black", fontWeight: "bold", marginTop: 10 }}>Log in or sign up</Text>
        <View style={{ height: 1, width: "100%", backgroundColor: "grey", marginTop: 10 }} />
      </View>

      <Text style={{ marginTop: 15, fontSize: 18,marginLeft:12 }}>
        Let's start with your Number
      </Text>

      <Text style={{ marginTop: 50, fontSize: 14, marginBottom: 20,marginLeft:12 }}>
        Enter Phone Number
      </Text>

      <TextInput
        style={{
          height: 60,
          alignItems:"center",
          width:360,
          borderColor: "grey",
          borderWidth: 1,
          borderRadius: 12,
          marginLeft:7
          
        }} 
       
      />
    
      

      <View style={{ flexDirection: "row", marginTop: 20,marginLeft:5 }}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={{ width: 30, height: 30, borderWidth: 1 }} // Adjusted style here
        />

        <Text style={{ marginTop: 5,  }}>
          Accept All Terms & Condition
        </Text>
      </View>

        <PrimaryButton
        onPress={handleLogin}
        textStyle={{color: "white",  fontFamily: 'Raleway-Bold'}}
        title="GET OTP"
        />

    </View>
  );
};

export default Login;
