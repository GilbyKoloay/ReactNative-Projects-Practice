import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Gap, Header, Content } from '../../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
});

export default function Carrier({navigation}) {
    const [chooseAutomatically, setchooseAutomatically] = useState(false);

    return(
        <View style={styles.screen}>
            <Header title="Carrier" back={["SIM Info & Settings", () => navigation.goBack()]} />
            <ScrollView>
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Choose Automatically", switcH: {onValueChange: () => setchooseAutomatically, value: chooseAutomatically}},
                ]} />
                <Gap h={12.5} />
            </ScrollView>
        </View>
    );
}
