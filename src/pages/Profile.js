import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import { Header, Gap, Button } from '../components';
import { MinnieMouse } from '../assets/images';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F6F6F6',
        overflow: 'hidden',
    },
    content: {
        marginTop: 16,
        paddingHorizontal: 27,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: '#00000040',
        // shadowOffset: {
        //     width: 1,
        //     height: 1,
        // },
        // shadowOpacity: 0.4,
        // shadowRadius: 3,
        elevation: 4,
    },
    contentTop: {
        paddingTop: 43,
        alignItems: 'center',
    },
    contentBottom: {
        paddingTop: 68,
        paddingBottom: 64,
    },
    text: {
        fontFamily: 'Inte-Regular',
        color: '#000000',
        fontSize: 15,
    },
    button: {
        alignItems: 'center',
    },
});

export default function Profile({navigation}) {
    const iconHomePress = () => {
        navigation.goBack();
    }
    
    return(
        <View style={styles.screen}>
            <Header icon="Home" title="MY PROFILE" onPress={iconHomePress} />
            <View style={styles.content}>
                <View style={styles.contentTop}>
                    <Image source={MinnieMouse} />
                    <Gap h={18} />
                    <Text style={styles.text}>Aprayiel</Text>
                </View>
                <View style={styles.contentBottom}>
                    <Text style={styles.text}>EMAIL: mandakaprayiel@gmail.com</Text>
                    <Gap h={21} />
                    <Text style={styles.text}>PASSWORD: ***************</Text>
                    <Gap h={21} />
                    <Text style={styles.text}>ADDRESS: Bitung</Text>
                </View>
            </View>
            <Gap h={62} />
            <View style={styles.button}><Button title="EDIT" /></View>
        </View>
    );
}
