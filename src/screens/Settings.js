import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Gap, Header, Content } from '../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
});

export default function App({navigation}) {
    const [airplaneMode, setAirplaneMode] = useState(false);
    const changeAirplaneMode = (val) => {
        setAirplaneMode(val);
    }

    return(
        <View style={styles.screen}>
            <Header title="Settings" />
            <ScrollView>
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, icon: '#FBA64F', title: "Airplane Mode", switcH: {use: true, onValueChange: () => changeAirplaneMode, value: airplaneMode}},
                    {key: 2, icon: '#65E19F', title: "Dual SIM & Cellular", arrow: true, onPress: () => navigation.push('Dual SIM & Cellular')},
                    {key: 3, icon: '#4DC5FD', title: "Wi-Fi", text: "ZTE_2.4G_px6Ahp", arrow: true, onPress: () => console.log(`Wi-Fi`)},
                    {key: 4, icon: '#55C8FE', title: "Bluetooth", text: "Off", arrow: true, onPress: () => {console.log(`Bluetooth`)}},
                    {key: 5, icon: '#A4AAB3', title: "Other Wireless Connections", arrow: true, onPress: () => {console.log(`Other Wireless Connections`)}},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, icon: '#FC7565', title: "Notification & Status Bar", arrow: true, onPress: () => {console.log(`Notification & Status Bar`)}},
                    {key: 2, icon: '#F9CC40', title: "Display & Brightness", arrow: true, onPress: () => {console.log(`Display & Brightness`)}},
                    {key: 3, icon: '#8AA9FE', title: "Sound & Vibration", arrow: true, onPress: () => {console.log(`Sound & Vibration`)}},
                    {key: 4, icon: '#FC7565', title: "Quiet Time", arrow: true, onPress: () => {console.log(`Quiet Time`)}},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, icon: '#40D68B', title: "Face & Passcode", arrow: true, onPress: () => {console.log(`Face & Passcode`)}},
                    {key: 2, icon: '#57C9FE', title: "Security", arrow: true, onPress: () => {console.log(`Security`)}},
                    {key: 3, icon: '#40D68B', title: "Battery", arrow: true, onPress: () => {console.log(`Battery`)}},
                    {key: 4, icon: '#58CAFF', title: "Language & Region", arrow: true, onPress: () => {console.log(`Language & Region`)}},
                    {key: 5, icon: '#A4A9B2', title: "Additional Settings", arrow: true, onPress: () => {console.log(`Additional Settings`)}},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, icon: '#40D68A', title: "Software Updates", arrow: true, onPress: () => {console.log(`Software Updates`)}},
                    {key: 2, icon: '#A4A9B2', title: "About Phone", arrow: true, onPress: () => {console.log(`About Phone`)}},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, icon: '#54C8FE', title: "Accounts and Sync", arrow: true, onPress: () => {console.log(`Accounts and Sync`)}},
                    {key: 2, icon: '#40D78A', title: "Google", arrow: true, onPress: () => {console.log(`Google`)}},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, icon: '#58CAFF', title: "App Management", arrow: true, onPress: () => {console.log(`App Management`)}},
                    {key: 2, icon: '#55C9FF', title: "Clone Apps", arrow: true, onPress: () => {console.log(`Clone Apps`)}},
                    {key: 3, icon: '#F8CE3F', title: "Game Acceleration", arrow: true, onPress: () => {console.log(`Game Acceleration`)}},
                    {key: 4, icon: '#FBA74F', title: "Gesture & Motion", arrow: true, onPress: () => {console.log(`Gesture & Motion`)}},
                    {key: 5, icon: '#41D78A', title: "Split-screen", arrow: true, onPress: () => {console.log(`Split-screen`)}},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Call", arrow: true, onPress: () => {console.log(`Call`)}},
                    {key: 2, title: "Contacts", arrow: true, onPress: () => {console.log(`Contacts`)}},
                    {key: 3, title: "Messages", arrow: true, onPress: () => {console.log(`Messages`)}},
                    {key: 4, title: "Phone Manager", arrow: true, onPress: () => {console.log(`Phone Manager`)}},
                    {key: 5, title: "Camera", arrow: true, onPress: () => {console.log(`Camera`)}},
                    {key: 6, title: "Weather", arrow: true, onPress: () => {console.log(`Weather`)}},
                    {key: 7, title: "App Market", arrow: true, onPress: () => {console.log(`App Market`)}},
                    {key: 8, title: "Game Center", arrow: true, onPress: () => {console.log(`Game Center`)}},
                    {key: 9, title: "Theme Store", arrow: true, onPress: () => {console.log(`Theme Store`)}},
                    {key: 10, title: "Internet", arrow: true, onPress: () => {console.log(`Internet`)}},
                ]} />
                <Gap h={12.5} />
            </ScrollView>
        </View>
    );
}