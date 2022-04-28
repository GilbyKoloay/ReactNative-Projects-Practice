import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Gap, Header, Content } from '../../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
});

export default function Battery({navigation}) {
    const [powerSaving, setPowerSaving] = useState(true);

    return(
        <View style={styles.screen}>
            <Header back={["Settings", () => navigation.goBack()]} title="Battery" />
            <ScrollView>
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Power Saving", switcH: {onValueChange: () => setPowerSaving, value: powerSaving}},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Energy Saver", arrow: true, onPress: () => console.log(`Energy Saver`)},
                ]} />
                <Gap h={12.5} />
            </ScrollView>
        </View>
    );
}
