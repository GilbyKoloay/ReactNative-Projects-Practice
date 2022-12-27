import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  button: {
    padding: 12.5,
    borderRadius: 15,
  },
  backgroundColorAlignment: {
    x: 0.25,
    y: 0.5,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
});

export default function Button({
  title = '<Button Text>',
  onPress = console.log('onPress is undefined'),
}) {
  return(
    <TouchableOpacity onPress={onPress} activeOpacity={0.75}>
      <LinearGradient 
        style={styles.button} 
        colors={['#F34C30','#DA004E']} 
        useAngle={ true } 
        angle={ 135 } 
        angleCenter={{ x: 0.5, y: 0.5 }}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
