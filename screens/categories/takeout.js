import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BudgetContext } from '../create_context_file';

export default function Takeout() {
  const budget = useContext(BudgetContext);
  return (
    <View>
      <Text>takeout</Text>
    </View>
  )
}

const styles = StyleSheet.create({})