import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Settings } from '../screens';
import DualSIM_Cellular from './DualSIM_Cellular';
import OtherWirelessConnections from './OtherWirelessConnections';

const Stack = createNativeStackNavigator();

export default function Router() {
    return(
        <Stack.Navigator initialRouteName="index">
            <Stack.Screen
                name="index"
                component={Settings}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Dual SIM & Cellular"
                component={DualSIM_Cellular}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Other Wireless Connections"
                component={OtherWirelessConnections}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}
