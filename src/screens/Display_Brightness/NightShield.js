import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Gap, Header, Content } from '../../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
});

export default function NightShield({navigation}) {
    const [scheduledTime, setScheduledTime] = useState(false);
    const [enableNow, setEnableNow] = useState(false);

    return(
        <View style={styles.screen}>
            <Header title="SIM Card & Cellular" back={["Settings", () => navigation.goBack()]} />
            <ScrollView>
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Scheduled Time", switcH: {onValueChange: () => setScheduledTime, value: scheduledTime}},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Enable Now", switcH: {onValueChange: () => setEnableNow, value: enableNow}},
                ]} />
                <Gap h={10} />
            </ScrollView>
        </View>
    );
}
