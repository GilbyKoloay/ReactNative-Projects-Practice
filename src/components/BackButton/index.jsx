import { View, TouchableOpacity, Text } from 'react-native';

// style
import style from './style'; // local

// vectors
import { ArrowLeft } from '../../vectors';



export default function BackButton({ onPress=() => console.log('<backButton onPress>'), label='<backButton label>' }) {
  return (
    <View style={style.component}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
        <ArrowLeft />
      </TouchableOpacity>
      <Text style={style.label}>{label}</Text>
    </View>
  );
};
