import React from 'react';
import { StyleSheet, View, ImageBackground, ScrollView, TextInput, TouchableOpacity } from 'react-native';

import { CameraDark, Smile, Attachment, Microphone } from '../assets/icons';
import { ChatItemBg } from '../assets/images';
import { Header } from '../components';

const s = StyleSheet.create({
    screen: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    chats: {
        flex: 1,

        // borderWidth: 1,
        // borderColor: 'white',
    },
    bottom: {
        paddingTop: 10,
        paddingBottom: 2.5,
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#010202',
    },
    input: {
        paddingVertical: 7.5,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#202C33',
        borderRadius: 50,
    },
    icon: {
        marginHorizontal: 10,
    },
    inputText: {
        padding: 0,
        flex: 1,
        color: '#E9EDEF',
        fontSize: 17.5,
    },
    mic: {
        marginLeft: 5,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00A884',
        borderRadius: 50/2,
    },
});

export default function ChatItem({navigation}) {
    return(
        <View style={s.screen}>
            <Header back={true} usePicture={true} onPressLeft={() => navigation.goBack()} title="telorbusu" text="online" useMid={true} onPressMid={() => {}} video={true} phone={true} dots={true} />
            <ImageBackground source={ChatItemBg} style={s.content} resizeMode='cover'>
                <ScrollView style={s.chats}>

                </ScrollView>
                <View style={s.bottom}>
                    <View style={s.input}>
                        <TouchableOpacity style={s.icon} activeOpacity={0.5}>
                            <Smile />
                        </TouchableOpacity>
                        <TextInput style={s.inputText} placeholder="Message" placeholderTextColor='#8696A0' />
                        <TouchableOpacity style={s.icon} activeOpacity={0.5}>
                            <Attachment />
                        </TouchableOpacity>
                        <TouchableOpacity style={s.icon} activeOpacity={0.5}>
                            <CameraDark />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={s.mic} activeOpacity={0.5}>
                        <Microphone />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}
