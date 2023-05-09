import { StyleSheet } from 'react-native';



export default StyleSheet.create({
  component: {
    margin: -20,
    backgroundColor: '#7289DA',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  item: {
    paddingVertical: 8,
    flex: 1,
    display: 'flex',
    alignItems: 'center'
  },
  text: selected => ({
    marginTop: 2,
    fontSize: 12,
    color: (selected) ? '#08559B' : '#F6F1F1'
  })
});
