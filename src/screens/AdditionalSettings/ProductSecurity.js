import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Gap, Header, Content } from '../../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
});

export default function ProductSecurity({navigation}) {
    return(
        <View style={styles.screen}>
            <Header back={["User Guide", () => navigation.goBack()]} title="Product Security" />
            <ScrollView>
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Statement", arrow: true, onPress: () => console.log(`Statement`)},
                    {key: 2, title: "Safety Precautions", arrow: true, onPress: () => console.log(`Safety Precautions`)},
                    {key: 3, title: "Health and Safety", arrow: true, onPress: () => console.log(`Health and Safety`)},
                ]} />
                <Gap h={12.5} />
            </ScrollView>
        </View>
    );
}
