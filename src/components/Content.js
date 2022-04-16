import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginHorizontal: 5,
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: 0.25,
    },
    icon: (color) => ({
        marginRight: 10,
        height: 27.5,
        width: 27.5,
        borderRadius: 7.5,
        backgroundColor: (color),
    }),
    text: {
        fontFamily: 'Roboto',
        color: '#2F2F2F',
        fontSize: 15,
    },
});

export default function Content({items=null}) {
    const [airplaneMode, setAirplaneMode] = useState(false);

    return(
        <View style={styles.container}>
            {items.map(({key, color='black', title="<Item_Title>", switchh=false, text=null, arrow=false, onPress=null}, index) => {
                return(
                    <View key={key}>
                        <TouchableHighlight style={{paddingVertical: 10, paddingHorizontal: 15}} underlayColor='#E4E4E4' onPress={onPress}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between'}}>
                                    <View style={{flex: 1, flexDirection: 'row', alignItems:'center'}}>
                                        <View style={styles.icon(color)}></View>
                                        <Text style={styles.text}>{title}</Text>
                                    </View>
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        {(switchh === true) && <Switch 
                                            style={{marginLeft: 10}} 
                                            thumbColor="#FFFFFF" 
                                            trackColor={{false: '#E0E0E0', true:'#2AC795'}} 
                                            onValueChange={() => setAirplaneMode((airplaneMode) ? false : true)}
                                            value={airplaneMode}
                                        />}
                                        {(text !== null) && <Text style={{marginLeft: 10}}>{text}</Text>}
                                        {(arrow === true) && <View style={{marginLeft: 10, height: 10, width: 5, backgroundColor: '#CFCFCF'}} />}
                                    </View>
                                </View>
                            </View>
                        </TouchableHighlight>
                        {(index !== items.length-1) && <View style={{marginLeft: 52.5, borderWidth: 0.25, borderColor: '#DEDEDE'}} />}
                    </View>
                )
            })}
        </View>
    );
}
