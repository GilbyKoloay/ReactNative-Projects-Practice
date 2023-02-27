import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';

import { List, Ticket, Gunung, Pantai } from '../assets/icons';
import { ProfileImage } from '../assets/images';
import { Gap } from '../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    iconsTop: {
        marginTop: 25,
        marginLeft: 20,
        marginRight: 27.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profile: {
        marginLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        height: 63,
        width: 62,
        borderRadius: 62.5/2,
    },
    profileName: {
        marginLeft: 11,
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        color: 'black',
    },
    welcomeBack: {
        marginLeft: 25,
        fontFamily: 'Montez-Regular',
        fontSize: 28,
        color: 'black',
    },
    button: {
        marginLeft: 30,
        marginRight: 47,
        paddingTop: 18.13, 
        paddingBottom: 13.87,
        backgroundColor: '#5CE1E6',
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        marginRight: 16.43,
        fontFamily: 'Poppins-Regular',
        fontSize: 24,
        color: 'white',
    }
});

export default ({navigation}) => {
    const List_onPress = () => {
        navigation.push('Choice');
    };

    const Ticket_onPress = () => {
        navigation.push('Ticket');
    };

    const Profile_onPress = () => {
        navigation.push('Profil');
    };

    const Gunung_onPress = () => {
        navigation.push('Gunung');
    };

    const PANTAI_onPress = () => {
        navigation.push('Pantai');
    };

    return(
        <View style={styles.screen}>
            <View style={styles.iconsTop}>
                <TouchableOpacity activeOpacity={0.5} onPress={List_onPress}>
                    <List />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={Ticket_onPress}>
                    <Ticket />
                </TouchableOpacity>
            </View>
            <Gap h={49} />
            <View style={styles.profile}>
                <TouchableOpacity activeOpacity={0.5} onPress={Profile_onPress}>
                    <Image style={styles.profileImage} source={ProfileImage} />
                </TouchableOpacity>
                <Text style={styles.profileName}>Aprayiel Mandak</Text>
            </View>
            <Gap h={72} />
            <Text style={styles.welcomeBack}>WELCOME BACK!</Text>
            <Gap h={83} />
            <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={Gunung_onPress}>
                <Text style={styles.buttonText}>Gunung</Text>
                <Gunung />
            </TouchableOpacity>
            <Gap h={43} />
            <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={PANTAI_onPress}>
                <Text style={styles.buttonText}>PANTAI</Text>
                <Pantai />
            </TouchableOpacity>
        </View>
    );
};
