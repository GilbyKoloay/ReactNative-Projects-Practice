import { View, Text, TextInput } from 'react-native';

// style
import style from './style'; // local

// vector
import { Search as SearchSVG, Filter } from '../../vectors';



export default function Search({ placeholder, value, onChangeText }) {
  return (
    <View style={style.component}>
      <View style={style.search}>
        <SearchSVG />
        <TextInput
          style={style.textInput}
          placeholder={placeholder}
          placeholderTextColor='#FFFFFF'
          value={value}
          onChangeText={value => onChangeText(value)}
        />
      </View>
      <View style={style.filter}>
        <Filter />
      </View>
    </View>
  );
};
