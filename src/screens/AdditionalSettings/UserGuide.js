import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Gap, Header, Content } from '../../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
});

export default function UserGuide({navigation}) {
    return(
        <View style={styles.screen}>
            <Header back={["Additional Settings", () => navigation.goBack()]} title="UserGuide" />
            <ScrollView>
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Operation Skills", arrow: true, onPress: () => console.log(`Operation Skills`)},
                    {key: 2, title: "Troubleshooting", arrow: true, onPress: () => console.log(`Troubleshooting`)},
                    {key: 3, title: "Product Security", arrow: true, onPress: () => navigation.push("Product Security")},
                    {key: 4, title: "After-Sales Service", arrow: true, onPress: () => navigation.push("After-Sales Service")},
                ]} />
                <Gap h={12.5} />
            </ScrollView>
        </View>
    );
}
