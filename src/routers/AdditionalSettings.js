import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    AdditionalSettings as index,
    UserGuide as UG,
    ProductSecurity as PS,
    After_SalesService as ASS,
    Security_Privacy as S_P,
    LocationInformation as LI,
    ScreenPinning as SP,
} from '../screens';

const Stack = createNativeStackNavigator();

export default function Battery() {
    return(
        <Stack.Navigator initialRouteName="index">
            <Stack.Screen
                name="index"
                component={index}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="User Guide"
                component={UG}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Product Security"
                component={PS}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="After-Sales Service"
                component={ASS}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Security & Privacy"
                component={S_P}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Location Information"
                component={LI}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Screen Pinning"
                component={SP}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}
