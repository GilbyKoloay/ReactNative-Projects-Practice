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
  const [emailAddressError, setEmailAddressError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);



  function exitOnPress() {
    console.log('exitOnPress');
  }
  
  function signInOnPress() {
    console.log(`Email Address = ${emailAddress} | Password = ${password}`);
    navigation.replace('Home');
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
          onChangeText={value => setEmailAddress(value)}
          isError={emailAddressError}
        />
        <Gap h={16} />
        <Input
          label='Password'
          placeholder='Type your password'
          value={password}
          onChangeText={value => setPassword(value)}
          hideText={true}
          isError={passwordError}
        />
        
        <Gap h={28} />
        <Button label='Sign In' onPress={signInOnPress} />
        <Gap h={12} />
        <Button type='secondary' label='Create New Account' onPress={createNewAccountOnPress} />
      </View>
    </View>
  );
};
