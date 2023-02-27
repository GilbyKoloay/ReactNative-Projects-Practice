import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';

import { Logo } from '../assets/images';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#5CE1E6',
        justifyContent: 'center',
    }
});

export default ({navigation}) => {
    useEffect(() => {
        setTimeout(() => navigation.replace('SignIn'), 250);
    });

    return(
        <View style={styles.screen}>
            <Image source={Logo} />
        </View>
    );
};
