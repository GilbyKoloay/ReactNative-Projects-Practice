import { StyleSheet } from 'react-native';



export default StyleSheet.create({
  component: color => ({
    backgroundColor: (color === 'primary') ? '#7289DA' : (color === 'secondary') && '#25BDBD',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 50
  }),
  text: {
    fontSize: 14,
    color: '#F6F1F1'
  }
});
