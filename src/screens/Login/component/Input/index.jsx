import { TextInput } from 'react-native';

// style
import style from './style'; // local



export default function Input({ placeholder='<placeholder>', value, onChangeText }) {
  return (
    <TextInput
      style={style.component}
      placeholder={placeholder}
      placeholderTextColor='#FFFFFF'
      value={value}
      onChangeText={value => onChangeText(value)}
    />
  );
};
