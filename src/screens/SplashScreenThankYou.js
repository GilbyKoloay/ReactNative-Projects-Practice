import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { Success } from '../assets/icons';
import { Logo } from '../assets/images';

import { Gap } from '../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#5CE1E6',
    },
    box: {
        marginTop: 68,
        marginHorizontal: 22,
        backgroundColor: 'white',
        borderRadius: 25,
        paddingTop: 80,
    },
    text: (size, color) => ({
        fontFamily: 'Poppins-Regular',
        fontSize: size,
        color: color,
    }),
    date: {
        backgroundColor: '#5CE1E640',
        paddingVertical: 7.5,
        width: 252,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    image: {
        alignSelf: 'center',
        width: 200,
        height: 60,
    },
    success: {
        height: 115,
        width: 110,
        borderRadius: 115/2,
        marginTop: 33,
        position: 'absolute',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
});

export default ({navigation}) => {
    return(
        <View style={styles.screen}>
            <View style={styles.box}>
                <Text style={[styles.text(15, `black`), {textAlign: 'center'}]}>Anda berhasil melakukan</Text>
                <Text style={[styles.text(15, `black`), {textAlign: 'center'}]}>pembayaran untuk tiket ini !</Text>
                <Text style={[styles.text(20, `black`), {textAlign: 'center'}]}>...............................................................</Text>
                <Gap h={33} />
                <Text style={[styles.text(17, `black`), {textAlign: 'center'}]}>Tiket untuk Gunung dan Pantai</Text>
                <Gap h={15} />
                <View style={styles.date}>
                    <Text style={styles.text(14, `#020202`)}>16/05/2022</Text>
                </View>
                <Gap h={91} />
                <Image style={styles.image} source={Logo} />
            </View>
            <View style={styles.success}>
                <Success />
            </View>
        </View>
    );
};
