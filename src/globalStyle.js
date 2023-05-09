import { StyleSheet } from 'react-native';



export default StyleSheet.create({
  color: {
    primary: '#00FFCA',
    secondary: '#0A4D68',
    tertiary: '#00FFFF'
  },

  screenWrapper: {
    flex: 1,
    justifyContent: 'space-between'
  },
  screen: {
    padding: 20
  },

  circle: {
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: '#D2EFFA'
  },

  transparent: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF42',
  }
});
