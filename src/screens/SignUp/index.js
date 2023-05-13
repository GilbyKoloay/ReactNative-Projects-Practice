import { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

// styles
import globalStyle from '../../globalStyle';
import style from './style.js';

// components
import {
  Header,
  Gap,
  Input,
  Button
} from '../../components';



export default function SignUp({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [fullNameError, setFullNameError] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');
  const [emailAddressError, setEmailAddressError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);



  function kembaliOnPress() {
    navigation.pop();
  }

  function addPhotoOnPress() {
    console.log('addPhotoOnPress');
  }

  function signUpOnPress() {
    console.log(`Full Name = ${fullName} | Email Address = ${emailAddress} | Password = ${password}`);
    navigation.replace('Home');
  }



  return (
    <View>
      <Header useIcon={true} title='Kembali' titleOnPress={kembaliOnPress} />
      <View style={globalStyle.screen}>
        <TouchableOpacity style={style.addPhotoContainer}>
          <View style={style.addPhoto} onPress={addPhotoOnPress} activeOpacity={0.5}>
            <Text style={style.addPhotoText}>Add Photo</Text>
          </View>
        </TouchableOpacity>

        <Gap h={16} />
        <Input
          label='Full Name'
          placeholder='Type your full name'
          value={fullName}
          onChangeText={value => setFullName(value)}
          isError={fullNameError}
        />
        <Gap h={16} />
        <Input
          label='Email Address'
          type='email-address'
          placeholder='Type your email address'
          value={emailAddress}
          onChangeText={value => setEmailAddress(value)}
          isError={emailAddressError}
        />
        <Gap h={16} />
        <Input
          label='Password'
          placeholder='Type your password'
          value={password}
          onChangeText={value => setPassword(value)}
          isError={passwordError}
          hideText={true}
        />

        <Gap h={24} />
        <Button label='SignUp' onPress={signUpOnPress} />
      </View>
    </View>
  );
};
