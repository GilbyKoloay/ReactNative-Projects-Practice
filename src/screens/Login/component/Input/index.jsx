import { TextInput } from 'react-native';

// style
import style from './style'; // local



export default function Input({ placeholder='<placeholder>', value, onChange }) {
  return (
    <TextInput
      style={style.component}
      placeholder={placeholder}
      placeholderTextColor='#FFFFFF'
      value={value}
      onChangeText={value => onChange(value)}
    />
  );
};
