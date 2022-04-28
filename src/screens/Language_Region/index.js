import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Gap, Header, Content } from '../../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
});

export default function Language_Region({navigation}) {
    return(
        <View style={styles.screen}>
            <Header back={["Settings", () => navigation.goBack()]} title="Language & Region" />
            <ScrollView>
                <Gap h={10} />
                <Content title="Region" items={[
                    {key: 1, title: "Region", text: "Indonesia", arrow: true, onPress: () => console.log(`Region`)},
                ]} />
                <Gap h={10} />
                <Content title="Language" items={[
                    {key: 1, title: "Language", text: "English (United States)", arrow: true, onPress: () => console.log(`Language`)},
                ]} />
                <Gap h={12.5} />
            </ScrollView>
        </View>
    );
}
