import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Gap, Header, Content } from '../../components';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#E6E6E6',
    },
});

export default function AdditionalSettings({navigation}) {
    const [showPasswcode, setShowPasswcode] = useState(true);
    const [unknownSourceAppInstallation, setUnknownSourceAppInstallation] = useState(false);
    const [join_UserExperienceProject_, setJoin_UserExperienceProject_] = useState(false);

    return(
        <View style={styles.screen}>
            <Header back={["Additional Settings", () => navigation.goBack()]} title="Security & Privacy" />
            <ScrollView>
                <Gap h={10} />
                <Content title="DEVICE SECURITY" items={[
                    {key: 1, title: "Smart Lock", arrow: true, onPress: () => console.log(`Smart Lock`)},
                ]} />
                <Gap h={10} />
                <Content title="ENCRYPTION AND LOCKING" items={[
                    {key: 1, title: "Set up SIM card lock", arrow: true, onPress: () => console.log(`Set up SIM and card lock`)},
                    {key: 2, title: "Show passcode", switcH: {onValueChange: () => setShowPasswcode, value: showPasswcode}},
                ]} />
                <Gap h={10} />
                <Content title="DEVICE ADMINISTRATION" items={[
                    {key: 1, title: "Unknown Source App Installation", switcH: {onValueChange: () => setUnknownSourceAppInstallation, value: unknownSourceAppInstallation}},
                    {key: 2, title: "Device Manager", arrow: true, onPress: () => console.log(`Device Manager`)},
                ]} />
                <Gap h={10} />
                <Content title="CREDENTIAL STORAGE" items={[
                    {key: 1, title: "Storage TYpe", text: "hardware Support"},
                    {key: 2, title: "Trusted Certificates", arrow: true, onPress: () => console.log(`Trusted Certificates`)},
                    {key: 3, title: "Install Certificates from Storage", arrow: true, onPress: () => console.log(`Install Certificates from Storage`)},
                    {key: 4, title: "Remove All User Certificates", arrow: true, onPress: () => console.log(`Remove All User Certificates`)},
                ]} />
                <Gap h={10} />
                <Content title="PRIVACY" items={[
                    {key: 1, title: "Location Information", text: "Close", arrow: true, onPress: () => console.log(`Location Information`)},
                    {key: 2, title: 'Join "User Experience Project"', switcH: {onValueChange: () => setJoin_UserExperienceProject_, value: join_UserExperienceProject_}},
                ]} />
                <Gap h={12.5} />
            </ScrollView>
        </View>
    );
}
