import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Gap, Header, Content } from '../../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
});

export default function BlockMessages({navigation}) {
    const [blockMessagesFromUnknownNo_, setBlockMessagesFromUnknownNo_] = useState(false);

    return(
        <View style={styles.screen}>
            <Header back={["Block", () => navigation.goBack()]} title="Block Messages" />
            <ScrollView>
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Keywords for Spam Messages", text:"None", arrow: true, onPress: () => console.log(`Keywords for Spam Messages`)},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Block Messages From Unknown No.", switcH: {onValueChange: () => setBlockMessagesFromUnknownNo_, value: blockMessagesFromUnknownNo_}},
                ]} />
                <Gap h={12.5} />
            </ScrollView>
        </View>
    );
}
