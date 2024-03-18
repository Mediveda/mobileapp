import React from 'react';
import OTP from '../../components/OTPInput';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { useAuth } from './context';
import Icon from 'react-native-vector-icons/Ionicons';

const Otp = () => {
  const { login, isAuthenticated } = useAuth();
  const navigation = useNavigation(); // Get navigation object from the hook

  const handleSignIn = () => {
    // Perform authentication logic here, such as verifying the OTP
    login(); // Call the login function from your AuthContext to set authentication status to true
    // navigation.navigate('Home'); // Navigate to the Home screen after successful authentication
    console.log(isAuthenticated);
    navigation.navigate("BottomTab")
  };

  return (
    <View style={{ alignContent: 'center' }}>
      <View style={{ alignItems: 'center', borderBottomWidth: 1, height: 50, justifyContent: 'center' }}>
        <Text style={{ fontFamily: 'Raleway-Bold', fontSize: 16, color: 'black' }}>Enter OTP</Text>
      </View>

      <View>
        <Text style={{ fontFamily: 'Raleway-Bold', color: 'black', fontSize: 18, marginTop: 10, marginLeft: 20 }}>
          Enter the 4 digit OTP sent on
        </Text>
      </View>

     

      <View style={{ alignContent: 'center' }}>
        <OTP />
      </View>

      <View style={{ marginTop: 100, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 350,
            backgroundColor: 'green',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}
          onPress={handleSignIn}>
          <Text style={{ color: 'white', fontFamily: 'Raleway-Bold', fontSize: 18 }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Otp;
