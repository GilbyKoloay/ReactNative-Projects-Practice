/*
    figma
    https://www.figma.com/file/rWJq9ImH5S9ka3eUrG2Kcl/Batu-Angus?node-id=0%3A1
*/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    SplashScreen,
    SignIn,
    CreateNewAccount,
    Home,
    Choice,
    Ticket,
    Profil,
    Gunung,
    Pantai,
    Pesan,
    Pemesanan,
    MetodePembayaran,
    SplashScreenThankYou,
} from './screens';

const Stack = createNativeStackNavigator();

export default () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown: false}}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="CreateNewAccount" component={CreateNewAccount} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Choice" component={Choice} />
                <Stack.Screen name="Ticket" component={Ticket} />
                <Stack.Screen name="Profil" component={Profil} />
                <Stack.Screen name="Gunung" component={Gunung} />
                <Stack.Screen name="Pantai" component={Pantai} />
                <Stack.Screen name="Pesan" component={Pesan} />
                <Stack.Screen name="Pemesanan" component={Pemesanan} />
                <Stack.Screen name="MetodePembayaran" component={MetodePembayaran} />
                <Stack.Screen name="SplashScreenThankYou" component={SplashScreenThankYou} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
