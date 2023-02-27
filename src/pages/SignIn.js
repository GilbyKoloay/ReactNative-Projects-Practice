import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ProfileRound as Icon } from '../assets/icons';
import { Gap, TextInput, Button } from '../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 36,
        paddingRight: 35,
    },
});

export default function SignIn({navigation}) {
    const signInPress = () =>{
        navigation.replace('Home');
    }

    const createNewAccountPress = () => {
        navigation.push('SignUp');
    }

    return(
        <View style={styles.screen}>
            <Icon />
            <Gap h={48} />
            <TextInput title="Email" placeholder="input your email" />
            <Gap h={32} />
            <TextInput title="Password" placeholder="input your password" placeholderTextColor={'red'} secure={true} />
            <Gap h={48} />
            <Button type="Primary" title="SIGN IN" onPress={signInPress} />
            <Gap h={32} />
            <Button type="Secondary" title="CREATE NEW ACCOUNT" onPress={createNewAccountPress} />
        </View>
    );
}
