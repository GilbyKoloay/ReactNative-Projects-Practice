import React from 'react';
import { StyleSheet, View, TouchableHighlight, Image, Text } from 'react-native';

import { ProfilePerson as Picture } from '../assets/images';
import { BackGrey as Back, VideoLight, PhoneLight, DotsLight as Dots } from '../assets/icons';

const s = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#202C33',
    },
    left: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    profile: {
        marginLeft: 5,
        height: 40,
        width: 40,
        borderRadius: 40/2,
    },
    mid: {
        flex: 1,
        marginLeft: 7.5,
        flex: 1,
    },
    title: (text) => ({
        paddingVertical: (text !== null) ? 0 : 22.5/2,
        color: '#E9EDEF',
        fontSize: 17.5,
    }),
    text: {
        color: '#E9EDEF',
        fontSize: 15,
    },
    right: {
        flexDirection: 'row',
    },
    icon: {
        marginLeft: 30,
        justifyContent: 'center',
    },
});

export default function Header({back=false, usePicture=false, picture=null, onPressLeft=null, useMid=false, title="<Header_Title>", text=null, onPressMid=null, video=false, phone=false, dots=false}) {
    return(
        <View style={s.container}>
            <TouchableHighlight underlayColor='#454E55' onPress={onPressLeft}>
                <View style={s.left}>
                    {(back) && <Back />}
                    {(usePicture) ? <Image source={(picture === null) ? Picture : picture} style={s.profile} /> : <View style={{marginHorizontal: 12.5}} />}
                </View>
            </TouchableHighlight>
            <TouchableHighlight style={s.mid} underlayColor='#454E55' onPress={(useMid) ? onPressMid : null}>
                <View>
                    <Text style={s.title(text)}>{title}</Text>
                    {(text !== null) && <Text style={s.text}>{text}</Text>}
                </View>
            </TouchableHighlight>
            <View style={s.right}>
                {(video) && <TouchableHighlight style={s.icon} underlayColor='#454E55' onPress={() => {}}>
                    <VideoEnable />
                </TouchableHighlight>}
                {(phone) && <TouchableHighlight style={s.icon} underlayColor='#454E55' onPress={() => {}}>
                    <PhoneEnable />
                </TouchableHighlight>}
                {(dots) && <TouchableHighlight style={s.icon} underlayColor='#454E55' onPress={() => {}}>
                    <Dots />
                </TouchableHighlight>}
            </View>
        </View>
    );
}
