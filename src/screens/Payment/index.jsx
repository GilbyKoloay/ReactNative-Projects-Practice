import { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

// styles
import globalStyle from '../../globalStyle'; // global
import style from './style'; // local

// components
import { Navbar, Background, Gap } from '../../components';

// icons
import { ArrowLeft } from '../../icons';



export default function Payment({ navigation }) {
  const [paymentMethod, setPaymentMethod] = useState('VISA');
  const [address, setAddress] = useState('');



  function arrowLeftOnPress() {
    console.log('squaresOnPress');
  }

  function circleOnPress() {
    console.log('circleOnPress');
  }

  function paymentCircleOnPress() {
    console.log('paymentCircleOnPress');
  }



  return (
    <View style={globalStyle.screenWrapper}>
      <View style={globalStyle.screen}>
        <Background type='tertiary' />

        <View style={style.header}>
          <TouchableOpacity onPress={arrowLeftOnPress} activeOpacity={0.5}>
            <ArrowLeft />
          </TouchableOpacity>
          <Text style={style.headerText}>Payment</Text>
          <TouchableOpacity onPress={circleOnPress} activeOpacity={0.5}>
            <View style={globalStyle.circle} />
          </TouchableOpacity>
        </View>

        <Gap h={26} />
        <View style={[globalStyle.transparent, style.card]}>
          <View style={style.cardLongLine} />
          <View style={style.cardShortLine} />
        </View>

        <Gap h={26} />
        <View style={[globalStyle.transparent, style.section]}>
          <Text style={style.sectionTitle}>Choose Your Payment Method</Text>
          <Gap h={0} />
          <View style={style.paymentWrapper}>
            <TouchableOpacity style={style.paymentCircle} onPress={paymentCircleOnPress} activeOpacity={0.5} />
            <Gap w={6} />

            <Picker
              style={style.paymentPicker}
              selectedValue={paymentMethod}
              onValueChange={itemValue => setPaymentMethod(itemValue)}
              mode='dropdown'
              dropdownIconColor={globalStyle.color.primary}
            >
              <Picker.Item label='VISA' value='VISA' color={(paymentMethod === 'VISA') && globalStyle.color.primary}
              />
              <Picker.Item label='Bank Transfer' value='Bank Transfer' color={(paymentMethod === 'Bank Transfer') && globalStyle.color.primary} />
            </Picker>
          </View>
        </View>

        <Gap h={26} />
        <View style={[globalStyle.transparent, style.section]}>
          <Text style={style.sectionTitle}>Choose Your Shipping Address</Text>
          <Gap h={0} />
          <TextInput
            style={style.addressInput}
            placeholder='Your address goes here'
            placeholderTextColor={globalStyle.color.primary}
            value={address}
            onChangeText={value => setAddress(value)}
          />
        </View>
      </View>

      <Navbar navigation={navigation} />
    </View>
  );
};
