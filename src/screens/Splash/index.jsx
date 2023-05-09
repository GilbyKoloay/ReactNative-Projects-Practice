import { useEffect } from 'react';
import { View } from 'react-native';

// style
import style from './style.js';

import { Title } from '../../components/index.js';



export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 1000);
  }, []);



  return (
    <View style={style.screen}>
      <Title theme='dark' />
    </View>
  );
};
