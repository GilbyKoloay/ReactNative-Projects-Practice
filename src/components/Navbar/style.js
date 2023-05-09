import { StyleSheet } from 'react-native';



export default StyleSheet.create({
  component: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    backgroundColor: '#FFFFFF',

    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  item: {
    paddingVertical: 16,
    paddingHorizontal: 20,

    alignItems: 'center'
  }
});
