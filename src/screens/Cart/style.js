import { StyleSheet } from 'react-native';



export default StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row'
  },
  whiteBox: {
    height: 22,
    width: 22,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#616161'
  },
  headerText: {
    marginLeft: 8,
    fontSize: 13,
    color: '#F6F1F1'
  },
  mainWrapper: {
    flex: 1,
    paddingBottom: 18,
    display: 'flex',
    justifyContent: 'space-between'
  },
  main: {
    padding: 32,
    borderRadius: 10,
    backgroundColor: '#2C2F33'
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row'
  },
  title: {
    marginLeft: 10,
    fontSize: 13,
    color: '#F6F1F1'
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'row'
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  infoTitle: {
    fontSize: 13,
    color: '#F6F1F1'
  },
  totalWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  total: {
    fontSize: 13,
    color: '#F6F1F1'
  },
  totalPriceWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  totalPriceTextWrapper: {
    flex: 1
  },
  totalPriceTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#F6F1F1'
  },
  totalPrice: {
    marginTop: 12,
    fontSize: 13,
    color: '#F6F1F1'
  }
});
