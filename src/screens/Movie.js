import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const style = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default function Movie({route, navigation}) {
  const {
    id,
    desc,
    gender,
    duration,
    image,
    imageWp
  } = route.params;

  return(
    <View>
      <Text>Movie</Text>
    </View>
  );
};
