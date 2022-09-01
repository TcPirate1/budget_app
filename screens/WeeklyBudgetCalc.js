import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppButton from '../components/AppButton';
import { useNavigation } from '@react-navigation/native';

export default function WeeklyBudgetCalc() {
    const navigation = useNavigation();
    return (
    <View>
      <Text>WeeklyBudgetCalc</Text>
      <AppButton title={'Next'} onPress={()=>navigation.navigate("Main")}/>
    </View>
  )
}

const styles = StyleSheet.create({})