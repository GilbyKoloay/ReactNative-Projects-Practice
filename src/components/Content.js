import React from 'react';
import { StyleSheet, View, Text, Switch, TouchableHighlight } from 'react-native';

import { ArrowRight as Arrow } from '../assets/icons';

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 7.5,
        flex: 1,
    },
    title: {
        marginLeft: 17.5,
        marginBottom: 5,
        fontFamily: 'Roboto',
        color: '#737373',
        fontSize: 10,
    },
    content: {
        backgroundColor: '#F5F5F5',
        borderRadius: 2.5,
        borderWidth: 0.25,
        borderColor: '#D1D1D1',
    },
    item: {
        height: 47.5,
        paddingHorizontal: 15,
        justifyContent: 'center',
    },
    itemWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemLeft: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    icon: (color) => ({
        height: 27.5,
        width: 27.5,
        marginRight: 10,
        borderRadius: 7.5,
        backgroundColor: (color),
    }),
    itemTitle: {
        fontFamily: 'Roboto',
        color: '#2F2F2F',
        fontSize: 15,
    },
    itemRight: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    itemText: {
        marginLeft: 10,
        fontFamily: 'Roboto',
        color: '#9E9E9E',
        fontSize: 12.5,
    },
    line: (icon) => ({
        marginLeft: (icon === null) ? 15 : 52.5,
        borderWidth: 0.25,
        borderColor: '#DEDEDE',
    }),
});

export default function Content({title=null, items=[{title: "<Content>"}]}) {
    return(
        <View style={styles.container}>
            {(title !== null) && <Text style={styles.title}>{title}</Text>}
            <View style={styles.content}>
                {items.map(({
                    key,
                    icon=null,
                    title="<Item_Title>",
                    switcH={
                        use: false,
                        onValueChange: null,
                        value: null,
                    },
                    text=null,
                    arrow=false,
                    onPress=null}, index) => {
                    return(
                        <View key={key}>
                            <TouchableHighlight style={styles.item} underlayColor='#E4E4E4' onPress={onPress}>
                                <View style={styles.itemWrap}>
                                    <View style={styles.itemLeft}>
                                        {(icon !== null) && <View style={styles.icon(icon)}></View>}
                                        <Text style={styles.itemTitle}>{title}</Text>
                                    </View>
                                    <View style={styles.itemRight}>
                                        {(switcH.use === true) && <Switch 
                                            thumbColor="#FFFFFF" 
                                            trackColor={{false: '#E0E0E0', true:'#2AC795'}} 
                                            onValueChange={switcH.onValueChange((switcH.value) ? false : true)}
                                            value={switcH.value}
                                        />}
                                        {(text !== null) && <Text style={styles.itemText}>{text}</Text>}
                                        {(arrow === true) && <Arrow style={{marginLeft: 10}} />}
                                    </View>
                                </View>
                            </TouchableHighlight>
                            {(index !== items.length-1) && <View style={styles.line(icon)} />}
                        </View>
                    )
                })}
            </View>
        </View>
    );
}
