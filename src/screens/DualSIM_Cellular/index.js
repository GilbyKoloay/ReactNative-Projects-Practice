import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Gap, Header, Content } from '../../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
});

export default function DualSIM_Cellular({navigation}) {
    const [mobileData, setMobileData] = useState(false);
    const changeMobileData = (val) => {
        setMobileData(val);
    }

    return(
        <View style={styles.screen}>
            <Header title="SIM Card & Cellular" back={["Settings", () => navigation.goBack()]} />
            <ScrollView>
                <Gap h={10} />
                <Content title="SIM INFO & SETTINGS" items={[
                    {key: 1, icon: {color: '#58CAFF'}, title: "SIM1", arrow: true, onPress: () => navigation.push("SIM Info & Settings")},
                ]} />
                <Gap h={10} />
                <Content title="GENERAL SETTING" items={[
                    { key: 1, title: "Mobile Data", switcH: {onValueChange: () => setMobileData, value: mobileData}},
                    { key: 2, title: "Preferred Network Type", text: "4G/3G/2G (Auto)", arrow: true, onPress: () => console.log(`Preferred Network Type`)},
                ]} />
                <Gap h={10} />
                <Content title="MOBILE DATA USAGE" items={[
                    { key: 1, title: "Data Used This Month", text: "1.46 GB"},
                    { key: 2, title: "Start Date for Data Usage Stats", text: "Monthly (day 1)", arrow: true, onPress: () => console.log(`Start Date for Data Usage Stats`)},
                    { key: 3, title: "Daily Data Reminder", text: "Do Not Remind", arrow: true, onPress: () => console.log(`Daily Data Reminder`)},
                ]} />
                <Gap h={10} />
                <Content title="INTERNET CONNECTION CONTROL" items={[
                    { key: 1, title: "Apps using Wi-Fi and Mobile Data", arrow: true, onPress: () => console.log(`Apps usign wi-Fi and Mobile Data`)},
                ]} />
                <Gap h={12.5} />
            </ScrollView>
        </View>
    );
}
