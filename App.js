// App.js
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './src/screens/authentication/context';
import AppIntroProvider from './src/screens/authentication/introscreen';
import Login from './src/screens/authentication/login';
import Home from './src/screens/home';
import SplashScreen from './src/screens/authentication/splashscreen';
import otp from './src/screens/authentication/otpscreen';
import Bottomtab from './src/components/appbar';



const Stack = createStackNavigator();

const App = () => {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setSplashVisible(false);
    }, 2000); // Set the duration for how long the splash screen should be visible (in milliseconds)

    return () => clearTimeout(splashTimeout);
  }, []);

  return (
    <AuthProvider>
      <NavigationContainer>
        <Bottomtab/>
        {isSplashVisible ? (
          <SplashScreen />
        ) : (
          <Stack.Navigator initialRouteName="AppIntroProvider" headerMode="false">
            <Stack.Screen name="AppIntroProvider" component={AppIntroProvider} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="otp" component={otp} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
