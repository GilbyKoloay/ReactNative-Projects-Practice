import { TextInput } from 'react-native';

// style
import style from './style'; // local



export default function Input({ placeholder='<placeholder>', value, onChangeText, hide=false }) {
  return (
    <TextInput
      style={style.component}
      placeholder={placeholder}
      placeholderTextColor='#FFFFFF'
      value={value}
      onChangeText={value => onChangeText(value)}
      secureTextEntry={hide}
    />
  );
};
