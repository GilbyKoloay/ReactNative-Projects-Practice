import { StyleSheet } from 'react-native';



export default StyleSheet.create({
  color: {
    primary: '#00FFCA',
    secondary: '#0A4D68',
    tertiary: '#00FFFF'
  },

  screenWrapper: {
    flex: 1,
    backgroundColor: '#F7FAFF',
    
    justifyContent: 'space-between'
  },
  screen: {
    marginBottom: 320,

    padding: 20,
    paddingBottom: 0
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
