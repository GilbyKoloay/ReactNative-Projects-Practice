import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Settings } from '../screens';
import DualSIM_Cellular from './DualSIM_Cellular';

const Stack = createNativeStackNavigator();

export default function Router() {
    return(
        <Stack.Navigator initialRouteName="Settings">
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Dual SIM & Cellular"
                component={DualSIM_Cellular}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}
