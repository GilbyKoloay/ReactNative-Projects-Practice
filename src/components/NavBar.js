import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// assets - icons
import {
  Home,
  Pinpoint,
  Ticket,
  Boxes,
  Person,
} from '../assets/icons';

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
  },
  buttonSelectedCircle: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 62.5,
    height: 62.5,
    borderRadius: 62.5/2,
    borderWidth: 1.5,
    borderColor: '#F9655C',

    shadowColor: "black",
    elevation: 5,
  },
});

export default function NavBar() {
  return(
    <LinearGradient 
      style={styles.navbar} 
      colors={['#FA6900','#DA004E']} 
      useAngle={ true } 
      angle={ 135 } 
      angleCenter={{ x: 0.5, y: 0.5 }}
    >
      <TouchableOpacity style={styles.button} activeOpacity={0.5}><Home /></TouchableOpacity>
      <TouchableOpacity style={styles.button} activeOpacity={0.5}><Pinpoint /></TouchableOpacity>
      <TouchableOpacity style={styles.button} activeOpacity={0.5}>
        <LinearGradient 
          style={styles.buttonSelectedCircle} 
          colors={['#FA6900','#DA004E']} 
          useAngle={ true } 
          angle={ 135 } 
          angleCenter={{ x: 0.5, y: 0.5 }}
        >
          <Ticket />
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} activeOpacity={0.5}><Boxes /></TouchableOpacity>
      <TouchableOpacity style={styles.button} activeOpacity={0.5}><Person /></TouchableOpacity>
    </LinearGradient>
  );
};
