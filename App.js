import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SurveyScreen from './screens/SurveyScreen';
import Groceries from './screens/categories/Groceries';
import HealthCare from './screens/categories/HealthCare';
import Other from './screens/categories/Other';
import Takeout from './screens/categories/Takeout';
import Transport from './screens/categories/Transport';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

const Main = () => (
<Tab.Navigator screenOptions={{headerTitleAlign:'center'}} shifting={false}>
  <Tab.Screen name="Groceries" component={Groceries} options={{tabBarIcon: ()=>(<MaterialIcons name="shopping-cart" size={24} color="white" />)}}/>
  <Tab.Screen name="Transport" component={Transport} options={{tabBarIcon: ()=>(<MaterialIcons name="directions-car" size={24} color="white" />)}}/>
  <Tab.Screen name="Health Care" component={HealthCare} options={{tabBarIcon: ()=>(<MaterialIcons name="local-hospital" size={24} color="white" />)}}/>
  <Tab.Screen name="Takeout" component={Takeout} options={{tabBarIcon: ()=>(<MaterialIcons name="restaurant" size={24} color="white" />)}}/>
  <Tab.Screen name="Others" component={Other} options={{tabBarIcon: ()=>(<MaterialIcons name="miscellaneous-services" size={24} color="white" />)}}/>
  </Tab.Navigator>
);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerTitleAlign:'center'}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Survey" component={SurveyScreen} />
        <Stack.Screen name="Main" options={{ title: 'Home' }} component={Main} />
      </Stack.Navigator>
      <StatusBar style='auto'/>
    </NavigationContainer>
  );
}