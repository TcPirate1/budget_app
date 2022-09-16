import { FlatList, Text, SafeAreaView, Platform } from 'react-native';
import React, { useContext } from 'react';
import AppButton from '../../components/AppButton';
import AppText from '../../components/AppText';
import { BudgetContext } from '../create_context_file';
import { Item } from '../Items';
import defaultStyles from "../../config/styles";
import { today } from '../Date';

const data = [
  {
    title : "Gum",
    cost : "$3",
    date : today,
  },
];

export default function Groceries() {
  const budget = useContext(BudgetContext);
  return (
    <SafeAreaView style={defaultStyles.flatlist}>
      <AppText style={{marginTop: Platform.OS === "android" ?'3%': 0}}>${budget}</AppText>
      <AppButton title={'Add'}/>
      <AppButton title={'Remove'}/>
        <FlatList data={data} renderItem={Item}
        ListEmptyComponent={ <Text style={defaultStyles.emptylistText}>There is nothing in this list</Text> } ></FlatList>
    </SafeAreaView>
  )
}