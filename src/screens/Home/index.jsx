import { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  Image
} from 'react-native';

// styles
import globalStyle from '../../globalStyle'; // global
import style from './style'; // local

// components
import { Navbar, Background, Gap } from '../../components';

// images
import {
  WashingMachine,
  Iron1,
  HangClothes,
  Iron2
} from '../../images';

// icons
import {
  Squares,
  Search,
  Calendar,
  ChatBg,
  Pin,
  HeartBlue
} from '../../icons';



const Option = ({ Icon, onPress }) => {
  return (
    <TouchableOpacity style={[globalStyle.transparent, style.option]} onPress={onPress} activeOpacity={0.5}>
      <Icon />
    </TouchableOpacity>
  );
};

const Card = ({
  image,
  label, 
  onPress,
  favorite=false
}) => {
  return (
    <TouchableOpacity style={style.card} onPress={onPress} activeOpacity={0.5}>
      {(favorite) && (
        <View style={style.cardFavorite}>
          <HeartBlue />
        </View>
      )}
      <Image source={image} />
      <Text style={style.cardLabel}>{label}</Text>
    </TouchableOpacity>
  );
};



export default function Home({ navigation }) {
  const [search, setSearch] = useState('');



  function squaresOnPress() {
    console.log('squaresOnPress');
  }

  function circleOnPress() {
    console.log('circleOnPress');
  }

  function optionCalendarOnPress() {
    console.log('optionCalendarOnPress');
  }

  function optionChatOnPress() {
    console.log('optionChatOnPress');
  }

  function optionPinOnPress() {
    console.log('optionPinOnPress');
  }

  function cardWashIronOnPress() {
    console.log('cardWashIronOnPress');
  }

  function cardIroning1OnPress() {
    console.log('cardIroning1OnPress');
  }

  function cardHangClothesOnPress() {
    console.log('cardHangClothesOnPress');
  }

  function cardIroning2OnPress() {
    console.log('cardIroning2OnPress');
  }



  return (
    <View style={globalStyle.screenWrapper}>
      <View style={globalStyle.screen}>
        <Background type='secondary' />

        <View style={style.header}>
          <TouchableOpacity onPress={squaresOnPress} activeOpacity={0.5}>
            <Squares />
          </TouchableOpacity>
          <View>
            <Text style={style.headerText}>Welcome to The Laundry</Text>
            <Text style={style.headerText}>Yosua</Text>
          </View>
          <TouchableOpacity onPress={circleOnPress} activeOpacity={0.5}>
            <View style={globalStyle.circle} />
          </TouchableOpacity>
        </View>

        <Gap h={32} />
        <View style={style.search}>
          <Search />
          <TextInput style={style.searchInputText} value={search} onChangeText={value => setSearch(value)} />
        </View>

        <Gap h={32} />
        <View style={style.optionWrapper}>
          <Option Icon={Calendar} onPress={optionCalendarOnPress} />
          <Option Icon={ChatBg} onPress={optionChatOnPress} />
          <Option Icon={Pin} onPress={optionPinOnPress} />
        </View>

        <Gap h={32} />
        <ScrollView>
          <View style={style.cardRow}>
            <Card image={WashingMachine} label='Wash & Iron' onPress={cardWashIronOnPress} />
            <Gap w={16} />
            <Card image={Iron1} label='Ironing' onPress={cardIroning1OnPress} />
          </View>
          <Gap h={50} />
          <View style={style.cardRow}>
            <Card
              image={HangClothes}
              label='Laundry'
              onPress={cardHangClothesOnPress}
              favorite={true}
            />
            <Gap w={16} />
            <Card
              image={Iron2}
              label='Ironing'
              onPress={cardIroning2OnPress}
              favorite={true}
            />
          </View>
        </ScrollView>
      </View>

      <Navbar navigation={navigation} />
    </View>
  );
};
