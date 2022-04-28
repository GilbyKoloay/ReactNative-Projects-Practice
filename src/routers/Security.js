import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    Security as index,
    Anti_Harassment_Fraud as AHF,
    BlockCalls as BC,
} from '../screens';

const Stack = createNativeStackNavigator();

export default function Security() {
    return(
        <Stack.Navigator initialRouteName="index">
            <Stack.Screen
                name="index"
                component={index}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Anti-harassment/Fraud"
                component={AHF}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Block Calls"
                component={BC}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}
