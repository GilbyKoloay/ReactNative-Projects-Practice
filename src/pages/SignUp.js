import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import { EllipseStripe as ProfileCover } from '../assets/icons';
import { Header, Gap, TextInput, Button } from '../components';

const s = StyleSheet.create({
    screen: {
        flex: 1,
    },
    content: {
        marginTop: 25,
        paddingTop: 25,
        paddingHorizontal: 25,
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    photoCover: {
        height: 110,
        width: 110,
        padding: 10,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#8D92A3',
        borderStyle: 'dashed',
        borderRadius: 110/2,
    },
    photo: {
        height: 90,
        width: 90,
        padding: 22.5,
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        borderRadius: 90/2,
    },
    photoText: {
        fontFamily: 'Poppins-Light',
        color: '#8D92A3',
        fontSize: 15,
        textAlign: 'center',
    },
});

export default function SignUp({navigation}) {
    const [data, setData] = useState({
        name: null,
        email: null,
        password: null,
    });

    return(
        <View style={s.screen}>
            <Header back={true} onPress={() => navigation.goBack()} title="Sign Up" />
            <View style={s.content}>
                <View style={s.photoCover}>
                    <TouchableOpacity style={s.photo} activeOpacity={0.5} onPress={null}>
                        <Text style={s.photoText}>Add Photo</Text>
                    </TouchableOpacity>
                </View>
                <Gap h={15} />
                <TextInput title="Full Name" placeholder="Type your full name" />
                <Gap h={15} />
                <TextInput title="Email Address" placeholder="Type your email address" />
                <Gap h={15} />
                <TextInput title="Passwrod" placeholder="Type your password" secure={true} />
                <Gap h={25} />
                <Button text="Continue" onPress={() => navigation.reset({routes: [{name: 'Home'}]})} />
            </View>
        </View>
    );
}
