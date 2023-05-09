import { View, Text } from 'react-native';

// styles
import globalStyle from '../../globalStyle'; // global
import style from './style'; // local

// components
import { Navbar } from '../../components';



export default function Account({ navigation }) {
  return (
    <View style={globalStyle.screenWrapper}>
      <View style={globalStyle.screen}>

      </View>

      <Navbar navigation={navigation} />
    </View>
  );
};
