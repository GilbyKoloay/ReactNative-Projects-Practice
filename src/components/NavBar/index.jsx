import { View, TouchableOpacity, Text } from 'react-native';

// style
import style from './style'; // local

// vectors
import {
  Home as HomeSVG,
  HomeSelected as HomeSelectedSVG,
  Explore as ExploreSVG,
  ExploreSelected as ExploreSelectedSVG,
  Account as AccountSVG,
  AccountSelected as AccountSelectedSVG,
  Cart as CartSVG,
  CartSelected as CartSelectedSVG
} from '../../vectors';



const Item = ({ Icon, name, selected=false, onPress }) => {
  return (
    <TouchableOpacity style={style.item} onPress={() => onPress()} activeOpacity={0.5}>
      {(selected) ? <Icon.selected /> : <Icon.notSelected />}
      <Text style={style.text(selected)}>{name}</Text>
    </TouchableOpacity>
  );
};



export default function NavBar({ current, navigation }) {
  return (
    <View style={style.component}>
      <Item Icon={{selected: HomeSelectedSVG, notSelected: HomeSVG}} name='Beranda' selected={(current === 'Home') && true} onPress={() => navigation.navigate('Home')} />
      <Item Icon={{selected: ExploreSelectedSVG, notSelected: ExploreSVG}} name='Explore' selected={(current === 'Explore') && true} onPress={() => navigation.navigate('Explore')} />
      <Item Icon={{selected: AccountSelectedSVG, notSelected: AccountSVG}} name='Account' selected={(current === 'Account') && true} onPress={() => navigation.navigate('Account')} />
      <Item Icon={{selected: CartSelectedSVG, notSelected: CartSVG}} name='Cart' selected={(current === 'Cart') && true} onPress={() => navigation.navigate('Cart')} />
    </View>
  );
};
