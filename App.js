import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './src/screens/authentication/context';
import AppIntroProvider from './src/screens/authentication/introscreen';
import Login from './src/screens/authentication/login';
import SplashScreen from './src/screens/authentication/splashscreen';
import OTP from './src/screens/authentication/otpscreen';
import BottomTab from './src/components/BottomTab';



const Stack = createStackNavigator();

const App = () => {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setSplashVisible(false);
    }, 2000);

    return () => clearTimeout(splashTimeout);
  }, []);

  return (
    <AuthProvider>
      <NavigationContainer>
        {isSplashVisible ? (
          <SplashScreen />
        ) : (
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="AppIntroProvider" component={AppIntroProvider} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="otp" component={OTP} />
            <Stack.Screen name="BottomTab" component={BottomTab} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
