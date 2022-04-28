import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    Sound_Vibration as index,
} from '../screens';

const Stack = createNativeStackNavigator();

export default function Sound_Vibration() {
    return(
        <Stack.Navigator initialRouteName="index">
            <Stack.Screen
                name="index"
                component={index}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}
