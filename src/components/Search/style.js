import { StyleSheet } from 'react-native';



export default StyleSheet.create({
  component: {
    display: 'flex',
    flexDirection: 'row'
  },
  search: {
    flex: 1,
    backgroundColor: '#2C2F33',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    padding: 8
  },
  textInput: {
    marginLeft: 8,
    flex: 1,
    padding: 0,
    fontSize: 14,
    color: '#FFFFFF'
  },
  filter: {
    marginLeft: 4,
    backgroundColor: '#2C2F33',
    borderRadius: 10,
    padding: 8,
    display: 'flex',
    justifyContent: 'center'
  }
});
