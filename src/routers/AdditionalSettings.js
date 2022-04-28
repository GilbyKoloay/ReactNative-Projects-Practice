import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    AdditionalSettings as index,
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
        </Stack.Navigator>
    );
}
