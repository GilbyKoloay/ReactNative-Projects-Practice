import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Gap, Header, Content } from '../../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
});

export default function SIM1({navigation}) {
    const [enable, setEnable] = useState(false);
    const [DataRoaming, setDataRoaming] = useState(false);

    return(
        <View style={styles.screen}>
            <Header title="SIM Info & Settings" back={["SIM Card & Cellular", () => navigation.goBack()]} />
            <ScrollView>
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Enable", switcH: {use: true, onValueChange: () => setEnable, value: enable}},
                ]} />
                <Gap h={10} />
                <Content title="GENERAL SETTING" items={[
                    { key: 1, title: "SIM Card Name", text: "SIM1", arrow: true, onPress: () => console.log(`SIM Card Name`)},
                    { key: 2, title: "SIM Card Number", text: "Not set", arrow: true, onPress: () => console.log(`SIM Card Number`)},
                ]} />
                <Gap h={10} />
                <Content title="NETWORK SETTINGS" items={[
                    { key: 1, title: "Data Roaming", switcH: {use: true, onValueChange: () => setDataRoaming, value: DataRoaming}},
                    { key: 2, title: "Access Point Name", arrow: true, onPress: () => console.log(`Access Point Name`)},
                    { key: 3, title: "Carrier", text: "TELKOMSEL", arrow: true, onPress: () => navigation.push("Carrier")},
                ]} />
                <Gap h={12.5} />
            </ScrollView>
        </View>
    );
}
