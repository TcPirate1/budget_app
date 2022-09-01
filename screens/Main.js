import { Provider as PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createMaterialBottomTabNavigator();
export default function Main() {
    return (
    <PaperProvider>
    <NavigationContainer>
      <Tab.Navigator initialRouteName='' screenOptions={{headerTitleAlign:'center'}} shifting={true}>
      <Tab.Screen name="Groceries" component={WelcomeScreen} />
        <Tab.Screen name="Transport" component={LoginScreen} />
        <Tab.Screen name="Others" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </PaperProvider>
    )
}