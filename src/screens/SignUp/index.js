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
  const [isFullNameError, setIsFullNameError] = useState(true);
  const [emailAddress, setEmailAddress] = useState('');
  const [isEmailAddressError, setIsEmailAddressError] = useState(true);
  const [password, setPassword] = useState('');
  const [isPasswordError, setIsPasswordError] = useState(true);



  function kembaliOnPress() {
    navigation.pop();
  }

  function addPhotoOnPress() {
    console.log('addPhotoOnPress');
  }

  function fullNameOnChangeText(thisFullName) {
    setFullName(thisFullName);

    if(thisFullName === '') setIsFullNameError(true);
    else setIsFullNameError(false);
  }

  function emailAddressOnChangeText(thisEmailAddress) {
    setEmailAddress(thisEmailAddress);

    if(thisEmailAddress === '') setIsEmailAddressError(true);
    else setIsEmailAddressError(false);
  }
  
  function passwordOnChangeText(thisPassword) {
    setPassword(thisPassword);

    if(thisPassword === '') setIsPasswordError(true);
    else setIsPasswordError(false);
  }

  function signUpOnPress() {
    console.log(`Full Name = ${fullName} | Email Address = ${emailAddress} | Password = ${password}`);
    ((!isFullNameError) && (!isEmailAddressError) && (!isPasswordError)) && navigation.replace('Home');
  }



  return (
    <View style={globalStyle.screenWrapper}>
      <Header useIcon={true} title='Kembali' titleOnPress={kembaliOnPress} />
      <View style={globalStyle.screen}>
        <TouchableOpacity style={style.addPhotoWrapper}>
          <View style={style.addPhoto} onPress={addPhotoOnPress} activeOpacity={0.5}>
            <Text style={style.addPhotoText}>Add Photo</Text>
          </View>
        </TouchableOpacity>

        <Gap h={16} />
        <Input
          label='Full Name'
          placeholder='Type your full name'
          value={fullName}
          onChangeText={value => fullNameOnChangeText(value)}
          isError={isFullNameError}
        />
        <Gap h={16} />
        <Input
          label='Email Address'
          type='email-address'
          placeholder='Type your email address'
          value={emailAddress}
          onChangeText={value => emailAddressOnChangeText(value)}
          isError={isEmailAddressError}
        />
        <Gap h={16} />
        <Input
          label='Password'
          placeholder='Type your password'
          value={password}
          onChangeText={value => passwordOnChangeText(value)}
          isError={isPasswordError}
          hideText={true}
        />

        <Gap h={24} />
        <Button label='SignUp' onPress={signUpOnPress} />
      </View>
    </View>
  );
};
