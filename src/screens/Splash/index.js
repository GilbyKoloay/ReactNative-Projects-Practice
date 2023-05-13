import { useEffect } from 'react';
import { View, Image, Text } from 'react-native';

// styles
import globalStyle from '../../globalStyle';
import style from './style.js';

// images
import { yUKlari } from '../../assets/images';



export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 1500);
  }, []);



  return (
    <View style={[globalStyle.screen, style.screen]}>
      <Image source={yUKlari} />
      <Text style={style.title}>yUKlari</Text>
    </View>
  );
};
