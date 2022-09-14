import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BudgetContext } from '../create_context_file';

export default function Other() {
  const budget = useContext(BudgetContext);
  return (
    <View>
      <Text>other</Text>
    </View>
  )
}

const styles = StyleSheet.create({})