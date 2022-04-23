import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Splash,
    Chats,
    MyProfile,
    ChatItem,
    Contact
} from '../screens';

const Stack = createNativeStackNavigator();

export default function Router() {
    return(
        <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false}}>
            <Stack.Screen
                name='Splash'
                component={Splash}
            />
            <Stack.Screen
                name='Chats'
                component={Chats}
            />
            <Stack.Screen
                name='MyProfile'
                component={MyProfile}
            />
            <Stack.Screen
                name='ChatItem'
                component={ChatItem}
            />
            <Stack.Screen
                name='Contact'
                component={Contact}
            />
        </Stack.Navigator>
    );
}
