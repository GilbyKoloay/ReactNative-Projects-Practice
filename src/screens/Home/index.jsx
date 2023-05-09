import { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

// style
import globalStyle from '../../style'; // global
import style from './style'; // local

// component
import { NavBar, Gap, Search } from '../../components'; // global

// image
import { Cat, LPG, Gallon } from '../../images';



const Card = ({ image, name }) => {
  return (
    <TouchableOpacity style={style.card} activeOpacity={0.5}>
      <Image source={image} style={style.cardImage} />
      <Text style={style.cardText}>{name}</Text>
    </TouchableOpacity>
  );
};



export default function Home({ navigation }) {
  const [search, setSearch] = useState('');



  function tabungGasOnPress() {
    console.log('tabungGasOnPress');
  }

  function airMineralOnPress() {
    console.log('tabungGasOnPress');
  }



  return (
    <View style={globalStyle.screenWrapper}>
      <View style={globalStyle.screen}>
        <View style={style.headerWrapper}>
          <Image source={Cat} style={style.headerImage} />
          <Text style={style.headerText}>Hi ... Den</Text>
        </View>

        <Gap h={20} />
        <Text style={style.title}>Kehabisan Air atau Gas?</Text>

        <Gap h={24} />
        <Search placeholder='Air mineral, Tabung Gas ...' value={search} onChangeText={value => setSearch(value)} />

        <View style={style.main}>
          <Card image={LPG} name='Tabung gas' onPress={tabungGasOnPress} />
          <Gap w={20} />
          <Card image={Gallon} name='Air mineral' onPress={airMineralOnPress} />
        </View>
      </View>

      <NavBar current='Home' navigation={navigation} />
    </View>
  );
};
