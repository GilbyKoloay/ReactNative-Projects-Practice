import { View, Text } from 'react-native';

// styles
import style from './style.js';

// components
import { Button, Gap } from '../index.js';



export default function Share({ items }) {
  return (
    <View style={style.component}>
      <Text style={style.title}>Share</Text>
      {items.map((item, index) => (
        <View>
          <Button key={index} label={item.label} onPress={item.onPress} />
          {(items.length !== index + 1) && <Gap h={18} />}
        </View>
      ))}
    </View>
  );
};
