import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    AdditionalSettings as index,
    UserGuide as UG,
    ProductSecurity as PS,
    After_SalesService as ASS,
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
        </Stack.Navigator>
    );
}
