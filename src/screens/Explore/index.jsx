import { View, Text } from 'react-native';

// style
import globalStyle from '../../style'; // global
import style from './style'; // local

// component
import { NavBar } from '../../components'; // global



export default function Explore({ navigation }) {
  return (
    <View style={globalStyle.screen}>
      <Text>Explore</Text>
      <NavBar current='Explore' navigation={navigation} />
    </View>
  );
};
