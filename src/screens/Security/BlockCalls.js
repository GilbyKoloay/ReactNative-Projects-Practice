import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Gap, Header, Content } from '../../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
});

export default function BlockCalls({navigation}) {
    const [blockOneRingIncomingCalls, setBlockOneRingIncomingCalls] = useState(true);
    const [blockCallsFromHiddenNumbers, setBlockCallsFromHiddenNumbers] = useState(false);
    const [blockAllUnknownIncomingCalls, setBlockAllUnknownIncomingCalls] = useState(false);
    const [blockAllIncomingCalls, setBlockAllIncomingCalls] = useState(false);

    return(
        <View style={styles.screen}>
            <Header back={["Block", () => navigation.goBack()]} title="Block" />
            <ScrollView>
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Block One-ring Incoming Calls", switcH: {onValueChange: () => setBlockOneRingIncomingCalls, value: blockOneRingIncomingCalls}},
                    {key: 2, title: "Block Calls From Hidden Numbers", switcH: {onValueChange: () => setBlockCallsFromHiddenNumbers, value: blockCallsFromHiddenNumbers}},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Block All Unknown Incoming Calls", switcH: {onValueChange: () => setBlockAllUnknownIncomingCalls, value: blockAllUnknownIncomingCalls}},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Block All Incoming Calls", switcH: {onValueChange: () => setBlockAllIncomingCalls, value: blockAllIncomingCalls}},
                ]} />
                <Gap h={12.5} />
            </ScrollView>
        </View>
    );
}
