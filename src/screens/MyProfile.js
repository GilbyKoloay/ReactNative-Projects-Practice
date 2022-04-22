import React from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground, TouchableHighlight, Text} from 'react-native';

import { CameraLight as Camera, Person, Pen, Info, PhoneDark as Phone } from '../assets/icons';
import { ProfilePerson as Profile } from '../assets/images';
import { Header, Gap } from '../components';

const s = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#111B21',
    },
    content: {
        marginTop: 25,
    },
    profilePicture: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    camera: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00A884',
        borderRadius: 50/2,
    },
    line: {
        marginLeft: 70,
        borderBottomWidth: 1,
        borderBottomColor: '#222D34',
    },
    item: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        flexDirection: 'row',
    },
    icon: {
        marginRight: 25,
    },
    itemWrap: {
        flex: 1,
    },
    itemTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemTitle: {
        color: '#8696A0',
        fontSize: 15,
    },
    itemText: {
        color: '#E9EDEF',
        fontSize: 17.5,
    },
    itemSubText: {
        color: '#8696A0',
        fontSize: 12.5,
    },
});

export default function MyProfile({navigation}) {
    const ItemWrap = (title, text, subText, pen) => {
        return(
            <View style={s.itemWrap}>
                <View style={s.itemTop}>
                    <View>
                        <Text style={s.itemTitle}>{title}</Text>
                        <Text style={s.itemText}>{text}</Text>
                    </View>
                    {(pen) && <Pen />}
                </View>
                <Text style={s.itemSubText}>{subText}</Text>
            </View>
        );
    }

    return(
        <View style={s.screen}>
            <Header back={true} title="My Profile" onPressLeft={() => navigation.goBack()} />
            <View style={s.content}>
                <TouchableOpacity activeOpacity={0.5}>
                    <ImageBackground source={Profile} style={s.profilePicture}>
                        <View style={s.camera}>
                            <Camera />
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            <Gap h={50} />
            <TouchableHighlight underlayColor='#454E55' onPress={() => {}}>
                <View style={s.item}>
                    <Person style={s.icon} />
                    {ItemWrap('Name', "telorbusu", "This is not your username or pin. This name will be visible to your WhatsApp contacts.", true)}
                </View>
            </TouchableHighlight>
            <View style={s.line} />
            <TouchableHighlight underlayColor='#454E55' onPress={() => {}}>
                <View style={s.item}>
                    <Info style={s.icon} />
                    {ItemWrap('About', "..- ..--.. .--.....-- ..- ..--..", null , true)}
                </View>
            </TouchableHighlight>
            <View style={s.line} />
            <TouchableHighlight underlayColor='#454E55' onPress={() => {}}>
                <View style={s.item}>
                    <Phone style={s.icon} />
                    {ItemWrap('Phone', "+62 813-4065-6305", null, false)}
                </View>
            </TouchableHighlight>
        </View>
    );
}
