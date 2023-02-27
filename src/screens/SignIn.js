import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import { Logo } from '../assets/images';
import { Gap, TextInput, Button } from '../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    logo: {
        height: 70,
        width: 110,
        marginTop: 20,
        marginRight: 24,
        alignSelf: 'flex-end',
    },
});

export default ({navigation}) => {
    const SignIn_onPress = () => {
        navigation.reset({routes: [{name: 'Home'}]});
    }

    const CreateNewAccount_onPress = () => {
        navigation.push('CreateNewAccount');
    }

    return(
        <View style={styles.screen}>
            <Image source={Logo} style={styles.logo} />
            <Gap h={119} />
            <TextInput title="Email Address" placeholder="Type your email address" keyboardType={'email-address'} />
            <Gap h={41} />
            <TextInput title="Password" placeholder="Type your password" secureText={true} />
            <Gap h={41} />
            <Button type="Primary" text="Sign In" onPress={SignIn_onPress} />
            <Gap h={16} />
            <Button type="Secondary" text="Create New Account" onPress={CreateNewAccount_onPress} />
        </View>
    );
};
