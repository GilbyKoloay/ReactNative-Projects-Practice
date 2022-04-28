import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Gap, Header, Content } from '../../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
});

export default function Display_Brightness({navigation}) {
    const [portraitOrientationLock, setPortraitOrientationLock] = useState(true);

    return(
        <View style={styles.screen}>
            <Header back={["Settings", () => navigation.goBack()]} title="Display & Brightness" />
            <ScrollView>
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Portrait Orientation Lock", switcH: {onValueChange: () => setPortraitOrientationLock, value: portraitOrientationLock}},
                    {key: 2, title: "Auto Screen Off", text: "30 Minutes", arrow: true, onPress: () => console.log(`Auto Screen Off`)},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Font Size", arrow: true, onPress: () => console.log(`Font Size`)},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "App Display in Full-screen", arrow: true, onPress: () => console.log(`App Display in Full-screen`)},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Night Shield", text: "Off", arrow: true, onPress: () => navigation.push("Night Shield")},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Lockscreen Magazine & Wallpaper", arrow: true, onPress: () => console.log(`Lockscreen Magazine & Wallpaper`)},
                ]} />
                <Gap h={12.5} />
            </ScrollView>
        </View>
    );
}
