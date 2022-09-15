import { FlatList, StyleSheet, Text, SafeAreaView, Platform, Dimensions } from 'react-native';
import React, { useContext } from 'react';
import AppButton from '../../components/AppButton';
import AppText from '../../components/AppText';
import { BudgetContext } from '../create_context_file';

const date = new Date();
const today = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;

const data = [
  {
    title : "Gum",
    cost : "$3",
    date : today,
  },
  {
    title : "Gum",
    cost : "$3",
    date : today,
  },
  {
    title : "Gum",
    cost : "$3",
    date : today,
  },
  {
    title : "Gum",
    cost : "$3",
    date : today,
  },
  {
    title : "Gum",
    cost : "$3",
    date : today,
  },
  {
    title : "Gum",
    cost : "$3",
    date : today,
  },
  {
    title : "Gum",
    cost : "$3",
    date : today,
  },
];
const Item = ({item}) => (
  <SafeAreaView>
  <Text style={styles.flatlistText}>{item.title}          {item.cost}          {item.date}</Text>
  </SafeAreaView>
);

export default function Groceries() {
  const budget = useContext(BudgetContext);
  return (
    <SafeAreaView style={styles.flatlist}>
      <AppText style={{marginTop: Platform.OS === "android" ?'3%': 0}}>${budget}</AppText>
      <AppButton title={'Add'}/>
      <AppButton title={'Remove'}/>
        <FlatList data={data} renderItem={Item} ListEmptyComponent={ <Text style={styles.text}>There is nothing in this list</Text> } ></FlatList>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    paddingTop: '3%',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    fontSize: 20,
    alignSelf: 'center',
  },
  flatlistText: {
    margin: '5%',
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 18,
  },
})