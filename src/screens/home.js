// src/Home/index.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useAuth } from '../screens/authentication/context';
import Bottomtab from "../components/appbar";

const Home = ({ navigation }) => {
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* Your long list of Text components here */}
      </ScrollView>

      {/* Position the Bottomtab absolutely */}
      <Bottomtab />

      {/* You may consider placing the logout button outside the ScrollView */}
      {/* <PrimaryButton
        title="Logout"
        textStyle={{ color: "white", fontFamily: "Raleway-Bold", fontSize: 15 }}
        onPress={() => {
          // Perform logout logic
          logout();

          // Navigate back to Login
          navigation.navigate('Login');
        }}
      /> */}
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
