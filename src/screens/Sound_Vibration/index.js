import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Gap, Header, Content } from '../../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
});

export default function Sound_Vibration({navigation}) {
    const [vibrateWhenRinging, setVibrateWhenRinging] = useState(true);
    const [vibrateWhenSilent, setVibrateWhenSilent] = useState(false);
    const [silent, setSilent] = useState(false);
    const [dialpadTone, setDialpadTone] = useState(true);
    const [lockScreenTone, setLockScreenTone] = useState(true);
    const [vibrateOnTouch, setVibrateOnTouch] = useState(false);
    const [headphonesMonitor, setHeadphonesMonitor] = useState(false);

    return(
        <View style={styles.screen}>
            <Header back={["Settings", () => navigation.goBack()]} title="Sound & Vibration" />
            <ScrollView>
                <Gap h={10} />
                <Content title="VIBRATE" items={[
                    {key: 1, title: "Vibrate when ringing", switcH: {onValueChange: () => setVibrateWhenRinging, value: vibrateWhenRinging}},
                    {key: 2, title: "Vibrate when silent", switcH: {onValueChange: () => setVibrateWhenSilent, value: vibrateWhenSilent}},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Silent", switcH: {onValueChange: () => setSilent, value: silent}},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Ringtone", text: "Future", arrow: true, onPress: () => console.log(`Ringtone`)},
                    {key: 2, title: "Message Tone", text: "Trickle", arrow: true, onPress: () => console.log(`Message Tone`)},
                    {key: 3, title: "Other Notification Tones", text: "Joy", arrow: true, onPress: () => console.log(`Other Notification Tones`)},
                ]} />
                <Gap h={10} />
                <Content title="SYSTEM FEEDBACK" items={[
                    {key: 1, title: "Dialpad tone", switcH: {onValueChange: () => setDialpadTone, value: dialpadTone}},
                    {key: 2, title: "Lock Screen Tone", switcH: {onValueChange: () => setLockScreenTone, value: lockScreenTone}},
                    {key: 3, title: "Vibrate on Touch", switcH: {onValueChange: () => setVibrateOnTouch, value: vibrateOnTouch}},
                ]} />
                <Gap h={10} />
                <Content title="GLOBAL SOUND" items={[
                    {key: 1, title: "Real Sound Technology", arrow: true, onPress: () => console.log(`Real Sound Technology`)},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Headphones Monitor", switcH: {onValueChange: () => setHeadphonesMonitor, value: headphonesMonitor}},
                ]} />
                <Gap h={12.5} />
            </ScrollView>
        </View>
    );
}
