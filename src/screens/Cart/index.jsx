import { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

// style
import globalStyle from '../../style'; // global
import style from './style'; // local

// component
import { NavBar, BackButton, Gap, Button } from '../../components'; // global

// image
import { TokoGasOmNefo } from '../../images';

// vector
import { Increase, Decrease } from '../../vectors';



export default function Cart({ navigation }) {
  const [total, setTotal] = useState(0);
  const [totalHarga, setTotalHarga] = useState(total * 400000);



  function increaseOnPress() {
    setTotal(total + 1);
    setTotalHarga((total + 1) * 400000);
  }

  function decreaseOnPress() {
    setTotal(total - 1);
    setTotalHarga((total - 1) * 400000);
  }

  function buyOnPress() {
    console.log('buyOnPress');
  }



  return (
    <View style={globalStyle.screenWrapper}>
      <View style={globalStyle.screen}>
        <BackButton onPress={() => navigation.replace('Home')} label='Cart' />
        
        <Gap h={32} />
        <View style={style.header}>
          <View style={style.whiteBox} />
          <Text style={style.headerText}>Pilih Semua</Text>
        </View>

        <Gap h={22} />
        <View style={style.mainWrapper}>
          <View style={style.main}>
            <View style={style.titleWrapper}>
              <View style={style.whiteBox} />
              <Text style={style.title}>Toko gas om Nefo</Text>
            </View>
            <Gap h={12} />
            <View style={style.infoWrapper}>
              <Image source={TokoGasOmNefo} />
              <Gap w={26} />
              <View style={style.info}>
                <Text style={style.infoTitle}>gas elpiji 12 kg</Text>
                <View style={style.totalWrapper}>
                  <TouchableOpacity onPress={() => increaseOnPress()} activeOpacity={0.5}>
                    <Increase />
                  </TouchableOpacity>
                  <Text style={style.total}>{total}</Text>
                  <TouchableOpacity onPress={() => decreaseOnPress()} activeOpacity={0.5}>
                    <Decrease />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={[style.main, style.totalPriceWrapper]}>
            <View style={style.totalPriceTextWrapper}>
              <Text style={style.totalPriceTitle}>Total Harga</Text>
              <Text style={style.totalPrice}>Rp. {totalHarga}</Text>
            </View>
            <View style={style.buttonWrapper}>
              <Button text='Buy' onPress={() => buyOnPress()} />
            </View>
          </View>
        </View>
      </View>

      <NavBar current='Cart' navigation={navigation} />
    </View>
  );
};
