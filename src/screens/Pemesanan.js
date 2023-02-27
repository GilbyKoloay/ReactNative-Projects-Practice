import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import { ArrowBack, Cross, Calendar } from '../assets/icons';

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
    desc: {
        backgroundColor: '#5CE1E6',
        paddingVertical: 25,
        paddingLeft: 35,
        paddingRight: 57,
    },
    descItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: (size, color) => ({
        fontFamily: 'Poppins-Regular',
        fontSize: (size === 'Small') ? 14 : 16,
        color: color,
    }),
    date: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    dateBox: {
        backgroundColor: '#5CE1E640',
        paddingVertical: 5,
        width: 252,
        alignItems: 'center',
        justifyContent: 'center',
    },
    totalBox: {
        backgroundColor: '#5CE1E6',
        width: 312,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        alignSelf: 'center',
    },
    nextButton: {
        backgroundColor: '#5CE1E6',
        paddingVertical: 7.5,
        width: 128,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        alignSelf: 'center',
    }
});

export default ({navigation, route}) => {
    const [orang, setOrang] = useState(route.params.data.orang);
    const [motor, setMotor] = useState(route.params.data.motor);
    const [mobil, setMobil] = useState(route.params.data.mobil);

    const ArrowBack_onPress = () => {
        navigation.goBack();
    };

    const Next_onPress = () => {
        navigation.push('MetodePembayaran');
    };

    const descItem = (total, title, price) => {
        return(
            <View style={styles.descItem}>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.descItem}>
                        <TouchableOpacity activeOpacity={0.5} onPress={null}>
                            <Cross />
                        </TouchableOpacity>
                        <Gap w={3} />
                        <Text style={styles.text(`Small`, `#FFFFFF`)}>{total}</Text>
                    </View>
                    <Gap w={43} />
                    <Text style={styles.text(`Big`, `#020202`)}>{title}</Text>
                </View>
                <Text style={styles.text(`Big`, `#020202`)}>Rp. {price}</Text>
            </View>
        );
    };

    return(
        <View style={styles.screen}>
            <View style={styles.top}>
                <TouchableOpacity activeOpacity={0.5} onPress={ArrowBack_onPress}>
                    <ArrowBack />
                </TouchableOpacity>
                <Text style={styles.topText}>Pemesanan</Text>
            </View>
            <Gap h={60} />
            <View style={styles.desc}>
                {descItem(orang.countOrang, `Orang`, orang.hargaOrang)}
                <Gap h={33} />
                {descItem(motor.countMotor, `Motor`, motor.hargaMotor)}
                <Gap h={33} />
                {descItem(mobil.countMobil, `Mobil`, mobil.hargaMobil)}
            </View>
            <Gap h={79} />
            <View style={styles.date}>
                <Calendar />
                <Gap w={13} />
                <View style={styles.dateBox}>
                    <Text style={styles.text(`Small`, `#020202`)}>16/05/2022</Text>
                </View>
            </View>
            <Gap h={71} />
            <View style={styles.totalBox}>
                <Text style={styles.text(`Big`, `#020202`)}>Total : Rp. {orang.hargaOrang + motor.hargaMotor + mobil.hargaMobil}</Text>
            </View>
            <Gap h={14} />
            <TouchableOpacity style={styles.nextButton} activeOpacity={0.5} onPress={Next_onPress}>
                <Text style={styles.text(`Small`, `#020202`)}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};
