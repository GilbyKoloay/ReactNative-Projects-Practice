import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TouchableHighlight, ScrollView, Image } from 'react-native'

import { Search, DotsDark as Dots, CameraDark as Camera } from '../assets/icons';
import { ProfilePerson as ProfileP } from '../assets/images';
import { Gap } from '../components';

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
        color: (active) ? '#00A884' : '#8696A0',
        fontSize: 15,
        fontWeight: 'bold',
    }),
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

export default function Chats({navigation}) {
    const [data, setData] = useState([
        {
            id: 1,
            profile: null,
            name: "Alpha Bravo",
            chat: [
                {
                    id: 1,
                    date: '01/02/2003',
                    time: '01:23',
                    read: true,
                    message: "First message",
                }
            ]
        },
        {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}, 
    ]);

    const getData = async() => {
        try {
            const result = await fetch('http://192.168.1.6:3000/api/users');
            // console.log(result);
            const json = await result.json();
            console.log(json);
        }
        catch(e) {
            console.log(e.message);
        }
    }

    const Item = ({id}) => {
        return(
            <TouchableHighlight key={id} underlayColor='#454E55' onPress={() => {}}>
                <View style={s.item}>
                    <TouchableOpacity style={s.profile} activeOpacity={0.5}>
                        <Image source={ProfileP} style={s.profile} />
                    </TouchableOpacity>
                    <View style={s.itemWrap}>
                        <View style={s.itemTop}>
                            <Text style={s.itemName}>{(id%2 === 1) ? 'telorbuzzu' : 'telor busu'}</Text>
                            <Text style={s.itemDate}>01:23</Text>
                        </View>
                        <View style={s.itemBottom}>
                            <Text style={s.itemMessage}>Lorem ipsum dolor sit amet</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
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
                        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.push('MyProfile')}>
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
            <ScrollView style={s.content}>
                {data.map(r => Item(r))}
            </ScrollView>
        </View>
    );
}
