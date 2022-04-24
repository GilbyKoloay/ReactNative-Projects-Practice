import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import { WelcomeImage } from '../assets/images';

const s = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#121B22',
    },
    title: {
        marginTop: 25,
        fontFamily: 'Helvetica',
        color: '#F0F3F8',
        fontSize: 20,
    },
    image: {
        height: 250,
        width: 250,
    },
    bottom: {
        marginHorizontal: 10,
        overFlow: 'hidden',
    },
    text: (color) => ({
        textAlign: 'center',
        fontFamily: 'Helvetica',
        color: color,
        fontSize: 12.5,
    }),
    button: {
        marginVertical: 25,
        marginHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#00A884',
        borderRadius: 5,
        shadowColor: '#0C1D24',
        elevation: 2.5,
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: 'Helvetica',
        color: '#002F22',
        fontSize: 15,
    },
});

export default function Welcome({navigation}) {
    return(
        <View style={s.screen}>
            <Text style={s.title}>Welcome to WhatsApp</Text>
            <Image source={WelcomeImage} style={s.image} />
            <View style={s.bottom}>
                <Text style={s.text('#858E95')}>Tap "Agree and continue" to accept the {<Text style={s.text('#78B8D4')}>WhatsApp Terms of Service and Privacy Policy</Text>}.</Text>
                <TouchableOpacity style={s.button} activeOpacity={0.5} onPress={() => navigation.replace('SignIn')}>
                    <Text style={s.buttonText}>AGREE AND CONTINUE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
