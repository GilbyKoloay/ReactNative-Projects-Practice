import { StyleSheet } from 'react-native';
import globalStyle from '../../globalStyle';



export default StyleSheet.create({
  screen: {
    flex: 1
  },

  header: {
    paddingTop: 32
  },
  headerBackground: {
    position: 'absolute'
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 20,
    color: '#FFFEFE'
  },
  headerItemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  headerItem: {
    alignItems: 'center'
  },
  headerItemLabel: {
    fontSize: 11,
    color: '#FFFEFE'
  },

  main: {
    backgroundColor: globalStyle.color.primary,

    paddingTop: 50,
    paddingHorizontal: 20,
  },
  mainItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  mainItemInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  mainItemImage: {
    height: 50,
    width: 50
  },
  mainItemTextWrapper: {
    marginLeft: 20
  },
  mainItemLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFCFC'
  },
  mainItemDesc: {
    fontSize: 10,
    color: '#FFFFFF'
  },
  mainItemTotal: {
    flexDirection: 'row'
  },
  mainItemTotalWrapper: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',
  },
  mainItemTotalIcon: {
    fontSize: 14,
    color: '#000000'
  },
  mainItemTotalValue: {
    marginHorizontal: 10,

    fontSize: 14,
    color: '#000000'
  }
});
