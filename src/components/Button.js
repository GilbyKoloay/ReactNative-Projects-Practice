import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
    component: (type) => ({
        marginHorizontal: 24,
        paddingVertical: 12,
        backgroundColor: (type === 'Primary') ? '#5CE1E6' : (type === 'Secondary') ? '#5CE1E640' : 'white',
        borderRadius: 8,
        alignItems: 'center',
    }),
    text: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#020202',
    }
});

export default ({text="<Button - Text>", type=null, onPress=null}) => {
    return(
        <TouchableOpacity style={styles.component(type)} activeOpacity={0.5} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};
