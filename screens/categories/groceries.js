import { FlatList, StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'

export default function Groceries() {
  return (
    <SafeAreaView>
        <FlatList ListEmptyComponent={ <Text>There is nothing in this list</Text>}></FlatList>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})