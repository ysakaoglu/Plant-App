import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Introduction from './src/screens/Introduction';
import { StatusBar } from 'react-native';
import LoginorRegister from './src/screens/LoginorRegister';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <Stack.Navigator screenOptions={{headerShown: 0}}>
        <Stack.Screen name='Introduction' component={Introduction}/>
        <Stack.Screen name='LoginRegister' component={LoginorRegister}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
