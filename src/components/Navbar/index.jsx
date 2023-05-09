import { View, TouchableOpacity } from 'react-native';

// styles
import style from './style'; // local

// icons
import {
  Home,
  Bag,
  ChatSm,
  Person
} from '../../icons';



export default function Navbar({ current=null, navigation }) {
  function homeOnPress() {
    navigation.push('Home');
  }

  function bagOnPress() {
    navigation.push('Payment');
  }

  function chatSmOnPress() {
    console.log('chatSmOnPress');
  }

  function personOnPress() {
    navigation.push('Person');
  }



  return (
    <View style={style.component}>
      <TouchableOpacity style={style.item} onPress={homeOnPress} activeOpacity={0.5}>
        <Home />
      </TouchableOpacity>

      <TouchableOpacity style={style.item} onPress={bagOnPress} activeOpacity={0.5}>
        <Bag />
      </TouchableOpacity>

      {(current === 'Login') ? (
        <TouchableOpacity style={style.item} onPress={chatSmOnPress} activeOpacity={0.5}>
          <ChatSm />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={style.item} onPress={personOnPress} activeOpacity={0.5}>
          <Person />
        </TouchableOpacity>
      )}
    </View>
  );
};
