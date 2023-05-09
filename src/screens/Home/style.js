import { StyleSheet } from 'react-native';



export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#FFFFFF'
  },

  search: {
    borderRadius: 22,
    backgroundColor: '#FFFFFF',

    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchInputText: {
    marginLeft: 10,
    flex: 1
  },

  optionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  option: {
    borderRadius: 20,

    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  cardRow: {
    flexDirection: 'row'
  },
  card: {
    flex: 1,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',

    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 50
  },
  cardFavorite: {
    alignSelf: 'flex-end',
    marginRight: 20,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',

    padding: 4
  },
  cardLabel: {
    marginTop: 4
  }
});
