import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text } from 'react-native';
import { Settings, DualSIM_Cellular as DSC, SIMInfo_Settings as SIS } from './pages';

const styles = StyleSheet.create({

});

const Stack = createNativeStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Settings"
                    component={Settings}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="Dual SIM & Cellular"
                    component={DSC}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="SIM Info & Settings"
                    component={SIS}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
