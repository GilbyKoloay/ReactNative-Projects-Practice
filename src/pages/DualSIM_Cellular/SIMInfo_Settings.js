import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Gap, Header, Content } from '../../components';

const styles = StyleSheet.create({
    
});

export default function SIMInfo_Settings({navigation}) {
    return(
        <View>
            <Header title="SIM Info & Settings" back={["SIM Card & Cellular", () => navigation.pop()]} />
            <Gap h={15} />
            <Content items={[
                {key: 1, title: "Enable", switcH: true},
            ]} />
            <Gap h={10} />
            <Content title="CARD INFO" items={[
                {key: 1, title: "SIM Card Name", text: "SIM1", arrow: true, onPress: () => console.log(`SIM Card Name`)},
                {key: 2, title: "SIM Card Number", text: "Not set", arrow: true, onPress: () => console.log(`SIM Card Number`)},
            ]} />
            <Gap h={10} />
            <Content title="NETWORK SETTINGS" items={[
                {key: 1, title: "Data Roaming", switcH: true},
                {key: 2, title: "Access Points Name", arrow: true, onPress: () => console.log(`Access Points Name`)},
                {key: 3, title: "Carrier", text: "TELKOMSEL", arrow: true, onPress: () => console.log(`Carrier`)},
            ]} />
        </View>
    );
}
