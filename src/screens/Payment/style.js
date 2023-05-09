import { StyleSheet } from 'react-native';
import globalStyle from '../../globalStyle';



export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 34,
    color: globalStyle.color.primary
  },

  card: {
    height: 130,
    width: 200,
    alignSelf: 'center',
    borderRadius: 22
  },
  cardLongLine: {
    marginTop: 30,
    height: 20,
    backgroundColor: '#C6ECFA'
  },
  cardShortLine: {
    marginTop: 16,
    marginRight: 16,
    alignSelf: 'flex-end',
    height: 14,
    width: 50,
    borderRadius: 10,
    backgroundColor: '#FCFBFF'
  },

  section: {
    padding: 10
  },
  sectionTitle: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 20,
    color: '#FFFFFF'
  },

  paymentWrapper: {
    flexDirection: 'row'
  },
  paymentCircle: {
    height: 26,
    width: 26,
    borderRadius: 13,
    backgroundColor: '#FFFFFF'
  },
  paymentPicker: {
    flex: 1,
    backgroundColor: '#FFFFFF',

    color: globalStyle.color.primary
  },

  addressInput: {
    borderRadius: 16,
    backgroundColor: '#FFFFFF',

    padding: 12,
    fontSize: 20,
    color: globalStyle.color.primary,
    textAlign: 'center'
  }
});
