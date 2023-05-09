import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import {
  Splash,
  Login,
  Home,
  Payment,
  Account
} from './screens';



const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false}}> */}
      <Stack.Navigator initialRouteName='Account' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Payment' component={Payment} />
        <Stack.Screen name='Account' component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
