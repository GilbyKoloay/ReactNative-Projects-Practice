import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const s = StyleSheet.create({
    screen: {
        flex: 1,
    },
});

export default function Home() {
    return(
        <View style={s.screen}>
            <Text>Home</Text>
        </View>
    );
}
