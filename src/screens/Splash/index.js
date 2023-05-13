import { View, Text } from 'react-native';

// styles
import globalStyle from '../../globalStyle';
import style from './style.js';



export default function Splash({ navigation }) {
  return (
    <View style={globalStyle.screen}>
      <Text>Splash</Text>
    </View>
  );
};
