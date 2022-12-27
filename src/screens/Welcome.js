import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

// components
import {
  Gap,
  Select,
  Button,
} from '../components';

// assets - images
import {
  Cinema
} from '../assets/images';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 100,
    paddingHorizontal: 20,
    backgroundColor: '#130B2B',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'Poppins-Light',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

export default function Welcome({navigation}) {
  const cities = [
    {label: 'Manado', value: 'Manado'},
    {label: 'Minahasa Utara', value: 'Minahasa Utara'},
    {label: 'Bitung', value: 'Bitung'},
    {label: 'Kotamobagu', value: 'Kotamobagu'},
    {label: 'Tomohon', value: 'Tomohon'},
    {label: 'Minahasa', value: 'Minahasa'},
  ];

  const ContinueOnPress = () => {
    navigation.push('SignIn');
  };

  return(
    <View style={styles.screen}>
      <View>
        <Text style={styles.text}>Welcome to</Text>
        <Gap h={10} />
        <Image source={Cinema} style={{alignSelf: 'center'}} />
        <Gap h={35} />
        <Select propsItem={cities} />
      </View>
      <Button title='Continue' onPress={ContinueOnPress} />
    </View>
  );
};
