import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SettingsScreen from './screens/SettingsScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import WelcomeScreen from './screens/WelcomeScreen';
import WeeklyIncome from './screens/WeeklyIncome';
import WeeklyPayment from './screens/WeeklyPayment';
import SavingScreen from './screens/SavingScreen';
import WeeklyBudgetCalc from './screens/WeeklyBudgetCalc';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerTitleAlign:'center'}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="WeeklyIncome" component={WeeklyIncome} />
        <Stack.Screen name="WeeklyIncome" component={WeeklyPayment} />
        <Stack.Screen name="SavingScreen" component={SavingScreen} />
        <Stack.Screen name="SavingScreen" component={WeeklyBudgetCalc} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
      <StatusBar style='auto'/>
    </NavigationContainer>
    </PaperProvider>
  );
}