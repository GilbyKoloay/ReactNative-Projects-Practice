import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
      <Stack.Navigator initialRouteName='SignIn' screenOptions={{headerShown: false}}>
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
