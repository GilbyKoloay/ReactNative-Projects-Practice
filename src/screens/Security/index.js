import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Gap, Header, Content } from '../../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
});

export default function Security({navigation}) {
    const [enableManually, setEnableManually] = useState(false);
    const [enableAutomatically, setEnableAutomatically] = useState(false);
    const [allowNotifications, setAllowNotifications] = useState(false);
    const [ringForRepeatedCalls, setRingForRepeatedCalls] = useState(false);

    return(
        <View style={styles.screen}>
            <Header back={["Settings", () => navigation.goBack()]} title="Security" />
            <ScrollView>
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Permissions", icon: {color: '#FAA74F'}, arrow: true, onPress: () => console.log(`Permissions`)},
                    {key: 2, title: "App Lock", icon: {color: '#40D78A'}, arrow: true, onPress: () => console.log(`App Lock`)},
                    {key: 3, title: "Payment Protection", icon: {color: '#58CAFF'}, arrow: true, onPress: () => console.log(`Payment Protection`)},
                    {key: 4, title: "Kids Space", icon: {color: '#FBA750'}, arrow: true, onPress: () => console.log(`Kids Space`)},
                    {key: 5, title: "Anti-harassment/Fraud", icon: {color: '#FD7565'}, arrow: true, onPress: () => navigation.push("Anti-harassment/Fraud")},
                    {key: 6, title: "Pseudo Base Station Blocking", icon: {color: '#FD7464'}, arrow: true, onPress: () => console.log(`Pseudo Base Station Blocking`)},
                    {key: 7, title: "Floating Windows", icon: {color: '#8BAAFF'}, arrow: true, onPress: () => console.log(`Floating Windows`)},
                ]} />
                <Gap h={12.5} />
            </ScrollView>
        </View>
    );
}
