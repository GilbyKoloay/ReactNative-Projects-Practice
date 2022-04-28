import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Gap, Header, Content } from '../../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
});

export default function Notification_StatusBar({navigation}) {
    const [batteryPercentage, setBatteryPercentage] = useState(true);
    const [showRealTimeNetworkSpeed, setShowRealTimeNetworkSpeed] = useState(true);
    // const [carrierInfo, setCarrierInfo] = useState(false);
    const [showDataUsageAtTheBottom, setShowDataUsageAtTheBottom] = useState(true);
    const [accessOnLockScreen, setAccessOnLockScreen] = useState(false);
    const [turnOnScreenForNotifications, setTurnOnScreenForNotifications] = useState(true);

    return(
        <View style={styles.screen}>
            <Header back={["Settings", () => navigation.goBack()]} title="Notification & Status Bar" />
            <ScrollView>
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Manage Notifications", arrow: true, onPress: () => console.log(`Manage Notifications`)},
                ]} />
                <Gap h={10} />
                <Content title="STATUS BAR" items={[
                    { key: 1, title: "Battery Percentage", switcH: {onValueChange: () => setBatteryPercentage, value: batteryPercentage}},
                    { key: 2, title: "Show Real Time Network Speed", switcH: {onValueChange: () => setShowRealTimeNetworkSpeed, value: showRealTimeNetworkSpeed}},
                    { key: 3, title: "Carrier Info", switcH: {onValueChange: () => null, value: null}},
                ]} />
                <Gap h={10} />
                <Content title="NOTIFICATION BAR" items={[
                    { key: 1, title: "Show Data Usage at the Bottom", switcH: {onValueChange: () => setShowDataUsageAtTheBottom, value: showDataUsageAtTheBottom}},
                ]} />
                <Gap h={10} />
                <Content title="CONTROL CENTER" items={[
                    { key: 1, title: "Access on Lock Screen", switcH: {onValueChange: () => setAccessOnLockScreen, value: accessOnLockScreen}},
                ]} />
                <Gap h={10} />
                <Content title="OTHER" items={[
                    { key: 1, title: "Turn On Screen for Notifications", switcH: {onValueChange: () => setTurnOnScreenForNotifications, value: turnOnScreenForNotifications}},
                ]} />
                <Gap h={12.5} />
            </ScrollView>
        </View>
    );
}
