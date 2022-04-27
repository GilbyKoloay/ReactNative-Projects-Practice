import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Gap, Header, Content } from '../../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
});

export default function OtherWirelessConnections({navigation}) {
    const [USBTethering, setUSBTethering] = useState(false);
    const [bluetoothTethering, setBluetoothTethering] = useState(false);
    const [DLNA, setDLNA] = useState(false);

    return(
        <View style={styles.screen}>
            <Header title="SIM Card & Cellular" back={["Settings", () => navigation.goBack()]} />
            <ScrollView>
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "VPN", arrow: true, onPress: () => console.log(`VPN`)},
                ]} />
                <Gap h={10} />
                <Content title="TETHERING" items={[
                    { key: 1, title: "Personal Hotspot", arrow: true, onPress: () => navigation.push("Personal Hotspot")},
                    { key: 2, title: "USB Tethering", switcH: {onValueChange: () => setUSBTethering, value: USBTethering}},
                    { key: 3, title: "Bluetooth Tethering", switcH: {onValueChange: () => setBluetoothTethering, value: bluetoothTethering}},
                ]} />
                <Gap h={10} />
                <Content title="WIRELESS TRANSPORT" items={[
                    { key: 1, title: "Wi-Fi Direct", arrow: true, onPress: () => console.log(`Wi-Fi Direct`)},
                    { key: 2, title: "Multi-screen Interaction", arrow: true, onPress: () => console.log(`Multi-screen Interaction`)},
                    { key: 3, title: "DLNA", switcH: {onValueChange: () => setDLNA, value: DLNA}},
                ]} />
                <Gap h={12.5} />
            </ScrollView>
        </View>
    );
}
