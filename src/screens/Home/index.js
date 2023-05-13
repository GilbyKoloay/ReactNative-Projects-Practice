import { View, Text } from 'react-native';

// styles
import globalStyle from '../../globalStyle';
import style from './style.js';



export default function Home({ navigation }) {
  return (
    <View style={globalStyle.screen}>
      <Text>Home</Text>
    </View>
  );
};
