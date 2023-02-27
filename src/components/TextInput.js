import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const styles = StyleSheet.create({
    component: {
        marginHorizontal: 24,
    },
    title: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#020202',
    },
    textInput: {
        marginTop: 6,
        padding: 10,
        borderWidth: 1,
        borderColor: '#020202',
        borderRadius: 8,

        color: '#8D92A3',
    }
});

export default ({title="<TextInput - Title>", placeholder="<TextInput - TextInput_Placeholder", keyboardType=null, secureText=false}) => {
    return(
        <View style={styles.component}>
            <Text style={styles.title}>{title}</Text>
            <TextInput style={styles.textInput} placeholder={placeholder} keyboardType={keyboardType} secureTextEntry={secureText} fontFamily="Poppins-Regular" fontSize={14} color="black" />
        </View>
    );
};
