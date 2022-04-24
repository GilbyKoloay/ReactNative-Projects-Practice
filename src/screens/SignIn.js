import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

import { DotsDark as Dots } from '../assets/icons';
import { Gap } from '../components';

const s = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#121B22',
    },
    top: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        fontFamily: 'Helvetica',
        color: '#F1F8FE',
        textAlign: 'center',
        fontSize: 20,
    },
    text: (color) => ({
        textAlign: 'center',
        fontFamily: 'Helvetica',
        color: color,
        fontSize: 15,
    }),
    inputWrap: {
        marginHorizontal: 35,
    },
    inputTop: {
        fontFamily: 'Helvetica',
        color: '#E9F0F8',
        textAlign: 'center',
        borderBottomWidth: 2.5,
        borderBottomColor: '#498279',
    },
    inputBottom: {
        flexDirection: 'row',
    },
    bottomLeft: {
        paddingRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 2.5,
        borderBottomColor: '#498279',
    },
    bottomRight: {
        marginLeft: 10,
        flex: 1,
        fontFamily: 'Helvetica',
        color: '#E9F0F8',
        borderBottomWidth: 2.5,
        borderBottomColor: '#498279',
    },
    button: {
        marginBottom: 20,
        padding: 10,
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

export default function SignIn({navigation}) {
    const countries = [
        {name: "Indonesia", code: '62'},
    ];

    const [country, setCountry] = useState(countries[0]);
    const [phoneNumber, setPhoneNumber] = useState(null);

    return(
        <View style={s.screen}>
            <View>
                <View style={s.top}>
                    <Text style={s.title}>Input Your phone number</Text>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Dots />
                    </TouchableOpacity>
                </View>
                <Gap h={10} />
                <View>
                    <Text style={s.text('#DEE5EB')}>WhatsApp needs to verify Your phone number.</Text>
                    <Text style={s.text('#7AA8BF')}>What is my phone number?</Text>
                </View>
                <Gap h={10} />
                <View style={s.inputWrap}>
                    <TextInput style={s.inputTop} value={country.name} />
                    <View style={s.inputBottom}>
                        <View style={s.bottomLeft}>
                            <Text style={[s.text('#8A979D'), {marginRight: 15}]}>+</Text>
                            <Text style={[s.text('#DEE5EB')]}>{country.code}</Text>
                        </View>
                        <TextInput style={s.bottomRight} placeholder="phone number" placeholderTextColor='#96A0A9' keyboardType='numeric' value={phoneNumber} onChangeText={(val) => setPhoneNumber(val)} />
                    </View>
                </View>
                <Gap h={15} />
                <Text style={s.text('#8A979D')}>Operator fees may apply</Text>
            </View>
            <TouchableOpacity style={s.button} activeOpacity={0.5} onPress={() => navigation.push('Chats', `${country.code}${phoneNumber}`)}>
                <Text style={s.buttonText}>CONTINUE</Text>
            </TouchableOpacity>
        </View>
    );
}
