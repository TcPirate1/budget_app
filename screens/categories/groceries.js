import { FlatList, StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'
import AppButton from '../../components/AppButton';

export default function Groceries() {
  return (
    <SafeAreaView>
      <AppButton title={'Add'}/>
        <FlatList style={styles.flatlist} ListEmptyComponent={ <Text style={styles.text}>There is nothing in this list</Text> }></FlatList>
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