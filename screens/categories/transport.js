import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { BudgetContext } from '../create_context_file';

export default function Transport() {
  const budget = useContext(BudgetContext);
  return (
    <View>
      <Text>{budget}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})