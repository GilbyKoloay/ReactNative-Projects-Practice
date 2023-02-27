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

export default function SignUp({navigation}) {
    const signUpPress = () => {
        navigation.reset({routes: [{name: 'Home'}]})
        // navigation.replace('Home');
    }

    return(
        <View style={styles.screen}>
            <Icon />
            <Gap h={71} />
            <TextInput title="Username" placeholder="input your username" />
            <Gap h={27} />
            <TextInput title="Email" placeholder="input your email" placeholderTextColor={'red'} />
            <Gap h={18} />
            <TextInput title="Password" placeholder="input your password" placeholderTextColor={'red'} secure={true} />
            <Gap h={47} />
            <Button type="Primary" title="SIGN UP" onPress={signUpPress} />
        </View>
    );
}
