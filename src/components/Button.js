import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: (type) => ({
        width: 201,
        height: 40,
        paddingTop: 11,
        paddingBottom: 3,
        backgroundColor: (type === 'Primary') ? '#FFC7C7' : '#F6F6F6',
        borderRadius: 15,
    }),
    text: {
        fontFamily: 'Inter-Regular',
        color: '#000000',
        fontSize: 15,
        textAlign: 'center',
    }
});

export default function Button({type="Primary", title="<Button_Title>", onPress=null}) {
    return(
        <TouchableOpacity style={styles.container(type)} activeOpacity={0.5} onPress={onPress} >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}
