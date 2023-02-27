import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';

import { Home_Sm, Ticket_Sm, Profile_Sm } from '../assets/icons';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
    },
    optionsWrap: {
        marginBottom: 35,
    },
    option: color => ({
        paddingHorizontal: 27,
        backgroundColor: color,
        height: 140,
        justifyContent: 'center',
    }),
    text: {
        fontFamily: 'Poppins-Regular',
        fontSize: 24,
        color: 'black',
        textAlign: 'center',
    },
    nav: {
        backgroundColor: '#5CE1E680',
        paddingVertical: 16,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});

export default ({navigation}) => {
    const Home_onPress = () => {
        navigation.goBack();
    };

    const Ticket_onPress = () => {
        navigation.push('Ticket');
    };

    const Profile_onPress = () => {
        navigation.push('Profil');
    };

    const option_onPress = () => {
        navigation.push('Pesan');
    };

    const option = (text, color) => {
        return(
            <TouchableOpacity style={styles.option(color)} activeOpacity={0.5} onPress={option_onPress}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        );
    };

    return(
        <View style={styles.screen}>
            <ScrollView style={styles.optionsWrap}>
                {option(`Pemandangan Gunung`, `#5CE1E640`)}
                {option(`Pemandangan Perbatuan`, `#5CE1E6BF`)}
                {option(`Pemandangan Jembatan`, `#5CE1E680`)}
                {option(`Pemandangan Pantai`, `#5CE1E6`)}
            </ScrollView>
            <View style={styles.nav}>
                <TouchableOpacity activeOpacity={0.5} onPress={Home_onPress}>
                    <Home_Sm />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={Ticket_onPress}>
                    <Ticket_Sm />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={Profile_onPress}>
                    <Profile_Sm />
                </TouchableOpacity>
            </View>
        </View>
    );
};
