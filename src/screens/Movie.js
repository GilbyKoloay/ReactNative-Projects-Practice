import React, { startTransition } from 'react';
import {StyleSheet, View, ImageBackground, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// components
import {
  BackButton,
  Button,
  Gap,
} from '../components';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingBottom: 50,
    backgroundColor: '#130B2B',
    justifyContent: 'space-between',
  },
  image: {
    flex: 2,
    padding: 25,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
  text: (weight) => ({
    fontFamily: `Poppins-${weight}`,
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  }),
  middleContent: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
  },
  dateButtonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateButton: {
    padding: 10,
    borderRadius: 10,
  },
  dateButtonText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12.5,
    color: 'white',
    textAlign: 'center',
  },
});

export default function Movie({route, navigation}) {
  const {
    name,
    desc,
    gender,
    duration,
    imageWp
  } = route.params;

  const BackButtonOnPress = () => {
    navigation.goBack();
  };

  const DateButtonComponent = ({day, date}) => {
    return(
      <TouchableOpacity activeOpacity={0.5}>
        <LinearGradient 
          style={styles.dateButton} 
          colors={['#FA6900','#DA004E']} 
          useAngle={ true } 
          angle={ 135 } 
          angleCenter={{ x: 0.5, y: 0.5 }}
        >
          <Text style={styles.dateButtonText}>{day}</Text>
          <Text style={styles.dateButtonText}>{date}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  return(
    <View style={styles.screen}>
      <ImageBackground source={imageWp} style={styles.image}>
        <BackButton onPress={BackButtonOnPress} />
        <View>
          <Text style={styles.title}>{name}</Text>
          <Gap h={10} />
          <Text style={styles.text('Regular')}>{desc}</Text>
        </View>
      </ImageBackground>

      <View style={styles.middleContent}>
        <View>
          <Text style={styles.text('Medium')}>Gender: {gender}</Text>
          <Text style={styles.text('Medium')}>Duration: {duration}</Text>
        </View>
        <View style={styles.dateButtonsWrapper}>
          <DateButtonComponent day='Mon' date='dic 14' />
          <DateButtonComponent day='Mon' date='dic 14' />
          <DateButtonComponent day='Mon' date='dic 14' />
          <DateButtonComponent day='Mon' date='dic 14' />
        </View>
      </View>
      
      <View style={{paddingHorizontal: 20}}>
        <Button title='Continue' />
      </View>
    </View>
  );
};
