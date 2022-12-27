import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

// components
import {
  Button,
  Gap,
} from '../components';

// assets - images
import {
  Camera
} from '../assets/images';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: '#130B2B',
    justifyContent: 'center',
  },
  image: {
    height: 250,
    width: 250,
    alignSelf: 'center',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
});

export default function GetStarted({navigation}) {
  const GetStartedOnPress = () => {
    navigation.replace('Welcome');
  };

  return(
    <View style={styles.screen}>
      <Image source={Camera} style={styles.image} />
      <Gap h={25} />
      <Text style={styles.title}>Cinema+</Text>
      <Gap h={75} />
      <Button title='Get Start' onPress={GetStartedOnPress} />
    </View>
  );
};
