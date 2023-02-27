import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { HappyBouquet as Icon } from '../assets/icons';
import { H, A, P, Y, B, O, U, Q, E, T } from '../assets/letters';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#FFE2E2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textWrap: {
        marginTop: 9,
        flexDirection: 'row',
    },
    text: {
        flexDirection: 'row',
    },
    char: {
        marginHorizontal: 1,
    },
});

export default function SplashScreen({navigation}) {
    useEffect(() => {
        setTimeout(() => navigation.replace('SignIn'), 250);
    }, []);

    return(
        <View style={styles.screen}>
            <Icon />
            <View style={styles.textWrap}>
                <View style={[styles.text, {marginRight: 9}]}>
                    <H style={styles.char} />
                    <A style={styles.char} />
                    <P style={styles.char} />
                    <P style={styles.char} />
                    <Y style={styles.char} />
                </View>
                <View style={styles.text}>
                    <B style={styles.char} />
                    <O style={styles.char} />
                    <U style={styles.char} />
                    <Q style={styles.char} />
                    <U style={styles.char} />
                    <E style={styles.char} />
                    <T style={styles.char} />
                </View>
            </View>
        </View>
    );
}
