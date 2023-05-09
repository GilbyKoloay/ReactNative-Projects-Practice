import { StyleSheet } from 'react-native';



export default StyleSheet.create({
  component: type => ({
    position: 'absolute',
    top: (type === 'secondary') ? -250 : 0
  }),
  rectangle: type => ({
    position: 'absolute',
    top: (type === 'tertiary') ? 176 : 0,
    borderRadius: 30
  }),
  circle: type => ({
    position: 'absolute',
    top: (type === 'tertiary') ? 176 : 0,
    left: (type === 'tertiary') ? 200 : 0,
    transform: [{scaleX: (type === 'tertiary') ? -1 : 1}]
  })
});
