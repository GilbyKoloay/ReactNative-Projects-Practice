import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Gap, Header, Content } from '../../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
});

export default function After_SalesService({navigation}) {
    return(
        <View style={styles.screen}>
            <Header back={["User Guide", () => navigation.goBack()]} title="After-Sales Service" />
            <ScrollView>
                <Gap h={12.5} />
                <Content items={[
                    {key: 1, title: "Customer service info", arrow: true, onPress: () => console.log(`Customer service info`)},
                    {key: 2, title: "E-Warranty Card", arrow: true, onPress: () => console.log(`E-Warranty Card`)},
                    {key: 3, title: "Help", arrow: true, onPress: () => console.log(`Help`)},
                ]} />
                <Gap h={12.5} />
            </ScrollView>
        </View>
    );
}
