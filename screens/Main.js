import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Groceries from './categories/Groceries';
import HealthCare from './categories/HealthCare';
import Other from './categories/Other';
import Takeout from './categories/Takeout';
import Transport from './categories/Transport';
import { MaterialIcons } from '@expo/vector-icons';
import { BudgetContext } from './create_context_file';

const Tab = createMaterialBottomTabNavigator();

export default Main = ({route}) => (
  <BudgetContext.Provider value={route.params.weeklyBudget}>
  <Tab.Navigator screenOptions={{headerTitleAlign:'center'}} shifting={false}>
  <Tab.Screen name="Groceries" component={Groceries} options={{tabBarIcon: ()=>(<MaterialIcons name="shopping-cart" size={24} color="white" />)}}/>
  <Tab.Screen name="Transport" component={Transport} options={{tabBarIcon: ()=>(<MaterialIcons name="directions-car" size={24} color="white" />)}}/>
  <Tab.Screen name="Health Care" component={HealthCare} options={{tabBarIcon: ()=>(<MaterialIcons name="local-hospital" size={24} color="white" />)}}/>
  <Tab.Screen name="Takeout" component={Takeout} options={{tabBarIcon: ()=>(<MaterialIcons name="restaurant" size={24} color="white" />)}}/>
  <Tab.Screen name="Others" component={Other} options={{tabBarIcon: ()=>(<MaterialIcons name="miscellaneous-services" size={24} color="white" />)}}/>
  </Tab.Navigator>
  </BudgetContext.Provider>
);
//Tab buttons in that appears after SurveyScreen with weeklyBudget passed into it