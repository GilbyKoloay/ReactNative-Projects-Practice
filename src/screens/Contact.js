import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Image, Text, TouchableHighlight } from 'react-native';

import { ProfilePerson as Profile } from '../assets/images';
import { BackLight as Back, DotsLight as Dots, PhoneGreenLight as Phone, VideoGreenLight as Video, SearchGreenLight as Search, DeleteContact, DeleteChat } from '../assets/icons';
import { Gap } from '../components';

const s = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#0B141A',
    },
    contentTop: {
        padding: 20,
        backgroundColor: '#111B21',
    },
    contentTopTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    picture: {
        height: 100,
        width: 100,
        marginBottom: 10,
        borderRadius: 125/2,
    },
    name: {
        color: '#E9EDEF',
        fontSize: 22.5,
        textAlign: 'center',
    },
    phone: {
        marginVertical: 5,
        color: '#8696A0',
        fontSize: 17.5,
        textAlign: 'center',
    },
    lastSeen: {
        color: '#8696A0',
        fontSize: 12.5,
        textAlign: 'center',
    },
    optionsWrap: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    option: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    optionText: {
        marginTop: 15,
        color: '#00A884',
        fontSize: 12.5,
    },
    contentBottom: {
        backgroundColor: '#111B21',
    },
    bottomItem: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        flexDirection: 'row',
    },
    bottomItemText: {
        marginLeft: 25,
        color: '#F15C6D',
        fontSize: 17.5,
    },
});

export default function Contact({route, navigation}) {
    const [data, setData] = useState(route.params);

    return(
        <ScrollView style={s.screen}>
            <View style={s.contentTop}>
                <View style={s.contentTopTop}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                        <Back />
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Image source={(data.picture !== null) ? data.picture : Profile } style={s.picture} />
                        </TouchableOpacity>
                        <Text style={s.name}>{data.name}</Text>
                        <Text style={s.phone}>{data.phone}</Text>
                        <Text style={s.lastSeen}>{data.lastSeen[1]}</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Dots />
                    </TouchableOpacity>
                </View>
                <View style={s.optionsWrap}>
                    <TouchableOpacity style={s.option} activeOpacity={0.5}>
                        <Phone />
                        <Text style={s.optionText}>Audio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={s.option} activeOpacity={0.5}>
                        <Video />
                        <Text style={s.optionText}>Video</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={s.option} activeOpacity={0.5}>
                        <Search />
                        <Text style={s.optionText}>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Gap h={15} />
            <View style={s.contentBottom}>
                <TouchableHighlight underlayColor='#454E55' onPress={() => {}}>
                    <View style={s.bottomItem}>
                        <DeleteContact />
                        <Text style={s.bottomItemText}>Delete Contact</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor='#454E55' onPress={() => {}}>
                    <View style={s.bottomItem}>
                        <DeleteChat />
                        <Text style={s.bottomItemText}>Clear Chat</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </ScrollView>
    );
}
