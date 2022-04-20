import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const s = StyleSheet.create({
    screen: {
        flex: 1,
    },
});

export default function SignIn() {
    return(
        <View style={s.screen}>
            <Text>SignIn</Text>
        </View>
    );
}
