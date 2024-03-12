// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Screen1 from '../screens/home';
import Screen2 from '../screens/purchaseorder';
import Screen3 from '../screens/addstock';
import Screen4 from '../screens/sale';
import Screen5 from '../screens/more';

const Stack = createStackNavigator();

const CustomNavBar = ({ navigation, state }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={() => navigateToScreen('Screen1')} style={styles.navItem}>
        <Text>1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Screen2')} style={styles.navItem}>
        <Text>2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Screen3')} style={styles.navItem}>
        <Text>3</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Screen4')} style={styles.navItem}>
        <Text>4</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Screen5')} style={styles.navItem}>
        <Text>5</Text>
      </TouchableOpacity>
    </View>
  );
};

const Appbar = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1" headerMode="none">
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Screen4" component={Screen4} />
        <Stack.Screen name="Screen5" component={Screen5} />
      </Stack.Navigator>
      <CustomNavBar />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  navBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
  },
  navItem: {
    paddingHorizontal: 20,
  },
});

export default Appbar;
