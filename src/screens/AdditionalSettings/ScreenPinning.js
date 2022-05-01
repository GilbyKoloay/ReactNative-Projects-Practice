import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Gap, Header, Content } from '../../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
});

export default function ScreenPinning({navigation}) {
    const [screenPinning, setScreenPinning] = useState(false);

    return(
        <View style={styles.screen}>
            <Header back={["Additional Settings", () => navigation.goBack()]} title="Screen Pinning" />
            <ScrollView>
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Screen Pinning", switcH: {onValueChange: () => setScreenPinning, value: screenPinning}},
                ]} />
                <Gap h={12.5} />
            </ScrollView>
        </View>
    );
}
