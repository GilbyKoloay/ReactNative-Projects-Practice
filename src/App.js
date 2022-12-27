import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  GetStarted,
  Movie,
  MovieList,
  MovieSeats,
  MovieTicket,
  SignIn,
  SignUp,
  Welcome,
} from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='GetStarted' screenOptions={{headerShown: false}}> */}
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
        <Stack.Screen name='GetStarted' component={GetStarted} />
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Movie' component={Movie} />
        <Stack.Screen name='MovieList' component={MovieList} />
        <Stack.Screen name='MovieSeats' component={MovieSeats} />
        <Stack.Screen name='MovieTicket' component={MovieTicket} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignUp' component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
