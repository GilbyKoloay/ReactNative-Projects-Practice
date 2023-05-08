import { View, Image } from 'react-native';

// style
import style from './style'; // local

// images
import { TitleBG, TitleOASDark, TitleOASLight } from '../../images';



export default function Title({ theme }) {
  return (
    <View>
      <Image style={style.bg} source={TitleBG} />
      {(theme === 'light') && <Image style={style.oas} source={TitleOASDark} />}
      {(theme === 'dark') && <Image style={style.oas} source={TitleOASLight} />}
    </View>
  );
};
