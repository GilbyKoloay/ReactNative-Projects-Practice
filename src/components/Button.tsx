import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    padding: 14,
    backgroundColor: 'orange'
  },
  title: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 12,
    color: '#fff'
  }
});

export default function({ title }: {title: String}) {
  return(
    <TouchableOpacity style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
