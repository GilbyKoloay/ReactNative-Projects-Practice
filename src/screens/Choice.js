import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

import { Home, Riwayat, Lokasi, Bantuan, Pengaturan } from '../assets/icons';
import { ProfileImage } from '../assets/images';

import { Gap } from '../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
    },
    top: {
        marginTop: 29,
        marginHorizontal: 22,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    profileText:{
        marginLeft: 15,
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        color: 'black',
    },
    options: {
        marginHorizontal: 27,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    optionIcon: {
        height: 49,
        width: 53,
        backgroundColor: '#5CE1E6',
        borderRadius: 53/2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    optionText: {
        flex: 1,
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        color: 'black',
    }
});

export default ({navigation}) => {
    const Home_onPress = () => {
        navigation.goBack();
    }

    return(
        <View style={styles.screen}>
            <View style={styles.top}>
                <View style={styles.profile}>
                    <Image style={styles.profileImage} source={ProfileImage} />
                    <Text style={styles.profileText}>Aprayiel Mandak</Text>
                </View>
                <TouchableOpacity activeOpacity={0.5} onPress={Home_onPress}>
                    <Home />
                </TouchableOpacity>
            </View>
            <Gap h={78} />
            <View style={styles.options}>
                <TouchableOpacity style={styles.option} activeOpacity={0.5} onPress={null}>
                    <View style={[styles.optionIcon, {paddingRight: 5}]}>
                        <Riwayat />
                    </View>
                    <Text style={styles.optionText}>Riwayat</Text>
                </TouchableOpacity>
                <Gap h={38} />
                <TouchableOpacity style={styles.option} activeOpacity={0.5} onPress={null}>
                    <View style={styles.optionIcon}>
                        <Lokasi />
                    </View>
                    <Text style={styles.optionText}>Lokasi</Text>
                </TouchableOpacity>
                <Gap h={38} />
                <TouchableOpacity style={styles.option} activeOpacity={0.5} onPress={null}>
                    <View style={styles.optionIcon}>
                        <Bantuan />
                    </View>
                    <Text style={styles.optionText}>Bantuan</Text>
                </TouchableOpacity>
                <Gap h={38} />
                <TouchableOpacity style={styles.option} activeOpacity={0.5} onPress={null}>
                    <View style={styles.optionIcon}>
                        <Pengaturan />
                    </View>
                    <Text style={styles.optionText}>Pengaturan</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
