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



const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <FlashMessage position='top' />
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false}}>
      {/* <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false}}> */}
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Profil' component={Profil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
