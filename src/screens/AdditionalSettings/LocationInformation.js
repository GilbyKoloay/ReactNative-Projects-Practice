import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Gap, Header, Content } from '../../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
});

export default function LocationInformation({navigation}) {
    const [locationService, setLocationService] = useState(false);

    return(
        <View style={styles.screen}>
            <Header back={["Additional Settings", () => navigation.goBack()]} title="Location Information" />
            <ScrollView>
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Location Service", switcH: {onValueChange: () => setLocationService, value: locationService}},
                ]} />
                <Gap h={12.5} />
            </ScrollView>
        </View>
    );
}
