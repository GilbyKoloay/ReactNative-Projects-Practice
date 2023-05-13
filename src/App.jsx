import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';

// screens
import {
  Splash,
  SignIn,
  SignUp,
  Home,
  Profil
} from './screens';

// images
import { DefaultProfilePicture } from './assets/images';



const Stack = createNativeStackNavigator();



export default function App() {
  const [profilePicture, setProfilePicture] = useState(DefaultProfilePicture);



  function changeProfilePicture(value) {
    console.log('changeProfilePicture', value);
    if(typeof(value) === 'number') setProfilePicture(value);
    else if(typeof(value) === 'object') setProfilePicture({uri: value.uri}); 
  }



  return (
    <NavigationContainer>
      <FlashMessage position='top' />
      <Stack.Navigator initialRouteName='SignUp' screenOptions={{headerShown: false}}>
      {/* <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false}}> */}
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignUp'>
          {() => <SignUp profilePicture={profilePicture} changeProfilePicture={changeProfilePicture} />}
        </Stack.Screen>
        <Stack.Screen name='Home'>
          {() => <Home profilePicture={profilePicture} />}
        </Stack.Screen>
        <Stack.Screen name='Profil'>
          {() => <Profil profilePicture={profilePicture} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
