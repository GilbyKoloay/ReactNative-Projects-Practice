import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Settings } from '../screens';
import DualSIM_Cellular from './DualSIM_Cellular';
import OtherWirelessConnections from './OtherWirelessConnections';
import Notification_StatusBar from './Notification_StatusBar';
import Display_Brightness from './Display_Brightness';
import Sound_Vibration from './Sound_Vibration';
import Quiet_Time from './Quiet_Time';
import Security from './Security';
import Language_Region from './Language_Region';

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
            <Stack.Screen
                name="Notification & Status Bar"
                component={Notification_StatusBar}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Display & Brightness"
                component={Display_Brightness}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Sound & Vibration"
                component={Sound_Vibration}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Quiet Time"
                component={Quiet_Time}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Security"
                component={Security}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Language Region"
                component={Language_Region}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}
