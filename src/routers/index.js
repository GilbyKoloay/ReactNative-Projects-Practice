import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    SplashScreen, 
    SignIn, 
    SignUp, 
    Home, 
    Profile
} from '../pages';

const Stack = createNativeStackNavigator();

export default function Router() {
    return(
        <Stack.Navigator initialRouteName='SplashScreen'>
            <Stack.Screen 
                name='SplashScreen'
                component={SplashScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name='SignIn'
                component={SignIn}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name='SignUp'
                component={SignUp}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name='Home'
                component={Home}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name='Profile'
                component={Profile}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}
