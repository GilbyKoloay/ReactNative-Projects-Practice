import { StyleSheet } from 'react-native';
import globalStyle from '../../globalStyle';



export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: globalStyle.color.secondary,

    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    marginTop: 18,

    fontSize: 24,
    color: globalStyle.color.primary
  }
});
