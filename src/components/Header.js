import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { back as Back } from '../assets/icons';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FBFBFB',
        padding: 10,
        flexDirection: 'row',
        borderBottomColor: '#D1D1D1',
        borderBottomWidth: 0.25,
    },
    text: {
        fontFamily: 'Roboto',
        color: '#2F2F2F',
        fontSize: 15,
        fontWeight: 'bold',
    },
    back: {
        flexDirection: 'row',
        position: 'absolute',
        marginLeft: 10,
        marginTop: 10,
    },
    backText: {
        marginLeft: 5,
        fontFamily: 'Roboto',
        color: '#2AC795',
        fontSize: 15,
    }
});

export default function Header({title="<Header_Title>", back=null}) {
    return(
        <View style={styles.container}>
            {(back !== null) && <TouchableOpacity style={styles.back} activeOpacity={0.5} onPress={back[1]}>
                <Back />
                <Text style={styles.backText}>{back[0]}</Text>
            </TouchableOpacity>}
            <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </View>
    );
}
