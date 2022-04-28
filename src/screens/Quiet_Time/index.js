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
    const [enableManually, setEnableManually] = useState(false);
    const [enableAutomatically, setEnableAutomatically] = useState(false);
    const [allowNotifications, setAllowNotifications] = useState(false);
    const [ringForRepeatedCalls, setRingForRepeatedCalls] = useState(false);

    return(
        <View style={styles.screen}>
            <Header back={["Settings", () => navigation.goBack()]} title="Quiet Time" />
            <ScrollView>
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Enable Manually", switcH: {onValueChange: () => setEnableManually, value: enableManually}},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Enable Automatically", switcH: {onValueChange: () => setEnableAutomatically, value: enableAutomatically}},
                ]} />
                <Gap h={10} />
                <Content title="ALLOWED CONTENT" items={[
                    {key: 1, title: "Allow Notifications", switcH: {onValueChange: () => setAllowNotifications, value: allowNotifications}},
                    {key: 2, title: "Allow Messages From", text: "None", arrow: true, onPress: () => console.log(`Allow Messages From`)},
                    {key: 3, title: "Allow Calls From", text: "From Favorites", arrow: true, onPress: () => console.log(`Allow Calls From`)},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Ring for Repeated Calls", switcH: {onValueChange: () => setRingForRepeatedCalls, value: ringForRepeatedCalls}},
                ]} />
                <Gap h={12.5} />
            </ScrollView>
        </View>
    );
}
