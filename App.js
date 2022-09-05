import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import WeeklyIncome from './screens/WeeklyIncome';
import WeeklyPayment from './screens/WeeklyPayment';
import SavingScreen from './screens/SavingScreen';
import WeeklyBudgetCalc from './screens/WeeklyBudgetCalc';
import Main from './screens/Main';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerTitleAlign:'center'}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Weekly Income" component={WeeklyIncome} />
        <Stack.Screen name="Weekly Payment" component={WeeklyPayment} />
        <Stack.Screen name="Saving Screen" component={SavingScreen} />
        <Stack.Screen name="Budget Calculator" component={WeeklyBudgetCalc} />
        <Stack.Screen name="Main Page" component={Main} />
      </Stack.Navigator>
      <StatusBar style='auto'/>
    </NavigationContainer>
  );
}