import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainTab from './src/navigations/MainTab';
import {LogBox} from 'react-native';
import MyStatusBar from './src/components/MyStatusBar';
import CurrentSongNav from './src/navigations/CurrentSongNav';

const Stack = createStackNavigator(); // Stack contains Screen & Navigator properties

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <>
      <MyStatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MainTab"
            component={MainTab}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Current Song Nav"
            component={CurrentSongNav}
            options={{
              presentation: 'modal',
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
