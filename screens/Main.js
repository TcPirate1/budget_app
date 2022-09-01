import { Provider as PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Groceries from './categories/Groceries'
import HealthCare from './categories/HealthCare'
import Other from './categories/Other'
import Takeout from './categories/Takeout'
import Transport from './categories/Transport'


const Tab = createMaterialBottomTabNavigator();
export default function Main() {
    return (
    <PaperProvider>
    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName='' screenOptions={{headerTitleAlign:'center'}} shifting={true}>
      <Tab.Screen name="Groceries" component={Groceries} />
        <Tab.Screen name="Transport" component={Transport} />
        <Tab.Screen name="Health Care" component={HealthCare} />
        <Tab.Screen name="Takeout" component={Takeout} />
        <Tab.Screen name="Others" component={Other} />
      </Tab.Navigator>
    </NavigationContainer>
    </PaperProvider>
    )
}