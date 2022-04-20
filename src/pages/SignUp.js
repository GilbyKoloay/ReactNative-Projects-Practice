import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

import { DefaultProfile } from '../assets/images';
import { Header, Gap, TextInput, Button } from '../components';

const s = StyleSheet.create({
    screen: {
        flex: 1,
    },
    content: {
        marginTop: 25,
        paddingTop: 25,
        paddingHorizontal: 25,
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    imageCover: {
        height: 110,
        width: 110,
        padding: 10,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#8D92A3',
        borderStyle: 'dashed',
        borderRadius: 110/2,
    },
    image: {
        height: 90,
        width: 90,
        alignSelf: 'center',
        borderRadius: 90/2,
    },
    imageText: {
        fontFamily: 'Poppins-Light',
        color: '#8D92A3',
        fontSize: 15,
        textAlign: 'center',
    },
});

export default function SignUp({navigation}) {
    const [data, setData] = useState({
        name: null,
        email: null,
        password: null,
    });
    const [image, setImage] = useState(DefaultProfile);

    const addimagePress = async () => {
        const result = await launchImageLibrary({
            maxHeight: 200,
            maxWidth: 200,
            includeBase64: true,
        });

        setImage((result.didCancel) ? DefaultProfile : result.assets[0].uri);
    }

    return(
        <View style={s.screen}>
            <Header back={true} onPress={() => navigation.goBack()} title="Sign Up" />
            <View style={s.content}>
                <View style={s.imageCover}>
                    <TouchableOpacity style={s.imageWrap} activeOpacity={0.5} onPress={addimagePress}>
                        <Image source={(image === DefaultProfile) ? DefaultProfile : {uri:image}} style={s.image} />
                    </TouchableOpacity>
                </View>
                <Gap h={15} />
                <TextInput title="Full Name" placeholder="Type your full name" />
                <Gap h={15} />
                <TextInput title="Email Address" placeholder="Type your email address" />
                <Gap h={15} />
                <TextInput title="Password" placeholder="Type your password" secure={true} />
                <Gap h={25} />
                <Button text="Continue" onPress={() => navigation.reset({routes: [{name: 'HomeRouter'}]})} />
            </View>
        </View>
    );
}
