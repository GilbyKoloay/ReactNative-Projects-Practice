import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const s = StyleSheet.create({
    screen: {
        flex: 1,
    },
});

export default function SplashScreen({navigation}) {
    return(
        <View style={s.screen}>
            <Text>SplashScreen</Text>
            <Button title="SignIn" onPress={navigation.push('SignIn')} />
        </View>
    );
}
