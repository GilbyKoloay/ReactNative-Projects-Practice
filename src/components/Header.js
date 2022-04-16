import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FBFBFB',
        padding: 10,
        alignItems: 'center',
        borderBottomColor: '#D1D1D1',
        borderBottomWidth: 0.25,
    },
    text: {
        fontFamily: 'Roboto',
        color: '#2F2F2F',
        fontSize: 15,
        fontWeight: 'bold',
    }
});

export default function Header({title="<Header_Title>"}) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}
