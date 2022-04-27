import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Gap, Header, Content } from '../../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
});

export default function PersonalHotspot({navigation}) {
    const [enableYourPersonalHotspot, setEnableYourPersonalHotspot] = useState(false);

    return(
        <View style={styles.screen}>
            <Header title="Personal Hotspot" back={["Back", () => navigation.goBack()]} />
            <ScrollView>
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Enable Your Personal Hotspot", switcH: {onValueChange: () => setEnableYourPersonalHotspot, value: enableYourPersonalHotspot}},
                ]} />
                <Gap h={12.5} />
                <Content items={[
                    { key: 1, title: "Personal Hotspot Settings", arrow: true, onPress: () => console.log(`Personal Hotspot Settings`)},
                ]} />
                <Gap h={12.5} />
            </ScrollView>
        </View>
    );
}
