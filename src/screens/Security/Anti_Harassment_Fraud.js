import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Gap, Header, Content } from '../../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
});

export default function Anti_Harassment_Fraud({navigation}) {
    return(
        <View style={styles.screen}>
            <Header back={["Security", () => navigation.goBack()]} title="Block" />
            <ScrollView>
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Block Calls", arrow: true, onPress: () => navigation.push("Block Calls")},
                    {key: 2, title: "Block Messages", arrow: true, onPress: () => navigation.push("Block Messages")},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Blacklist", text: "1 number(s)", arrow: true, onPress: () => console.log(`Blacklist`)},
                ]} />
                <Gap h={12.5} />
            </ScrollView>
        </View>
    );
}
