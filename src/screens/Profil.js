import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

import { ProfileImage } from '../assets/images';

import { Gap } from '../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
    },
    image: {
        marginTop: 57,
        height: 136,
        width: 137,
        borderRadius: 136.5/2,
        alignSelf: 'center',
    },
    component: {
        marginLeft: 33,
        marginRight: 15,
    },
    title: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        color: 'black',
    },
    box: {
        backgroundColor: '#5CE1E6',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 8,
    },
    text: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#020202',
    },
    buttonWrap: {
        flex: 1,
        marginBottom: 64,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#5CE1E6',
        width: 232,
        justifyContent: 'center',
        paddingVertical: 13.5,
        alignItems: 'center',
        borderRadius: 8,
    }
});

export default ({navigation}) => {
    const Logout_onPress = () => {
        navigation.reset({routes: [{name: 'SignIn'}]});
    }

    const component = (title, text) => {
        return(
            <View style={styles.component}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.box}>
                    <Text style={styles.text}>{text}</Text>
                </View>
            </View>
        );
    }

    return(
        <View style={styles.screen}>
            <Image style={styles.image} source={ProfileImage} />
            <Gap h={32} />
            {component(`Full Name`, `Aprayiel Mandak`)}
            <Gap h={13} />
            {component(`Email Address`, `s21910554@student.unklab.ac.id`)}
            <View style={styles.buttonWrap}>
                <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={Logout_onPress}>
                    <Text style={styles.text}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
