import { View, Text } from 'react-native';

// style
import globalStyle from '../../style'; // global
import style from './style'; // local

// component
import { NavBar } from '../../components'; // global



export default function Account({ navigation }) {
  return (
    <View style={globalStyle.screen}>
      <Text>Account</Text>
      <NavBar current='Account' navigation={navigation} />
    </View>
  );
};
