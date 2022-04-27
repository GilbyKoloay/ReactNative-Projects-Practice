import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    Display_Brightness as index,
    NightShield as NS,
} from '../screens';

const Stack = createNativeStackNavigator();

export default function Display_Brightness() {
    return(
        <Stack.Navigator initialRouteName="index">
            <Stack.Screen
                name="index"
                component={index}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Night Shield"
                component={NS}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}
