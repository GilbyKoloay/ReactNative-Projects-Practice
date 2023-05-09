import { View, Image } from 'react-native';

// styles
import style from './style'; // local

// images
import { BgRectangle, BgCircle1 } from '../../images';



export default function Background({ type='primary' }) {
  return (
    <View style={style.component(type)}>
      <Image source={BgRectangle} style={style.rectangle(type)} />
      <Image source={BgCircle1} style={style.circle(type)} />
    </View>
  );
};
