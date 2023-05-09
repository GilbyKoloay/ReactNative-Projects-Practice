import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import {
  Splash,
  Login,
  Home,
  Explore,
  Account,
  Cart
} from './screens';



const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false, animation: 'none'}}>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Explore' component={Explore} />
        <Stack.Screen name='Account' component={Account} />
        <Stack.Screen name='Cart' component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
