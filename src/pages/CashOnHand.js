import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const s = StyleSheet.create({
    screen: {
        flex: 1,
    },
});

export default function CashOnHand() {
    return(
        <View style={s.screen}>
            <Text>CashOnHand</Text>
        </View>
    );
}
