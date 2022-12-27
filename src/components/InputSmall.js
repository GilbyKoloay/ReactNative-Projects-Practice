import React from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  textInputTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    margin: 0,
    padding: 0,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: 'white',
    flex: 1,
    paddingRight: 15,
  },
  text: {
    fontFamily: 'Poppins-Light',
    fontSize: 10,
    color: 'white',
  },
});

export default function InputSmall({
  placeholder = '<InputSmall Placeholder>',
  optional = false,
  onChangeText = () => console.log(`onChange is undefined`),
}) {
  return(
    <View>
      <View style={styles.textInputTextWrapper}>
        <TextInput 
          placeholder={placeholder} 
          placeholderTextColor='white' 
          style={styles.textInput} 
          onChangeText={onChangeText} 
        />
        {optional && <Text style={styles.text}>Optional</Text>}
      </View>
      <LinearGradient 
        style={{height: 1.5}} 
        colors={['#F34C30','#DA004E']} 
        useAngle={ true } 
        angle={ 90 } 
        angleCenter={{ x: 0.5, y: 0.5 }}
      />
    </View>
  );
};
