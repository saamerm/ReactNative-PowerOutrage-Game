import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameScreen from './src/screens/GameScreen';

const Stack = createNativeStackNavigator();

const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#272727',
    text: '#272727',
    border: '#272727',
  }
}
const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <NavigationContainer theme={appTheme}>
      {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
      <Stack.Navigator > 
          <Stack.Screen name="Home" component={HomeScreen} options={{headerTransparent: true, headerBackTitleVisible: false, headerShadowVisible: false}} />
          <Stack.Screen name="Game" component={GameScreen} options={{headerTransparent: true,headerBackTitleVisible: false, headerShadowVisible: false}} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    fontFamily: 'Roboto'
  },
});

export default App;
