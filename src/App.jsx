import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import {
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
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false, animation: 'none'}}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Explore' component={Explore} />
        <Stack.Screen name='Account' component={Account} />
        <Stack.Screen name='Cart' component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
