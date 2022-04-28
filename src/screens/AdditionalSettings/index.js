import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Gap, Header, Content } from '../../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
});

export default function AdditionalSettings({navigation}) {
    const [OTGConnection, setOTGConnection] = useState(false);

    return(
        <View style={styles.screen}>
            <Header back={["Settings", () => navigation.goBack()]} title="AdditionalSettings" />
            <ScrollView>
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Search", arrow: true, onPress: () => console.log(`Search`)},
                    {key: 2, title: "OPPO Cloud", arrow: true, onPress: () => console.log(`OPPO Cloud`)},
                    {key: 3, title: "Download Management", arrow: true, onPress: () => console.log(`Download Management`)},
                    {key: 4, title: "User Guide", arrow: true, onPress: () => navigation.push("User Guide")},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Device ON/OFF Preset", arrow: true, onPress: () => console.log(`Device ON/OFF Preset`)},
                    {key: 2, title: "Security & Privacy", arrow: true, onPress: () => navigation.push("Security & Privacy")},
                    {key: 3, title: "SIM Toolkit", arrow: true, onPress: () => console.log(`SIM Toolkit`)},
                    {key: 4, title: "Accessibility", arrow: true, onPress: () => console.log(`Accessibility`)},
                    {key: 5, title: "Developer Options", arrow: true, onPress: () => console.log(`Developer Options`)},
                    {key: 6, title: "OTG Connection", switcH: {onValueChange: () => setOTGConnection, value: OTGConnection}},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Back up and reset", arrow: true, onPress: () => console.log(`Back up and reset`)},
                ]} />
                <Gap h={12.5} />
            </ScrollView>
        </View>
    );
}
