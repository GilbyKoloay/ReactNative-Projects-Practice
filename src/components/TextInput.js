import React from 'react';
import { StyleSheet, View, Text, TextInput as RN_TextInput } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
    },
    text: (title) => ({
        fontFamily: 'Inter-Regular',
        color: '#000000',
        fontSize: 15,
    }),
    textInput: {
        marginTop: 4,
        paddingTop: 15,
        paddingBottom: 16,
        paddingHorizontal: 19,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 10,
    }
});

export default function TextInput({title="<Input_Title>", placeholder="<Input_Placeholder>", secure=false}) {
    return(
        <View style={styles.container}>
            <Text style={styles.text(true)}>{title}</Text>
            <RN_TextInput
                style={styles.textInput}
                placeholder={placeholder}
                fontFamily={'Inter-Regular'}
                placeholderTextColor={'#00000080'}
                fontSize={15}
                secureTextEntry={secure}
            />
        </View>
    );
}
