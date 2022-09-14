import { FlatList, StyleSheet, Text, SafeAreaView } from 'react-native'
import React, { useContext } from 'react'
import AppButton from '../../components/AppButton';
import AppText from '../../components/AppText';
import { BudgetContext } from '../create_context_file';

const data = [
  {
    title : "Gum",
    cost : "$3",
  }
];
const Item = ({item}) => (
  <SafeAreaView style={{flexDirection:'row'}}>
  <AppText>{item.title}</AppText>
  <AppText style={{marginLeft:'10%'}}>{item.cost}</AppText>
  </SafeAreaView>
);

export default function Groceries() {
  const budget = useContext(BudgetContext);
  return (
    <SafeAreaView>
      <AppText>${budget}</AppText>
      <AppButton title={'Add'}/>
        <FlatList data={data} renderItem={Item} style={styles.flatlist} ListEmptyComponent={ <Text style={styles.text}>There is nothing in this list</Text> }></FlatList>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flatlist: {
    alignSelf:'center',
  },
  text: {
    fontStyle: 'italic',
    textDecorationLine: 'underline'
  },
})