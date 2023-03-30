import { StyleSheet, View, Text } from 'react-native';
import { Gap, TextInput, Button } from './components';

const styles = StyleSheet.create({
  screen: {
    padding: 20
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#404040'
  }
});

export default function() {

  return(
    <View style={styles.screen}>
      <Text style={styles.title}>Welcome</Text>
      <Gap height={34} width={0} />
      <TextInput title='Username' placeholder='Masukkan username anda' />
      <Gap height={18} width={0} />
      <TextInput title='Password' placeholder='Masukkan password anda' />
      <Gap height={34} width={0} />
      <Button title='Sign In' />
    </View>
  );
};
