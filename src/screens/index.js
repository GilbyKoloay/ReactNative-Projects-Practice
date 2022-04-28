import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import {
    AirplaneMode as I_AM,
    DualSIM_Cellular as I_DSC,
    Wi_Fi as I_WF,
    Bluetooth as I_Bl,
    OtherWirelessConnections as I_OWC,
    Notification_StatusBar as I_NSB,
    Display_Brightness as I_DB,
    Sound_Vibration as I_SV,
    QuietTime as I_QT,
    Face_Passcode as I_FP,
    Security as I_S,
    Battery as I_Ba,
} from '../assets/icons';
import { Gap, Header, Content } from '../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
});

const Settings = ({navigation}) => {
    const [airplaneMode, setAirplaneMode] = useState(false);

    return(
        <View style={styles.screen}>
            <Header title="Settings" />
            <ScrollView>
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, icon: {color: '#FBA64F', icon: <I_AM />}, title: "Airplane Mode", switcH: {onValueChange: () => setAirplaneMode, value: airplaneMode}},
                    {key: 2, icon: {color: '#65E19F', icon: <I_DSC />}, title: "Dual SIM & Cellular", arrow: true, onPress: () => navigation.push("Dual SIM & Cellular")},
                    {key: 3, icon: {color: '#4DC5FD', icon: <I_WF />}, title: "Wi-Fi", text: "ZTE_2.4G_px6Ahp", arrow: true, onPress: () => console.log(`Wi-Fi`)},
                    {key: 4, icon: {color: '#55C8FE', icon: <I_Bl />}, title: "Bluetooth", text: "Off", arrow: true, onPress: () => {console.log(`Bluetooth`)}},
                    {key: 5, icon: {color: '#A4AAB3', icon: <I_OWC />}, title: "Other Wireless Connections", arrow: true, onPress: () => navigation.push("Other Wireless Connections")},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, icon: {color: '#FC7565', icon: <I_NSB />}, title: "Notification & Status Bar", arrow: true, onPress: () => navigation.push("Notification & Status Bar")},
                    {key: 2, icon: {color: '#F9CC40', icon: <I_DB />}, title: "Display & Brightness", arrow: true, onPress: () => navigation.push("Display & Brightness")},
                    {key: 3, icon: {color: '#8AA9FE', icon: <I_SV />}, title: "Sound & Vibration", arrow: true, onPress: () => navigation.push("Sound & Vibration")},
                    {key: 4, icon: {color: '#A797FE', icon: <I_QT />}, title: "Quiet Time", arrow: true, onPress: () => navigation.push("Quiet Time")},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, icon: {color: '#40D68B', icon: <I_FP />}, title: "Face & Passcode", arrow: true, onPress: () => {console.log(`Face & Passcode`)}},
                    {key: 2, icon: {color: '#57C9FE', icon: <I_S />}, title: "Security", arrow: true, onPress: () => navigation.push("Security")},
                    {key: 3, icon: {color: '#40D68B', icon: <I_Ba />}, title: "Battery", arrow: true, onPress: () => {console.log(`Battery`)}},
                    {key: 4, icon: {color: '#58CAFF'}, title: "Language & Region", arrow: true, onPress: () => navigation.push("Language & Region")},
                    {key: 5, icon: {color: '#A4A9B2'}, title: "Additional Settings", arrow: true, onPress: () => navigation.push("Additional Settings")},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, icon: {color: '#40D68A'}, title: "Software Updates", arrow: true, onPress: () => {console.log(`Software Updates`)}},
                    {key: 2, icon: {color: '#A4A9B2'}, title: "About Phone", arrow: true, onPress: () => {console.log(`About Phone`)}},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, icon: {color: '#54C8FE'}, title: "Accounts and Sync", arrow: true, onPress: () => {console.log(`Accounts and Sync`)}},
                    {key: 2, icon: {color: '#40D78A'}, title: "Google", arrow: true, onPress: () => {console.log(`Google`)}},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, icon: {color: '#58CAFF'}, title: "App Management", arrow: true, onPress: () => {console.log(`App Management`)}},
                    {key: 2, icon: {color: '#55C9FF'}, title: "Clone Apps", arrow: true, onPress: () => {console.log(`Clone Apps`)}},
                    {key: 3, icon: {color: '#F8CE3F'}, title: "Game Acceleration", arrow: true, onPress: () => {console.log(`Game Acceleration`)}},
                    {key: 4, icon: {color: '#FBA74F'}, title: "Gesture & Motion", arrow: true, onPress: () => {console.log(`Gesture & Motion`)}},
                    {key: 5, icon: {color: '#41D78A'}, title: "Split-screen", arrow: true, onPress: () => {console.log(`Split-screen`)}},
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



import DualSIM_Cellular from './DualSIM_Cellular';
import SIM1 from './DualSIM_Cellular/SIM1';
import Carrier from './DualSIM_Cellular/Carrier';

import OtherWirelessConnections from './OtherWirelessConnections';
import PersonalHotspot from './OtherWirelessConnections/PersonalHotspot';

import Notification_StatusBar from './Notification_StatusBar';

import Display_Brightness from './Display_Brightness';
import NightShield from './Display_Brightness/NightShield';

import Sound_Vibration from './Sound_Vibration';

import Quiet_Time from './Quiet_Time';

import Security from './Security';
import Anti_Harassment_Fraud from './Security/Anti_Harassment_Fraud';
import BlockCalls from './Security/BlockCalls';
import BlockMessages from './Security/BlockMessages';

import Battery from './Battery';

import Language_Region from './Language_Region';

import AdditionalSettings from './AdditionalSettings';
import UserGuide from './AdditionalSettings/UserGuide';
import ProductSecurity from './AdditionalSettings/ProductSecurity';

export {
    Settings,

    DualSIM_Cellular, SIM1, Carrier,
    OtherWirelessConnections, PersonalHotspot,
    Notification_StatusBar,
    Display_Brightness, NightShield,
    Sound_Vibration,
    Quiet_Time,
    Security, Anti_Harassment_Fraud, BlockCalls, BlockMessages,
    Battery,
    Language_Region,
    AdditionalSettings, UserGuide, ProductSecurity,
};
