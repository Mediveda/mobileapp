// Import necessary components and libraries
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Create a BottomTab navigator
const Tab = createBottomTabNavigator();

// Screen components
const Screen1 = () => (
  <View>
    <Text>Screen 1</Text>
  </View>
);

const Screen2 = () => (
  <View>
    <Text>Screen 2</Text>
  </View>
);

const Screen3 = () => (
  <View>
    <Text>Screen 3</Text>
  </View>
);

const Screen4 = () => (
  <View>
    <Text>Screen 4</Text>
  </View>
);

const Screen5 = () => (
  <View>
    <Text>Screen 5</Text>
  </View>
);

// Navigation bar component
const Bottomtab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="1" component={Screen1} />
        <Tab.Screen name="2" component={Screen2} />
        <Tab.Screen name="Home" component={Screen3} />
        <Tab.Screen name="4" component={Screen4} />
        <Tab.Screen name="5" component={Screen5} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Bottomtab;
