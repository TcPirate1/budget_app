import { SafeAreaView, TouchableOpacity } from 'react-native';
import defaultStyles from "../config/styles";
import AppText from '../components/AppText';

export const Item = ({item}) => (
    <SafeAreaView >
      <TouchableOpacity>
      <AppText style={defaultStyles.flatlistText}>{item.title}           {item.cost}</AppText>
      <AppText>{item.date}</AppText>
      </TouchableOpacity>
    </SafeAreaView>
  );