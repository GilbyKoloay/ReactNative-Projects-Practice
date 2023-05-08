import { TouchableOpacity, Text } from 'react-native';

// style
import style from './style'; // local



export default function Button({ text='<text>', onPress=() => console.log('<button pressed>'), color='primary' }) {
  return (
    <TouchableOpacity style={style.component(color)} onPress={onPress} activeOpacity={0.5}>
      <Text style={style.text}>{text}</Text>
    </TouchableOpacity>
  );
};
