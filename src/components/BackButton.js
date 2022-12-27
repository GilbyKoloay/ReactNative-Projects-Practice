import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// assets - icons
import {
  ArrowLeft
} from '../assets/icons';

const styles = StyleSheet.create({
  button: {
    height: 43.75,
    width: 43.75,
    borderRadius: 43.75/2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function BackButton({
  onPress = () => console.log(`onPress is undefined`)
}) {
  return(
    <TouchableOpacity onPress={() => onPress()} activeOpacity={0.5}>
      <LinearGradient 
        style={styles.button} 
        colors={['#F34C30','#DA004E']} 
        useAngle={ true } 
        angle={ 135 } 
        angleCenter={{ x: 0.5, y: 0.5 }}
      >
        <ArrowLeft />
      </LinearGradient>
    </TouchableOpacity>
  );
};
