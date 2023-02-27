import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import { Profile, Home } from '../assets/icons';

const styles = StyleSheet.create({
    container: {
        height: 73,
        // width: 411,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        marginTop: 17,
        marginBottom: 21,
        marginLeft: 47,
    },
    text: {
        marginTop: 20, 
        marginBottom: 21,
        marginRight: 53,
        fontFamily: 'Inter-Regular',
        color: '#000000',
        fontSize: 25,
    }
});

export default function Header({icon=null, title="<Header_Title>", onPress=null}) {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.icon} activeOpacity={0.5} onPress={onPress}>
                {(icon === 'Profile') ? <Profile /> : 
                (icon === 'Home') && <Home />}
            </TouchableOpacity>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}
