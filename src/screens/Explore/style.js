import { StyleSheet } from 'react-native';



export default StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerImage: {
    height: 38,
    width: 38
  },
  title: {
    fontSize: 18,
    color: '#F6F1F1'
  },
  cardList: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row'
  },
  card: {
    flex: 1,
    backgroundColor: '#2C2F33',
    paddingBottom: 20,
    borderRadius: 10
  },
  cardImage: {
    height: 126,
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 6,
    paddingLeft: 2,
    paddingRight: 14
  },
  cardReview: {
    width: 56,
    alignSelf: 'flex-end',
    backgroundColor: '#F6F1F1',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 2,
  },
  cardReviewStar: {
    marginLeft: 2,
    fontSize: 10,
    fontWeight: 'bold',
    color: '#2C2F33'
  },
  cardReviewTotalRating: {
    marginLeft: 2,
    fontSize: 10,
    color: '#23272A99'
  },
  cardDistance: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardDistanceText: {
    marginLeft: 2,
    fontSize: 10,
    fontWeight: 'bold',
    color: '#F6F1F1'
  },
  cardLabel: {
    paddingHorizontal: 2,
    fontSize: 12,
    color: '#F6F1F1'
  }
});
