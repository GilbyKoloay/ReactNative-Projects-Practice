import { View, Text } from 'react-native';

// style
import globalStyle from '../../style'; // global
import style from './style'; // local

// component
import { NavBar } from '../../components'; // global



export default function Cart({ navigation }) {
  return (
    <View style={globalStyle.screen}>
      <Text>Cart</Text>
      <NavBar current='Cart' navigation={navigation} />
    </View>
  );
};
