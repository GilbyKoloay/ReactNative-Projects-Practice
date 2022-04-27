import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    OtherWirelessConnections as index,
    PersonalHotspot as PH,
} from '../screens';

const Stack = createNativeStackNavigator();

export default function OtherWirelessConnections() {
    return(
        <Stack.Navigator initialRouteName="index">
            <Stack.Screen
                name="index"
                component={index}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Personal Hotspot"
                component={PH}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}
