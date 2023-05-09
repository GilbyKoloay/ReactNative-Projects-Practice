import { useState } from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';

// style
import globalStyle from '../../style'; // global
import style from './style'; // local

// component
import {
  NavBar,
  BackButton,
  Gap,
  Search
} from '../../components'; // global

// image
import {
  Cat,
  DepotRizela,
  TokoGasOmYudi,
  DepotAirMasHendly,
  TokoGasOmNefo
} from '../../images';

// vectors
import { Star, Explore as ExploreSVG } from '../../vectors';



const Card = ({ image, label, onPress, star, totalRating, distance }) => {
  return (
    <TouchableOpacity style={style.card} onPress={() => onPress()} activeOpacity={0.5}>
      <ImageBackground source={image} style={style.cardImage}>
        <View style={style.cardReview}>
          <Star />
          <Text style={style.cardReviewStar}>{star}</Text>
          <Text style={style.cardReviewTotalRating}>({totalRating})</Text>
        </View>
        <View style={style.cardDistance}>
          <ExploreSVG />
          <Text style={style.cardDistanceText}>{distance} km</Text>
        </View>
      </ImageBackground>
      <Text style={style.cardLabel}>{label}</Text>
    </TouchableOpacity>
  );
};



export default function Explore({ navigation }) {
  const [search, setSearch] = useState('');



  function depotRizelaOnPress() {
    console.log('depotRizelaOnPress');
  }

  function tokoGasOmYudiOnPress() {
    console.log('tokoGasOmYudiOnPress');
  }

  function depotAirMasHendlyOnPress() {
    console.log('depotAirMasHendlyOnPress');
  }
  
  function tokoGasOmNefoOnPress() {
    console.log('tokoGasOmNefoOnPress');
  }



  return (
    <View style={globalStyle.screenWrapper}>
      <View style={globalStyle.screen}>
        <View style={style.header}>
          <BackButton onPress={() => navigation.replace('Home')} label='Explore' />
          <Image source={Cat} style={style.headerImage} />
        </View>

        <Gap h={50} />
        <Search placeholder='Air mineral, Tabung Gas ....' value={search} onChangeText={value => setSearch(value)} />

        <Gap h={16} />
        <Text style={style.title}>Terdekat dengan anda</Text>

        <Gap h={20} />
        <ScrollView>
          <View style={style.cardList}>
            <Card image={DepotRizela} label='Depot RIZELA' onPress={depotRizelaOnPress} star={4.5} totalRating={200} distance={0.3} />
            <Gap w={14} />
            <Card image={TokoGasOmYudi} label='Toko Gas om Yudi' onPress={tokoGasOmYudiOnPress} star={4.3} totalRating={385} distance={0.5} />
          </View>
          <Gap h={26} />
          <View style={style.cardList}>
            <Card image={DepotAirMasHendly} label='Depot air mas Hendly' onPress={depotAirMasHendlyOnPress} star={4.3} totalRating={150} distance={0.3} />
            <Gap w={14} />
            <Card image={TokoGasOmNefo} label='Toko Gas om Nefo' onPress={tokoGasOmNefoOnPress} star={4.1} totalRating={253} distance={0.5} />
          </View>
        </ScrollView>
      </View>

      <NavBar current='Explore' navigation={navigation} />
    </View>
  );
};
