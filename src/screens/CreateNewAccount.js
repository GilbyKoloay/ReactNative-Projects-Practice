import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

import { ArrowBack } from '../assets/icons';
import { Logo } from '../assets/images';
import { Gap, TextInput, Button } from '../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backButton: {
        marginTop: 29,
        marginLeft: 33,
    },
    logo: {
        height: 70,
        width: 110,
        marginTop: 20,
        marginRight: 24,
    },
});

export default ({navigation}) => {
    const BackButton_onPress = () => {
        navigation.goBack();
    };

    const Continue_onPress = () => {
        navigation.reset({routes: [{name: 'Home'}]});
    }

    return(
        <View style={styles.screen}>
            <View style={styles.top}>
                <TouchableOpacity style={styles.backButton} activeOpacity={0.5} onPress={BackButton_onPress}>
                    <ArrowBack />
                </TouchableOpacity>
                <Image style={styles.logo} source={Logo} />
            </View>
            <Gap h={35} />
            <TextInput title="Full Name" placeholder="Type your full name" />
            <Gap h={25} />
            <TextInput title="Email Address" placeholder="Type your email address" keyboardType={'email-address'} />
            <Gap h={25} />
            <TextInput title="Password" placeholder="Type your password" secureText={true} />
            <Gap h={50} />
            <Button text="Continue" type="Primary" onPress={Continue_onPress} />
        </View>
    );
};
