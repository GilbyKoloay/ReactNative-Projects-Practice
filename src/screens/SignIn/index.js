import { useState } from 'react';
import { View } from 'react-native';

// styles
import globalStyle from '../../globalStyle';

// components
import {
  Header,
  Input,
  Gap,
  Button
} from '../../components';



export default function SignIn({ navigation }) {
  const [emailAddress, setEmailAddress] = useState('');
  const [isEmailAddressError, setIsEmailAddressError] = useState(true);
  const [password, setPassword] = useState('');
  const [isPasswordError, setIsPasswordError] = useState(true);



  function exitOnPress() {
    console.log('exitOnPress');
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

  function signInOnPress() {
    console.log(`Email Address = ${emailAddress} | Password = ${password}`);
    ((!isEmailAddressError) && (!isPasswordError)) && navigation.replace('Home');
  }

  function createNewAccountOnPress() {
    navigation.push('SignUp');
  }



  return (
    <View style={globalStyle.screenWrapper}>
      <Header title='Exit' titleOnPress={exitOnPress} />
      <View style={globalStyle.screen}>
        <Input
          label='Email Address'
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
          hideText={true}
          isError={isPasswordError}
        />
        
        <Gap h={28} />
        <Button label='Sign In' onPress={signInOnPress} />
        <Gap h={12} />
        <Button type='secondary' label='Create New Account' onPress={createNewAccountOnPress} />
      </View>
    </View>
  );
};
