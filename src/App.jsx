import { StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: '#202020',
  },
  title: {
    fontSize: 24,
    color: '#ECECEC'
  },
  linkButton: {
    marginTop: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: '#606060',
    backgroundColor: '#404040',
    borderRadius: 10,
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    color: '#ECECEC'
  },
});

export default function() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>React Native Apps <Text style={{fontSize: 12, color: '#404040'}}>for practice or other stuffs :3</Text></Text>

      <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL('https://github.com/GilbyKoloay/ReactNative-Projects-Practice')}>
        <Text style={styles.text}>Open Repository</Text>
      </TouchableOpacity>

      <Text style={[styles.text, {marginTop: 32}]}>Use <Text style={{fontWeight: 'bold'}}>git checkout [<Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>branch</Text>]</Text> to switch to different apps.</Text>

      <Text style={[styles.text, {marginTop: 24, marginBottom: 8}]}>Branches: </Text>
      <Text style={styles.text}>BatuAngus</Text>
      <Text style={styles.text}>Bogas</Text>
      <Text style={styles.text}>Ex9</Text>
      <Text style={styles.text}>HappyBouquet</Text>
      <Text style={styles.text}>MoneyTracker</Text>
      <Text style={styles.text}>MovieHub</Text>
      <Text style={styles.text}>MovieTicketBookingApp_MVladimirovna</Text>
      <Text style={styles.text}>Settings</Text>
      <Text style={styles.text}>SignInOne</Text>
      <Text style={styles.text}>TheLaundry</Text>
      <Text style={styles.text}>WhatsApp</Text>
      <Text style={styles.text}>yUKlari</Text>

      <Text style={[styles.text, {marginTop: 24, fontStyle: 'italic'}]}>e.g. <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>git checkout Settings</Text></Text>
    </View>
  );
}
