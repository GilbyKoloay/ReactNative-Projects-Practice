import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TouchableHighlight, ScrollView, Image } from 'react-native'

import { SearchDark as Search, DotsDark as Dots, CameraDark as Camera } from '../assets/icons';
import { ProfilePerson as Profile } from '../assets/images';
import { Gap } from '../components';

import Data from '../data';

const s = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#111B21',
    },
    header: {
        paddingTop: 20,
        backgroundColor: '#202C33',
    },
    headerTop: {
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    whatsApp: {
        fontFamily: 'Helvetica',
        color: '#8696A0',
        fontSize: 20,
    },
    iconWrap: {
        flexDirection: 'row',
    },
    headerBottom: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    camera: {
        marginHorizontal: 10,
    },
    tabs: {
        flex: 1,
        flexDirection: 'row',
    },
    tabItem: (active) => ({
        flex: 1,
        paddingVertical: 15,
        alignItems: 'center',
        borderBottomWidth: (active) ? 2.5 : 0,
        borderColor: (active) ? '#00A884' : '#202C33',
    }),
    tabItemText: (active) => ({
        fontFamily: 'Helvetica',
        color: (active) ? '#00A884' : '#8696A0',
        fontSize: 15,
        fontWeight: 'bold',
    }),
    contentEmpty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentEmptyText: {
        color: '#E9EDEF',
    },
    content: {
        flex: 1,
    },
    item: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        flex: 1,
        flexDirection: 'row',
    },
    profile: {
        height: 55,
        width: 55,
        marginRight: 15,
        borderRadius: 55/2,
    },
    itemWrap: {
        flex: 1,
        justifyContent: 'center',
    },
    itemTop: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemName: {
        color: '#E9EDEF',
        fontSize: 17.5,
    },
    itemDate: {
        color: '#8696A0',
        fontSize: 12.5,
    },
    itemBottom: {
        flex: 1,
    },
    itemMessage: {
        color: '#8696A0',
        fontSize: 15,
    },
});

export default function Chats({route, navigation}) {
    const [userPhone, setUserPhone] = useState(route.params);
    const [userData, setUserData] = useState(Data.filter(r => r.phone === userPhone));

    // const getData = async() => {
    //     try {
    //         const result = await fetch('http://192.168.1.6:3000/api/users');
    //         // console.log(result);
    //         const json = await result.json();
    //         console.log(json);
    //     }
    //     catch(e) {
    //         console.log(e.message);
    //     }
    // }

    const Item = () => {
        if(userData.length === 0) {
            return(
                <View style={s.contentEmpty}>
                    <Text style={s.contentEmptyText}>You don't have any chats</Text>
                </View>
            );
        }
        else {
            return(
                <ScrollView style={s.content}>
                    {userData[0].contacts.map(r => {
                        const contactData = Data.filter(d => d.id === r.id);

                        let ItemPicture = (contactData[0].picture !== null) ? contactData[0].picture : Profile;

                        return(
                            <TouchableHighlight key={r.id} underlayColor='#454E55' onPress={() => navigation.push('ChatItem', [contactData[0], r.chats])}>
                                <View style={s.item}>
                                    <TouchableOpacity style={s.profile} activeOpacity={0.5}>
                                        <Image source={ItemPicture} style={s.profile} />
                                    </TouchableOpacity>
                                    <View style={s.itemWrap}>
                                        <View style={s.itemTop}>
                                            <Text style={s.itemName}>{contactData[0].name}</Text>
                                            <Text style={s.itemDate}>{contactData[0].lastSeen[1]}</Text>
                                        </View>
                                        <View style={s.itemBottom}>
                                            <Text style={s.itemMessage}>{r.chats[r.chats.length-1].message}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        );
                    })}
                </ScrollView>
            );
        }
    }

    return(
        <View style={s.screen}>
            <View style={s.header}>
                <View style={s.headerTop}>
                    <Text style={s.whatsApp}>WhatsApp</Text>
                    <View style={s.iconWrap}>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Search style={{marginRight: 25}}/>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.push('MyProfile', userData[0])}>
                            <Dots />
                        </TouchableOpacity>
                    </View>
                </View>
                <Gap h={10} />
                <View style={s.headerBottom}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Camera style={s.camera} />
                    </TouchableOpacity>
                    <View style={s.tabs}>
                        <TouchableHighlight style={s.tabItem(true)} underlayColor='#454E55' onPress={() => {}} >
                            <Text style={s.tabItemText(true)}>CHATS</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={s.tabItem(false)} underlayColor='#454E55' onPress={() => {}} >
                            <Text style={s.tabItemText(false)}>STATUS</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={s.tabItem(false)} underlayColor='#454E55' onPress={() => {}} >
                            <Text style={s.tabItemText(false)}>CALLS</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
            {Item()}
        </View>
    );
}
