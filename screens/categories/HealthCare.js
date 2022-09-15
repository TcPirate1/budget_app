import { StyleSheet, Text, View } from 'react-native';
import React, {useContext} from 'react';
import { BudgetContext } from '../create_context_file';

export default function HealthCare() {
  const budget = useContext(BudgetContext);
  return (
    <View>
      <Text>healthCare</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
