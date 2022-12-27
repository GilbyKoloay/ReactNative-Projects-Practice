import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';

// assets - icons
import {
  Eye,
} from '../assets/icons';
// import Eye from '../assets/icons/Eye.svg';

const styles = StyleSheet.create({
  titleText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    marginLeft: 15,
    fontFamily: 'Poppins-Regular',
    fontSize: 17.5,
    color: 'white',
  },
  text: {
    fontFamily: 'Poppins-Light',
    fontSize: 12.5,
    color: 'white',
  },
  textInputWrapper: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 12.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  textInput: {
    fontFamily: 'Poppins-Light',
    fontSize: 17.5,
    color: 'white',
    flex: 1,
    paddingVertical: 15,
  },
});

export default function Input({
  title = '<Input Title>',
  text = '',
  placeholder = '<Input Placeholder>',
  onChangeText = () => console.log(`onChange is undefined`),
  secure = false
}) {
  const [visible, setVisible] = useState(secure);

  const EyeOnPress = () => {
    setVisible(!visible);
  };

  return(
    <View>
      <View style={styles.titleText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.textInputWrapper}>
        <TextInput 
          placeholder={placeholder} 
          placeholderTextColor='white' 
          style={styles.textInput} 
          onChangeText={onChangeText} 
          secureTextEntry={visible} 
        />
        {secure && <TouchableOpacity onPress={() => EyeOnPress()}><Eye /></TouchableOpacity>}
      </View>
    </View>
  );
};
