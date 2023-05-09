import { StyleSheet } from 'react-native';

import globalStyle from '../../globalStyle';



export default StyleSheet.create({
  screen: {
    marginBottom: 40,
    backgroundColor: '#F7FAFF',

    padding: 20
  },

  header: {
    position: 'absolute',
    left: 0,
    right: 0,

    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerHeart: {
    marginTop: 76
  },

  logoWrapper: {
    alignItems: 'center'
  },
  logo: {
    left: -50,
  },
  logoText: {
    top: -16,
    right: -50,
    fontSize: 24,
    color: globalStyle.color.primary
  },

  form: {
    marginTop: 50,

    padding: 16,
    paddingTop: 50,
    alignItems: 'center'
  },

  input: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',

    paddingVertical: 16,
    textAlign: 'center',
    color: globalStyle.color.tertiary
  },

  loginButton: {
    borderRadius: 16,
    backgroundColor: globalStyle.color.primary,
    
    paddingVertical: 2,
    paddingHorizontal: 14
  },
  loginText: {
    color: '#FFFFFF'
  },

  continueButton: color => ({
    width: '100%',
    borderRadius: 14,
    backgroundColor: color,

    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }),
  continueButtonLabel: color => ({
    marginLeft: 16,
    color: color
  })
});
