import { Provider as PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
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
      <Tab.Navigator screenOptions={{headerTitleAlign:'center'}} shifting={false}>
      <Tab.Screen name="Groceries" component={Groceries} options={{tabBarIcon: ()=>(<MaterialIcons name="shopping-cart" size={24} color="white" />)}}/>
        <Tab.Screen name="Transport" component={Transport} options={{tabBarIcon: ()=>(<MaterialIcons name="directions-car" size={24} color="white" />)}}/>
        <Tab.Screen name="Health Care" component={HealthCare} options={{tabBarIcon: ()=>(<MaterialIcons name="local-hospital" size={24} color="white" />)}}/>
        <Tab.Screen name="Takeout" component={Takeout} options={{tabBarIcon: ()=>(<MaterialIcons name="restaurant" size={24} color="white" />)}}/>
        <Tab.Screen name="Others" component={Other} options={{tabBarIcon: ()=>(<MaterialIcons name="miscellaneous-services" size={24} color="white" />)}}/>
      </Tab.Navigator>
    </NavigationContainer>
    </PaperProvider>
    )
}