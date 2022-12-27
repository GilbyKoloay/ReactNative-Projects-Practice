import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Text, ScrollView, TouchableOpacity, Image} from 'react-native';

// components
import {
  Gap,
  NavBar,
} from '../components';

// assets - icons
import {
  Search,
} from '../assets/icons';

// assets - images
import {
  Avatar,
  AvatarWp,
  BlackAdam,
  WakandaForever,
} from '../assets/images';



const presale = [
  {
    id: 1,
    name: 'Avatar 2',
    desc: 'Lorem ipsum dolor sit amet.',
    gender: 'Science Fiction',
    duration: '195 min',
    image: Avatar,
    imageWp: AvatarWp,
  },
  {
    id: 2,
    name: 'Avatar 2',
    desc: 'Lorem ipsum dolor sit amet.',
    gender: 'Science Fiction',
    duration: '195 min',
    image: Avatar,
    imageWp: AvatarWp,
  },
  {
    id: 3,
    name: 'Avatar 2',
    desc: 'Lorem ipsum dolor sit amet.',
    gender: 'Science Fiction',
    duration: '195 min',
    image: Avatar,
    imageWp: AvatarWp,
  },
];

const premieres = [
  {
    id: 4,
    name: 'Black Adam',
    desc: 'Lorem ipsum dolor sit amet.',
    gender: 'Hero Hero Lmao',
    duration: '190 min',
    image: BlackAdam,
    imageWp: AvatarWp,
  },
  {
    id: 5,
    name: 'Black Adam',
    desc: 'Lorem ipsum dolor sit amet.',
    gender: 'Hero Hero Lmao',
    duration: '190 min',
    image: BlackAdam,
    imageWp: AvatarWp,
  },
  {
    id: 6,
    name: 'Black Adam',
    desc: 'Lorem ipsum dolor sit amet.',
    gender: 'Hero Hero Lmao',
    duration: '190 min',
    image: BlackAdam,
    imageWp: AvatarWp,
  },
  {
    id: 7,
    name: 'Black Adam',
    desc: 'Lorem ipsum dolor sit amet.',
    gender: 'Hero Hero Lmao',
    duration: '190 min',
    image: BlackAdam,
    imageWp: AvatarWp,
  },
];

const billboard = [
  {
    id: 8,
    name: 'Wakanda Forever',
    desc: 'Lorem ipsum dolor sit amet.',
    gender: 'Hero Hero Rush',
    duration: '200 min',
    image: WakandaForever,
    imageWp: AvatarWp,
  },
  {
    id: 9,
    name: 'Wakanda Forever',
    desc: 'Lorem ipsum dolor sit amet.',
    gender: 'Hero Hero Rush',
    duration: '200 min',
    image: WakandaForever,
    imageWp: AvatarWp,
  },
  {
    id: 10,
    name: 'Wakanda Forever',
    desc: 'Lorem ipsum dolor sit amet.',
    gender: 'Hero Hero Rush',
    duration: '200 min',
    image: WakandaForever,
    imageWp: AvatarWp,
  },
  {
    id: 11,
    name: 'Wakanda Forever',
    desc: 'Lorem ipsum dolor sit amet.',
    gender: 'Hero Hero Rush',
    duration: '200 min',
    image: WakandaForever,
    imageWp: AvatarWp,
  },
  {
    id: 12,
    name: 'Wakanda Forever',
    desc: 'Lorem ipsum dolor sit amet.',
    gender: 'Hero Hero Rush',
    duration: '200 min',
    image: WakandaForever,
    imageWp: AvatarWp,
  },
];



const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#130B2B',
    justifyContent: 'space-between',
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchTextInput: {
    flex: 1,
    margin: 0,
    paddingVertical: 2.5,
    paddingHorizontal: 15,
    fontFamily: 'Poppins-ExtraLight',
    fontSize: 12.5,
    color: 'white',
    borderWidth: 1.5,
    borderTopColor: '#F34C30',
    borderLeftColor: '#E7263F',
    borderRightColor: '#E7263F',
    borderBottomColor: '#DA004E',
    borderRadius: 50,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: 'white',
  },
  movieList: {

  },
  movie: {

  },
  movieImage: {
    height: 175,
    width: 100,
    marginRight: 10,
  },
});



const SearchComponent = () => {
  return(
    <View style={styles.searchWrapper}>
      <Search />
      <Gap w={5} />
      <TextInput 
        style={styles.searchTextInput} 
        placeholder='Search...' 
        placeholderTextColor='white' 
      />
    </View>
  );
};

const MoviesComponent = ({items, onPress}) => {
  return(
    <ScrollView style={styles.movieList} horizontal={true}>
      {items.map(m => (<TouchableOpacity 
        key={m.id} 
        style={styles.movie} 
        activeOpacity={0.5} 
        onPress={() => onPress(m)}
      >
        <Image source={m.image} style={styles.movieImage} />
      </TouchableOpacity>))}
    </ScrollView>
  );
};

export default function MovieList({navigation}) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const MovieOnPress = (movie) => {
    navigation.push('Movie', movie);
  };

  return(
    <View style={styles.screen}>
      <ScrollView style={{paddingHorizontal: 20, marginBottom: 20}}>
        <SearchComponent />
        <Gap h={10} />
        <Text style={styles.text}>Presale</Text>
        <MoviesComponent items={presale} onPress={MovieOnPress} />
        <Gap h={15} />
        <Text style={styles.text}>Premieres</Text>
        <MoviesComponent items={premieres} onPress={MovieOnPress} />
        <Gap h={15} />
        <Text style={styles.text}>Presale</Text>
        <MoviesComponent items={billboard} onPress={MovieOnPress} />
      </ScrollView>
      <NavBar />
    </View>
  );
};
