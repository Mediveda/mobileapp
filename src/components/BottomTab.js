import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon component
import Addstock from '../screens/addstock';
import Sale from '../screens/sale';
import Home from '../screens/home';
import Purchase from '../screens/purchaseorder';
import More from '../screens/more';
import { StyleSheet, View, Text, Image, TouchableOpacity, Linking ,SafeAreaView} from "react-native";
import { getHeaderTitle } from '@react-navigation/elements';
import CustomHeader from './Headers';
// ..

header: ({ navigation, route, options }) => {
  const title = getHeaderTitle(options, route.name);

  return <MyHeader title={title} style={options.headerStyle} />;
};






const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();




const HomeStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const PurchaseStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="purchase" component={Purchase} />
    </Stack.Navigator>
  );
};

const AddstockStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Addstock" component={Addstock} />
    </Stack.Navigator>
  );
};

const MoreStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Sale" component={More} />
    </Stack.Navigator>
  );
};

const SaleStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="More" component={Sale} />
    </Stack.Navigator>
  );
};

const CustomAddButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.addButton}>
    <Icon name="add-circle" size={32} color="gray"/>
  </TouchableOpacity>
);

const BottomTab = ({ navigation }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        initialRouteName: "Home",
        activeTintColor: '#7000FF',
      }}
      screenOptions={({ route }) => ({
        header: () => <CustomHeader navigation={navigation} />,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // Set icon based on the route name and whether it's focused
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Purchase') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Stock') {
            iconName = 'add-circle-outline';
          } else if (route.name === 'Sale') {
            iconName = focused ? 'analytics' : 'analytics-outline';
          } else if (route.name === 'More') {
            iconName = focused ? 'ellipsis-horizontal' : 'ellipsis-horizontal-outline';
          }

          // Return the icon component
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      >
      <Tab.Screen 
        name="Home" 
        component={HomeStack} 
        // options={{
        //   tabBarIcon: ({ color, size }) => (
        //     <Icon name="home-outline" color={color} size={size} />
        //   ),
        // }}
      />
      <Tab.Screen 
        name="Purchase" 
        component={PurchaseStack} 
        // options={{
        //   tabBarIcon: ({ color, size }) => (
        //     <Icon name="cart-outline" color={color} size={size} />
        //   ),
        // }}
      />
      <Tab.Screen 
        name="Stock" 
        component={AddstockStack} 
        options={{
          tabBarButton: (props) => <CustomAddButton {...props} />,
        }}
      />
      <Tab.Screen 
        name="Sale" 
        component={SaleStack} 
        // options={{
        //   tabBarIcon: ({ color, size }) => (
        //     <Icon name="analytics-outline" color={color} size={size} />
        //   ),
        // }}
      />
      <Tab.Screen 
        name="More" 
        component={MoreStack} 
        // options={{
        //   tabBarIcon: ({ color, size }) => (
        //     // <Icon name="ellipsis-horizontal-outline" color={color} size={size} />
        //   ),
        // }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: '#f0f0f0', // Light gray background color

    // Gradient background
    // Uncomment the background property below and comment backgroundColor to use gradient
     background: 'linear-gradient(145deg, #d8d8d8, #ffffff)',
  },
});
