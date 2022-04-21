import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TouchableHighlight } from 'react-native'

import { Search, Dots, Camera } from '../assets/icons';
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

    },
});

export default function Chats({navigation}) {
    return(
        <View style={s.screen}>
            <View style={s.header}>
                <View style={s.headerTop}>
                    <Text style={s.whatsApp}>WhatsApp</Text>
                    <View style={s.iconWrap}>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Search style={{marginRight: 25}}/>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
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
            <View style={s.content}>

            </View>
        </View>
    );
}
