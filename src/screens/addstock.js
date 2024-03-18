// src/Home/index.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { PrimaryButton } from '../components/Button';
import { useAuth } from '../screens/authentication/context';


const Home = ({ navigation }) => {
 

  return (
    <View>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollViewContainer: {
    paddingVertical: 20, // Adjust as needed
  },
});

export default Home;
