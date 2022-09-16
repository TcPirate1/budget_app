import { SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import defaultStyles from "../config/styles";
import AppText from '../components/AppText';

export const Item = ({item}) => (
    <SafeAreaView >
      <TouchableOpacity onPress={()=>Alert.alert("You did it!", "Item selected!")}>
      <AppText style={defaultStyles.flatlistText}>{item.product}           {item.cost}</AppText>
      <AppText>{item.date}</AppText>
      </TouchableOpacity>
    </SafeAreaView>
  );