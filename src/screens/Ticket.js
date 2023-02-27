import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

import { ArrowBack } from '../assets/icons';
import { Logo, ProfileImage } from '../assets/images';

import { Gap } from '../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
    },
    top: {
        marginTop: 18,
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    topText: {
        marginLeft: 15,
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        color: 'black',
    },
    content: {
        paddingHorizontal: 21,
        backgroundColor: '#5CE1E6',
    },
    contentTop: {
        marginHorizontal: -19,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    topImage: {
        height: 70,
        width: 111,
    },
    contentTopText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: 'white',
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        height: 63,
        width: 62,
        borderRadius: 62.5/2,
    },
    profileName: {
        marginLeft: 15,
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        color: 'black',
    },
    dots: {
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        color: 'black',
    },
    infoTextWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoText: (size=0, color='black') => ({
        fontFamily: 'Poppins-Regular',
        fontSize: size,
        color: color,
    }),
    text: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        color: 'black',
        textAlign: 'center',
    },
    textDesc: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        color: 'black',
    }
});

export default ({navigation}) => {
    const ArrowBack_onPress = () => {
        navigation.goBack();
    }

    return(
        <View style={styles.screen}>
            <View style={styles.top}>
                <TouchableOpacity activeOpacity={0.5} onPress={ArrowBack_onPress}>
                    <ArrowBack />
                </TouchableOpacity>
                <Text style={styles.topText}>Ticket</Text>
            </View>
            <Gap h={54} />
            <View style={styles.content}>
                <View style={styles.contentTop}>
                    <Image style={styles.topImage} source={Logo} />
                    <View>
                        <Text style={styles.contentTopText}>Jun 20, 2022</Text>
                        <Text style={styles.contentTopText}>9.45 AM</Text>
                    </View>
                </View>
                <Gap h={9} />
                <View style={styles.profile}>
                    <Image style={styles.profileImage} source={ProfileImage} />
                    <Text style={styles.profileName}>Aprayiel Mandak</Text>
                </View>
                <Text style={styles.dots}>...............................................................</Text>
                <View style={styles.infoTextWrap}>
                    <Text style={styles.infoText(16, '#02020280')}>Status</Text>
                    <Text style={styles.infoText(16, '#00800080')}>Approved</Text>
                </View>
                <Gap h={14} />
                <Text style={styles.text}>Terima kasih sudah membeli tiket!</Text>
                <Text style={styles.text}>Sampai jumpa lagi !</Text>
                <Text style={styles.dots}>...............................................................</Text>
                <View style={styles.infoTextWrap}>
                    <Text style={styles.infoText(16, '#02020280')}>Total Paid</Text>
                    <Text style={styles.infoText(16, '#02020280')}>Rp. 45.000</Text>
                </View>
                <Text style={styles.textDesc}>{`(5 orang, 2 motor, 1 mobil)`}</Text>
                <Gap h={90} />
            </View>
        </View>
    );
};
