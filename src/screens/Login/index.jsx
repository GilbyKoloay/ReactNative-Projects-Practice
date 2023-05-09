import { useState } from 'react';
import { View, Text } from 'react-native';

// style
import globalStyle from '../../style'; // global
import style from './style'; // local

// components
import { Title, Gap, Button } from '../../components'; // global
import { Input } from './component'; // local



export default function Login({ navigation }) {
  const [theme, setTheme] = useState('dark');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  function loginOnPress() {
    navigation.replace('Home');
  }

  function noAccountOnPress() {
    setTheme('light');
  }

  function signUpOnPress() {
    setTheme('dark');
  }



  return (
    <View style={[globalStyle.screen, style.screen((theme === 'dark') ? '#23272A' : (theme === 'light') && '#F8F8F9')]}>
      <Title theme={theme} />
      <Gap h={12} />
      <Input placeholder='username' value={username} onChangeText={value => setUsername(value)} />
      <Gap h={12} />
      <Input
        placeholder='password'
        value={password}
        onChangeText={value => setPassword(value)}
        hide={true}
      />
      <Gap h={36} />
      <Button text='LOGIN' onPress={loginOnPress} color={(theme === 'dark') ? 'primary' : 'secondary'} />
      <Gap h={10} />
      {(theme === 'dark') && <Text style={style.text('dark')} onPress={() => noAccountOnPress()}>Don't have an account yet?</Text>}
      {(theme === 'light') && <Text style={style.text('light')} onPress={() => signUpOnPress()}>Sign up</Text>}
    </View>
  );
};
