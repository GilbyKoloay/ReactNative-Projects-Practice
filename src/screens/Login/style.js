import { StyleSheet } from 'react-native';



export default StyleSheet.create({
  screen: color => ({
    backgroundColor: color,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 48
  }),
  text: theme => ({
    alignSelf: (theme === 'dark') ? 'flex-start' : (theme === 'light') && 'flex-end',
    fontSize: 11,
    color: (theme === 'dark') ? '#FFFFFF' : (theme === 'light') && '#25BDBD'
  })
});
