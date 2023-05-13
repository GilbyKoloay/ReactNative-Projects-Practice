import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import {
  Spalsh,
  SignIn,
  SignUp,
  Home,
  Profil
} from './screens';



const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Spalsh' component={Spalsh} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Profil' component={Profil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
