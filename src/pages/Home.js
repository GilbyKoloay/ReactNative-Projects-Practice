import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, Image } from 'react-native';

import { Header, Gap } from '../components';
import { DefaultImage, BouquetFlower, BouquetCharacter, BouquetMoney } from '../assets/images';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F6F6F6',
    },
    content: {
        paddingLeft: 41,
        paddingRight: 40,
    },
    item: (color) => ({
        paddingVertical: 19,
        paddingLeft: 19,
        paddingRight: 13,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: color,
        borderRadius: 15,
        shadowColor: '#00000040',
        // shadowOffset: {
        //     width: 1,
        //     height: 1,
        // },
        // shadowOpacity: 0.4,
        // shadowRadius: 3,
        elevation: 4,
    }),
    itemTitleText: {
        flex: 1,
        flexDirection: 'column',
    },
    itemTitle: {
        marginBottom: 1,
        fontFamily: 'Inter-Regular',
        color: '#000000CC',
        fontSize: 20,
    },
    itemText: {
        fontFamily: 'Inter-Regular',
        color: '#00000080',
        fontSize: 16,
    },
    itemImage: {
        height: 150,
        width: 151,
    }
});

export default function Home({navigation}) {
    const iconProfilePress = () => {
        navigation.push('Profile');
    }

    const bouquetFlowerPress = () => {
        
    }

    const bouquetCharacterPress = () => {
        
    }

    const bouquetMoneyPress = () => {
        
    }

    const Item = ({color="#000000", title="<Item_Title>", text="<Item_Text>", image=DefaultImage, onPress=null}) => {
        return(
            <TouchableOpacity style={styles.item(color)} activeOpacity={0.5} onPress={onPress}>
                <View style={styles.itemTitleText}>
                    <Text style={styles.itemTitle}>{title}</Text>
                    <Text style={styles.itemText}>{text}</Text>
                </View>
                <Image source={image} style={styles.itemImage} />
            </TouchableOpacity>
        );
    }

    return(
        <View style={styles.screen}>
            <Header icon="Profile" title="HI, Aprayiel!" onPress={iconProfilePress} />
            <Gap h={73} />
            <ScrollView style={styles.content}>
                {Item({color: '#FFE2E2', title: "BOUQUET FLOWER", text: "start from 75k", image: BouquetFlower, onPress: bouquetFlowerPress})}
                <Gap h={27} />
                {Item({color: '#FFC7C7', title: "BOUQUET CHARACTER", text: "start from 75k", image: BouquetCharacter, onPress: bouquetCharacterPress})}
                <Gap h={27} />
                {Item({color: '#FFE2E2', title: "BOUQUET MONEY", text: "start from 75k", image: BouquetMoney, onPress: bouquetMoneyPress})}
                <Gap h={59} />
            </ScrollView>
        </View>
    );
}
