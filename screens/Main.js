import { Provider as PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import groceries from '../screens/categories/groceries'
import healthCare from '../screens/categories/healthCare'
import other from '../screens/categories/other'
import takeout from '../screens/categories/takeout'
import transport from '../screens/categories/transport'


const Tab = createMaterialBottomTabNavigator();
export default function Main() {
    return (
    <PaperProvider>
    <NavigationContainer>
      <Tab.Navigator initialRouteName='' screenOptions={{headerTitleAlign:'center'}} shifting={true}>
      <Tab.Screen name="Groceries" component={groceries} />
        <Tab.Screen name="Transport" component={transport} />
        <Tab.Screen name="Health Care" component={healthCare} />
        <Tab.Screen name="Takeout" component={takeout} />
        <Tab.Screen name="Others" component={other} />
      </Tab.Navigator>
    </NavigationContainer>
    </PaperProvider>
    )
}