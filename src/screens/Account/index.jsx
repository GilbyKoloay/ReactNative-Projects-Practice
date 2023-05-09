import { View, Image, Text, TouchableOpacity } from 'react-native';

// style
import globalStyle from '../../style'; // global
import style from './style'; // local

// component
import { NavBar, BackButton, Gap } from '../../components'; // global

// image
import {
  Cat,
  GoPay,
  OVO,
  Card
} from '../../images';

// vector
import {
  Pencil,
  HomeLight,
  Lock,
  UpDownArrow
} from '../../vectors';



const Saldo = ({ image, label='', onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress()} activeOpacity={0.5}>
      <Image source={image} />
      <Text style={style.saldoLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const AccountSettingOption = ({ Icon, label, onPress }) => {
  return (
    <TouchableOpacity style={style.accountSetting} onPress={() => onPress()} activeOpacity={0.5}>
      <View style={style.accountSettingIcon}>
        <Icon />
      </View>
      <Text style={style.accountSettingLabel}>{label}</Text>
    </TouchableOpacity>
  );
};



export default function Account({ navigation }) {
  function goPayOnPress() {
    console.log('goPayOnPress');
  }

  function ovoOnPress() {
    console.log('ovoOnPress');
  }
  
  function saldoOnPress() {
    console.log('saldoOnPress');
  }

  function daftarAlamatOnPress() {
    console.log('daftarAlamatOnPress');
  }

  function keamananAkunOnPress() {
    console.log('keamananAkunOnPress');
  }

  function gantiAkunOnPress() {
    console.log('gantiAkunOnPress');
  }



  return (
    <View style={globalStyle.screenWrapper}>
      <View style={globalStyle.screen}>
        <BackButton onPress={() => navigation.replace('Home')} label='My Account' />

        <Gap h={40} />
        <View style={style.profile}>
          <Image source={Cat} />
          <Gap w={14} />
          <View>
            <Text style={style.profileName}>Denny ranjow</Text>
            <Text style={style.profilePhoneNumber}>08xxxxxxxxx</Text>
            <Text style={style.profileEmail}>deranj@gmail.com</Text>
          </View>
          <TouchableOpacity style={style.profileEdit} activeOpacity={0.5}>
            <Pencil />
          </TouchableOpacity>
        </View>

        <Gap h={26} />
        <Text style={style.title}>Saldo</Text>
        <View style={[style.main, style.saldoWrapper]}>
          <Saldo image={GoPay} label='GoPay' onPress={goPayOnPress} />
          <Saldo image={OVO} onPress={ovoOnPress} />
          <Saldo image={Card} label='Saldo' onPress={saldoOnPress} />
        </View>

        <Text style={style.title}>Pengaturan akun</Text>
        <View style={[style.main, style.accountSettingWrapper]}>
          <AccountSettingOption Icon={HomeLight} label='Daftar Alamat' onPress={daftarAlamatOnPress} />
          <AccountSettingOption Icon={Lock} label='Keamanan Akun' onPress={keamananAkunOnPress} />
          <AccountSettingOption Icon={UpDownArrow} label='Ganti akun' onPress={gantiAkunOnPress} />
        </View>
      </View>

      <NavBar current='Account' navigation={navigation} />
    </View>
  );
};
