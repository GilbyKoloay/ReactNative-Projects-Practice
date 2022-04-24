import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';

import { SplashBg as Bg } from '../assets/images';

const s = StyleSheet.create({
    screen: {
        paddingBottom: 50,
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    bg: {
        width: undefined,
        resizeMode: 'contain',
        flex: 1,
        flexWrap: 'wrap',
    }
});

export default function Splash({navigation}) {
    useEffect(() => {
        setTimeout(() => navigation.replace('Welcome'), 250);
    }, []);

    return(
        <View style={s.screen}>
            <Image source={Bg} style={s.bg} />
        </View>
    );
}
