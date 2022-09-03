import { FlatList, StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'

export default function Groceries() {
  return (
    <SafeAreaView>
        <FlatList data={[{title:'groceries'}]}
        renderItem={({item})=><Text style={item.title}></Text>}></FlatList>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})