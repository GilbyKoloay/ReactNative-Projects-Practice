import { StyleSheet, View, Text, TextInput } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#808080'
  },
  textInput: {
    marginTop: 6,
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 8,
    padding: 10
  }
});

export default function({ title, placeholder }: { title: String, placeholder: string}) {
  return(
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={styles.textInput} placeholder={placeholder} />
    </View>
  );
};
