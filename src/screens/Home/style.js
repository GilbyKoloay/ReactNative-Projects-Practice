import { StyleSheet } from 'react-native';



export default StyleSheet.create({
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerImage: {
    height: 38,
    width: 38,
    borderRadius: 10
  },
  headerText: {
    marginLeft: 12,
    fontSize: 15,
    color: '#F6F1F1'
  },
  title: {
    fontSize: 18,
    color: '#FFFFFF'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    flex: 1,
    backgroundColor: '#2C2F33',
    padding: 8,
    borderRadius: 10,
    shadowColor: '#A5A5A540',
    shadowRadius: 50
    // box-shadow: 0px 0px 10px 0px #A5A5A540;
  },
  cardImage: {
    alignSelf: 'center'
  },
  cardText: {
    fontSize: 14,
    color: '#FFFFFF'
  }
});
