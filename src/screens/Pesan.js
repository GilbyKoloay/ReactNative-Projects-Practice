import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

import { Orang, Motor, Mobil, Plus, Minus } from '../assets/icons';
import { Logo } from '../assets/images';

import { Gap } from '../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
    },
    logo: {
        height: 183,
    },
    main: {
        marginLeft: 23,
        marginRight: 25,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconBig: {
        height: 49,
        width: 53,
        borderRadius: 53/2,
        backgroundColor: '#5CE1E6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: size => ({
        fontFamily: 'Poppins-Regular',
        fontSize: (size === 'Big') ? 16 : 12,
        color: (size === 'Big') ? '#02020280' : '#020202',
    }),
    iconSmall: {
        height: 21,
        width: 37,
        backgroundColor: '#5CE1E6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    button: {
        marginBottom: 85,
        height: 35,
        width: 128,
        paddingVertical: 7.5,
        backgroundColor: '#5CE1E6',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#020202',
    }
});

export default ({navigation}) => {
    const [countOrang, setCountOrang] = useState(0);
    const [hargaOrang, setHargaOrang] = useState(0);
    const [countMotor, setCountMotor] = useState(0);
    const [hargaMotor, setHargaMotor] = useState(0);
    const [countMobil, setCountMobil] = useState(0);
    const [hargaMobil, setHargaMobil] = useState(0);

    const changeOrang = (val) => {
        if(val === `plu`) {
            setCountOrang(countOrang + 1);
            setHargaOrang((countOrang + 1) * 5000);
        }
        else if(val === `min` && countOrang > 0) {
            setCountOrang(countOrang - 1);
            setHargaOrang((countOrang - 1) * 5000);
        }
    };

    const changeMotor = (val) => {
        if(val === `plu`) {
            setCountMotor(countMotor + 1);
            setHargaMotor((countMotor + 1) * 5000);
        }
        else if(val === `min` && countMotor > 0) {
            setCountMotor(countMotor - 1);
            setHargaMotor((countMotor - 1) * 5000);
        }
    };

    const changeMobil = (val) => {
        if(val === `plu`) {
            setCountMobil(countMobil + 1);
            setHargaMobil((countMobil + 1) * 10000);
        }
        else if(val === `min` && countMobil > 0) {
            setCountMobil(countMobil - 1);
            setHargaMobil((countMobil - 1) * 10000);
        }
    };

    const Next_onPress = () => {
        navigation.push('Pemesanan', {data: {
            orang: {
                countOrang: countOrang,
                hargaOrang: hargaOrang,
            },
            motor: {
                countMotor: countMotor,
                hargaMotor: hargaMotor,
            },
            mobil: {
                countMobil: countMobil,
                hargaMobil: hargaMobil,
            }
        }});
    };

    const item = (val) => {
        return(
            <View style={styles.item}>
                <View style={styles.iconBig}>
                    {(val === 'Orang') ? <Orang />
                    :(val === 'Motor') ? <Motor />
                    :(val === 'Mobil') && <Mobil />}
                </View>
                <Gap w={49} />
                <View>
                    <Text style={styles.text(`Big`)}>{val}</Text>
                    <Text style={styles.text(`Small`)}>
                        {(val === 'Orang') ? hargaOrang
                        :(val === 'Motor') ? hargaMotor
                        :(val === 'Mobil') && hargaMobil}
                    </Text>
                </View>
                <Gap w={63} />
                <TouchableOpacity style={styles.iconSmall} activeOpacity={0.5} onPress={() => 
                    (val === 'Orang') ? changeOrang(`plu`) :
                    (val === 'Motor') ? changeMotor(`plu`) :
                    (val === 'Mobil') && changeMobil(`plu`)}
                >
                    <Plus />
                </TouchableOpacity>
                <Gap w={6} />
                <Text style={styles.text(`Count`)}>
                    {(val === 'Orang') ? countOrang
                    :(val === 'Motor') ? countMotor
                    :(val === 'Mobil') && countMobil}
                </Text>
                <Gap w={6} />
                <TouchableOpacity style={styles.iconSmall} activeOpacity={0.5} onPress={() => 
                    (val === 'Orang') ? changeOrang(`min`) :
                    (val === 'Motor') ? changeMotor(`min`) :
                    (val === 'Mobil') && changeMobil(`min`)}
                >
                    <Minus />
                </TouchableOpacity>
            </View>
        );
    };

    return(
        <View style={styles.screen}>
            <Image style={styles.logo} source={Logo} />
            <View style={styles.main}>
                {item(`Orang`)}
                <Gap h={19} />
                {item(`Motor`)}
                <Gap h={19} />
                {item(`Mobil`)}
            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={Next_onPress}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};
