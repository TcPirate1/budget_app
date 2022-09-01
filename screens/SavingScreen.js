import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppButton from '../components/AppButton';
import { useNavigation } from '@react-navigation/native';

export default function SavingScreen() {
    const navigation = useNavigation();
    return (
    <View>
      <Text>SavingScreen</Text>
      <AppButton title={'Next'} onPress={()=>navigation.navigate("WeeklyBudgetCalc")}/>
    </View>
  )
}

const styles = StyleSheet.create({})