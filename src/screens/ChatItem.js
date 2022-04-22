import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, ScrollView, TextInput, TouchableOpacity, Text } from 'react-native';

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
    },
    message: (type) => ({
        marginVertical: 5,
        marginRight: (type === 'send') ? 10 : 100,
        marginLeft: (type === 'receive') ? 10 : 100,
        padding: 7.5,
        alignSelf: (type === 'send') ? 'flex-end': 'flex-start',
        backgroundColor: (type === 'send') ? '#005C4B' : '#202C33',
        borderRadius: 10,
    }),
    messageText: (type) => ({
        textAlign: 'left',
        color: '#E8ECEE',
        fontSize: 15,
    }),
    messageTime: {
        textAlign: 'right',
        color: '#8696A0',
        fontSize: 12.5,
    },
    bottom: {
        paddingTop: 10,
        paddingBottom: 2.5,
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#010202',
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

export default function ChatItem({route, navigation}) {
    const [data, setData] = useState(route.params[0]);
    const [chats, setChats] = useState(route.params[1]);

    return(
        <View style={s.screen}>
            <Header back={'light'} usePicture={true} picture={(data.picture !== null) ? data.picture : null} onPressLeft={() => navigation.goBack()} title={data.name} text={`last seen at ${data.lastSeen[1]}`} useMid={true} onPressMid={() => {}} video={true} phone={true} dots={true} />
            <ImageBackground source={ChatItemBg} style={s.content} resizeMode='cover'>
                <ScrollView style={s.chats}>
                    {chats.map(r => {
                        return(<TouchableOpacity key={r.id} style={s.message(r.type)} activeOpacity={0.5}>
                            <Text style={s.messageText(r.type)}>{r.message}</Text>
                            <Text style={s.messageTime}>{r.time}</Text>
                        </TouchableOpacity>)
                    })}
                </ScrollView>
                <View style={s.bottom}>
                    <View style={s.input}>
                        <TouchableOpacity style={s.icon} activeOpacity={0.25}>
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
