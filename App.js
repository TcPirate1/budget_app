import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SettingsScreen from './screens/SettingsScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createNativeStackNavigator();
// const navigation = useNavigation();

export default function App() {
  return (
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerTitleAlign:'center'}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
      <StatusBar style='auto'/>
    </NavigationContainer>
    </PaperProvider>
  );
}