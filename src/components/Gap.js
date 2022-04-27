import React from 'react';
import { View } from 'react-native';

export default function Header({h=0, w=0}) {
    return(
        <View style={{height: h, width: w}}></View>
    );
}
