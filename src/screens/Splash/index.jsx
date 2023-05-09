import { useEffect } from 'react';
import { View, Text } from 'react-native';

// styles
import style from './style'; // local

// icons
import { AppLogo } from '../../icons'



export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 1000);
  }, []);



  return (
    <View style={style.screen}>
      <AppLogo />
      <Text style={style.title}>The Laundry</Text>
    </View>
  );
};
