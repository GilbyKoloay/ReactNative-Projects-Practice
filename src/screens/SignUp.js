import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, Image, Text} from 'react-native';

// components
import {
  Gap,
  InputSmall,
  Button,
} from '../components';

// assets - images
import {
  Cinema,
} from '../assets/images';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 100,
    paddingHorizontal: 20,
    backgroundColor: '#130B2B',
    justifyContent: 'space-between',
  },
  text: (size) => ({
    fontFamily: 'Poppins-Light',
    fontSize: size,
    color: 'white',
    textAlign: 'center',
  }),
});

export default function SignUp({navigation}) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [CI, setCI] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');

  const SignUpOnPress = () => {
    (name !== '' && lastName !== '' && CI !== '' && email !== '' && phoneNumber !== '' && dateOfBirth !== '') && navigation.replace('MovieList');
  };

  return(
    <View style={styles.screen}>
      <View>
        <Image source={Cinema} style={{alignSelf: 'center'}} />
        <Gap h={10} />
        <Text style={styles.text(15)}>Enter your data</Text>
        <Gap h={30} />
        <ScrollView>
          <InputSmall placeholder='Name' onChangeText={setName} />
          <Gap h={10} />
          <InputSmall placeholder='Last Name' onChangeText={setLastName} />
          <Gap h={10} />
          <InputSmall placeholder='C.I' onChangeText={setCI} />
          <Gap h={10} />
          <InputSmall placeholder='Email' onChangeText={setEmail} />
          <Gap h={10} />
          <InputSmall placeholder='Phone Number' onChangeText={setPhoneNumber} />
          <Gap h={10} />
          <InputSmall placeholder='Date of Birth' onChangeText={setDateOfBirth} />
          <Gap h={10} />
          <InputSmall placeholder='Gender' optional={true} onChangeText={setGender} />
          <Gap h={10} />
          <InputSmall placeholder='Password' optional={true} onChangeText={setPassword} />
        </ScrollView>
        <Gap h={15} />
        <Text style={styles.text(12.5)}>By registering with Cinema you are accepting the terms and data management policies</Text>
      </View>
      <Button title='Sign Up' onPress={SignUpOnPress} />
    </View>
  );
};
