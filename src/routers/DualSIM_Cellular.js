import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DualSIM_Cellular as index, SIMInfo_Settings as SIS, Carrier as S } from '../screens';

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
                name="SIM Info & Settings"
                component={SIS}
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
