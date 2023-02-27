import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

import { ArrowBack } from '../assets/icons';
import { KartuKredit, Dana, Ovo, ShopeePay } from '../assets/images';

import { Gap } from '../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
    },
    top: {
        marginTop: 29,
        marginLeft: 33,
        flexDirection: 'row',
        alignItems: 'center',
    },
    topText: {
        marginLeft: 20,
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        color: '#020202',
    },
    options: {
        backgroundColor: '#5CE1E6',
        paddingHorizontal: 29,
        paddingVertical: 35,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    optionImage: {
        marginLeft: -29,
    },
    optionText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        color: 'black',
    },
    button: {
        backgroundColor: '#5CE1E6',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingVertical: 7.5,
        width: 128,
    },
    buttonText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#020202',
    }
});

export default ({navigation}) => {
    const [select, setSelect] = useState({
        kartuKredit: false,
        dana: false,
        ovo: false,
        shopeePay: false,
    });

    const ArrowBack_onPress = () => {
        navigation.goBack();
    };

    const option_onPress = (val) => {
        setSelect({
            kartuKredit: (val === `kartuKredit`) && (select.kartuKredit === false) ? true : false,
            dana: (val === `dana`) && (select.dana === false) ? true : false,
            ovo: (val === `ovo`) && (select.ovo === false) ? true : false,
            shopeePay: (val === `shopeePay`) && (select.shopeePay === false) ? true : false,
        });
    };

    const Konfirmasi_onPress = () => {
        navigation.push('SplashScreenThankYou');
    };

    return(
        <View style={styles.screen}>
            <View style={styles.top}>
                <TouchableOpacity activeOpacity={0.5} onPress={ArrowBack_onPress}>
                    <ArrowBack />
                </TouchableOpacity>
                <Text style={styles.topText}>Metode Pembayaran</Text>
            </View>
            <Gap h={46} />
            <View style={styles.options}>
                <TouchableOpacity style={styles.option} activeOpacity={0.5} onPress={() => option_onPress(`kartuKredit`)}>
                    <Image source={KartuKredit} />
                    <Gap w={24} />
                    <Text style={styles.optionText}>Tambahkan kartu kredit</Text>
                </TouchableOpacity>
                <Gap h={32} />
                <TouchableOpacity style={styles.option} activeOpacity={0.5} onPress={() => option_onPress(`dana`)}>
                    <Image style={styles.optionImage} source={Dana} />
                    <Text style={styles.optionText}>Tambahkan DANA</Text>
                </TouchableOpacity>
                <Gap h={32} />
                <TouchableOpacity style={styles.option} activeOpacity={0.5} onPress={() => option_onPress(`ovo`)}>
                    <Image style={styles.optionImage} source={Ovo} />
                    <Text style={styles.optionText}>Tambahkan OVO</Text>
                </TouchableOpacity>
                <Gap h={32} />
                <TouchableOpacity style={styles.option} activeOpacity={0.5} onPress={() => option_onPress(`shopeePay`)}>
                    <Image style={styles.optionImage} source={ShopeePay} />
                    <Text style={styles.optionText}>Tambahkan ShopeePay</Text>
                </TouchableOpacity>
            </View>
            <Gap h={43} />
            <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={Konfirmasi_onPress}>
                <Text style={styles.buttonText}>Konfirmasi</Text>
            </TouchableOpacity>
        </View>
    );
};
