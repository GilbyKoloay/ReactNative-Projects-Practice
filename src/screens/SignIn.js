import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

// components
import {
  Gap,
  InputBig,
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
    paddingBottom: 35,
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
  createAccountTextsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  createAccountText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    color: '#DA004E',
  },
});

export default function SignIn({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const SignInOnPress = () => {
    (username !== '' && password !== '') && navigation.replace('MovieList');
  };

  const CreateAccountOnPress = () => {
    navigation.push('SignUp');
  };

  return(
    <View style={styles.screen}>
      <View>
        <Image source={Cinema} style={{alignSelf: 'center'}} />
        <Gap h={25} />
        <Text style={styles.text(20)}>Enter your data</Text>
        <Gap h={30} />
        <InputBig title='Username' placeholder='Enter your username' onChangeText={setUsername} />
        <Gap h={30} />
        <InputBig 
          title='Password' 
          placeholder='Enter your password' 
          text='Forgot password?' 
          onChangeText={setPassword} 
          secure={true} 
        />
      </View>
      <View>
        <Button title='Sign In' onPress={SignInOnPress} />
        <Gap h={50} />
        <View style={styles.createAccountTextsWrapper}>
          <Text style={styles.text(15)}>Don't have an account? </Text>
          <TouchableOpacity style={styles.createAccountTextsWrapper} onPress={() => CreateAccountOnPress()}><Text style={styles.createAccountText}>Create one</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
