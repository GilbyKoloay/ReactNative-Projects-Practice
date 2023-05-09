import { StyleSheet } from 'react-native';



export default StyleSheet.create({
  profile: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  profileName: {
    fontSize: 20,
    color: '#F6F1F1'
  },
  profilePhoneNumber: {
    fontSize: 11,
    color: '#F6F1F1'
  },
  profileEmail: {
    fontSize: 12,
    color: '#F6F1F1'
  },
  profileEdit: {
    marginTop: 14,
    marginLeft: 16
  },
  title: {
    marginLeft: 26,
    fontSize: 20,
    color: '#F6F1F1'
  },
  main: {
    backgroundColor: '#2C2F33',
    borderRadius: 10,
    paddingVertical: 26
  },
  saldoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  saldoLabel: {
    marginTop: 2,
    fontSize: 13,
    color: '#F6F1F1',
    textAlign: 'center'
  },
  accountSettingWrapper: {
    paddingHorizontal: 26
  },
  accountSetting: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10
  },
  accountSettingIcon: {
    width: 26,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  accountSettingLabel: {
    marginLeft: 20,
    fontSize: 13,
    color: '#F6F1F1'
  }
});
