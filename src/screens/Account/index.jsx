import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';

// styles
import globalStyle from '../../globalStyle'; // global
import style from './style'; // local

// components
import { Navbar, Gap } from '../../components';

// images
import {
  BgCircle2,
  Men,
  Woman,
  Blanket,
  CleaningTools,
  Shirt,
  Trouser,
  TShirt
} from '../../images';



const HeaderItem = ({ image, label, onPress }) => {
  return (
    <TouchableOpacity style={style.headerItem} onPress={onPress} activeOpacity={0.5}>
      <Image source={image} />
      <Text style={style.headerItemLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const MainItem = ({
  image,
  label,
  desc,
  value,
  incrementOnPress,
  decrementOnPress
}) => {
  return (
    <View style={style.mainItem}>
      <View style={style.mainItemInfo}>
        <Image source={image} style={style.mainItemImage} />
        <View style={style.mainItemTextWrapper}>
          <Text style={style.mainItemLabel}>{label}</Text>
          <Text style={style.mainItemDesc}>{desc}</Text>
        </View>
      </View>
      <View style={style.mainItemTotal}>
        <TouchableOpacity style={style.mainItemTotalWrapper} onPress={incrementOnPress} activeOpacity={0.5}>
          <Text style={style.mainItemTotalIcon}>+</Text>
        </TouchableOpacity>
        <Text style={style.mainItemTotalValue}>{value}</Text>
        <TouchableOpacity style={style.mainItemTotalWrapper} onPress={decrementOnPress} activeOpacity={0.5}>
          <Text style={style.mainItemTotalIcon}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default function Account({ navigation }) {
  const [shirt, setShirt] = useState(0);
  const [trouser, setTrouser] = useState(0);
  const [tShirt, setTShirt] = useState(0);



  function headerMenOnPress() {
    console.log('headerMenOnPress');
  }

  function headerWomanOnPress() {
    console.log('headerWomenOnPress');
  }

  function headerBeddingOnPress() {
    console.log('headerBeddingOnPress');
  }

  function headerHouseholdOnPress() {
    console.log('headerHouseholdOnPress');
  }

  function shirtIncrement() {
    setShirt(shirt + 1);
  }

  function shirtDecrement() {
    setShirt(shirt - 1);
  }

  function trouserIncrement() {
    setTrouser(trouser + 1);
  }

  function trouserDecrement() {
    setTrouser(trouser - 1);
  }

  function tShirtIncrement() {
    setTShirt(tShirt + 1);
  }

  function tShirtDecrement() {
    setTShirt(tShirt - 1);
  }



  return (
    <View style={globalStyle.screenWrapper}>
      <View style={style.screen}>
        <View source={BgCircle2} style={style.header}>
          <Image source={BgCircle2} style={style.headerBackground} />
          <Text style={style.headerTitle}>Wash & Flod</Text>
          <Gap h={16} />
          <View style={style.headerItemWrapper}>
            <HeaderItem image={Men} label='Men' onPress={headerMenOnPress} />
            <HeaderItem image={Woman} label='Woman' onPress={headerWomanOnPress} />
            <HeaderItem image={Blanket} label='Bedding' onPress={headerBeddingOnPress} />
            <HeaderItem image={CleaningTools} label='Household' onPress={headerHouseholdOnPress} />
          </View>
        </View>

        <Gap h={100} />
        <ScrollView style={style.main}>
          <MainItem image={Shirt} label='Shirt' desc='2 x $5.000' value={shirt} incrementOnPress={shirtIncrement} decrementOnPress={shirtDecrement} />
          <Gap h={50} />
          <MainItem image={Trouser} label='Trouser' desc='6 x $5.000' value={trouser} incrementOnPress={trouserIncrement} decrementOnPress={trouserDecrement} />
          <Gap h={50} />
          <MainItem image={TShirt} label='T-Shirt' desc='3 x $5.000' value={tShirt} incrementOnPress={tShirtIncrement} decrementOnPress={tShirtDecrement} />
        </ScrollView>
      </View>

      <Navbar navigation={navigation} />
    </View>
  );
};
