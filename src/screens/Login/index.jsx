import { useState } from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput
} from 'react-native';

// styles
import globalStyle from '../../globalStyle'; // global
import style from './style'; // local

// components
import { Navbar, Background, Gap } from '../../components';

// icons
import {
  ArrowLeft,
  HeartWhite,
  AppLogo,
  Google,
  Facebook
} from '../../icons';



const Input = ({
  placeholder,
  value,
  onChangeText,
  hide=false
}) => {
  return (
    <TextInput
      style={style.input}
      placeholder={placeholder}
      placeholderTextColor={globalStyle.color.tertiary}
      value={value}
      onChangeText={value => onChangeText(value)}
      secureTextEntry={hide}
    />
  );
};

const ContinueButton = ({
  Icon,
  label,
  color,
  onPress
}) => {
  return (
    <TouchableOpacity style={style.continueButton((color === '#FFFFFF') ? '#FFFFFF' : globalStyle.color.tertiary)} onPress={onPress} activeOpacity={0.5}>
      <Icon />
      <Text style={style.continueButtonLabel((color === '#FFFFFF') ? globalStyle.color.tertiary : '#FFFFFF')}>{label}</Text>
    </TouchableOpacity>
  );
};



export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  function arrowLeftOnPress() {
    console.log('arrowLeftOnPress');
  }

  function circleOnPress() {
    console.log('circleOnPress');
  }

  function loginOnPress() {
    navigation.replace('Home');
  }

  function continueWithGoogle() {
    navigation.replace('Home');
  }
  
  function continueWithFacebook() {
    navigation.replace('Home');
  }



  return (
    <View style={globalStyle.screenWrapper}>
      <View style={style.screen}>
        <Background />

        <View style={style.header}>
          <TouchableOpacity onPress={arrowLeftOnPress} activeOpacity={0.5}>
            <ArrowLeft />
          </TouchableOpacity>
          <TouchableOpacity style={style.headerHeart} onPress={arrowLeftOnPress} activeOpacity={0.5}>
            <HeartWhite />
          </TouchableOpacity>
          <TouchableOpacity onPress={circleOnPress} activeOpacity={0.5}>
            <View style={globalStyle.circle} />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={style.logoWrapper}>
            <AppLogo style={style.logo} />
            <Text style={style.logoText}>The Laundry</Text>
          </View>

          <View style={[globalStyle.transparent, style.form]}>
            <Input placeholder='User name' value={username} onChangeText={setUsername} />
            <Gap h={2} />
            <Input
              placeholder='Password'
              value={password}
              onChangeText={setPassword}
              hide={true}
            />

            <Gap h={20} />
            <TouchableOpacity style={style.loginButton} onPress={loginOnPress} activeOpacity={0.5}>
              <Text style={style.loginText}>Login</Text>
            </TouchableOpacity>

            <Gap h={50} />
            <ContinueButton
              Icon={Google}
              label='Continue with Google'
              color='#FFFFFF'
              onPress={continueWithGoogle}
            />
            <ContinueButton
              Icon={Facebook}
              label='Continue with Facebook'
              color={globalStyle.color.tertiary}
              onPress={continueWithFacebook}
            />
          </View>
        </ScrollView>
      </View>

      <Navbar current='Login' navigation={navigation} />
    </View>
  );
};
