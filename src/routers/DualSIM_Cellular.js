import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    DualSIM_Cellular as index,
    SIM1 as S1,
    Carrier as S
} from '../screens';

const Stack = createNativeStackNavigator();

export default function DualSIM_Cellular() {
    return(
        <Stack.Navigator initialRouteName="index">
            <Stack.Screen
                name="index"
                component={index}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="SIM1"
                component={S1}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Carrier"
                component={S}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}
