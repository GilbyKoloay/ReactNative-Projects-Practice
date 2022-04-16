import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch, TouchableHighlight } from 'react-native';
import { arrowRight as Arrow } from '../assets/icons';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginHorizontal: 5,
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: 0.25,
        borderRadius: 5,
    },
    icon: (color) => ({
        marginRight: 10,
        height: 27.5,
        width: 27.5,
        borderRadius: 7.5,
        backgroundColor: (color),
    }),
    itemText: {
        flex: 1,
        fontFamily: 'Roboto',
        color: '#2F2F2F',
        fontSize: 15,
    },
    title: {
        marginLeft: 10,
        marginBottom: 5,
        fontFamily: 'Roboto',
        color: '#737373',
        fontSize: 10,
    }
});

export default function Content({title=null, items=[{title: "<Content>"}]}) {
    const [airplaneMode, setAirplaneMode] = useState(false);

    return(
        <View>
            {(title !== null) && <Text style={styles.title}>{title}</Text>}
            <View style={styles.container}>
            {items.map(({key, icon=null, title="<Item_Title>", switcH=false, text=null, arrow=false, onPress=null}, index) => {
                return(
                    <View key={key}>
                        <TouchableHighlight style={{paddingVertical: 10, paddingHorizontal: 15}} underlayColor='#E4E4E4' onPress={onPress}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between'}}>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems:'center'}}>
                                        {(icon !== null) && <View style={styles.icon(icon)}></View>}
                                        <Text style={styles.itemText}>{title}</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        {(switcH === true) && <Switch 
                                            style={{marginLeft: 10}} 
                                            thumbColor="#FFFFFF" 
                                            trackColor={{false: '#E0E0E0', true:'#2AC795'}} 
                                            onValueChange={() => setAirplaneMode((airplaneMode) ? false : true)}
                                            value={airplaneMode}
                                        />}
                                        {(text !== null) && <Text style={{marginLeft: 10}}>{text}</Text>}
                                        {(arrow === true) && <Arrow style={{marginLeft: 10}} />}
                                    </View>
                                </View>
                            </View>
                        </TouchableHighlight>
                        {(index !== items.length-1) && <View style={{marginLeft: (icon === null) ? 15 : 52.5, borderWidth: 0.25, borderColor: '#DEDEDE'}} />}
                    </View>
                )
            })}
            </View>
        </View>
    );
}
