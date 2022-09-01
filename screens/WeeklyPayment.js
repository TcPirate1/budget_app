import { StyleSheet } from 'react-native'
import React from 'react'
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import { useNavigation } from '@react-navigation/native';

export default function WeeklyPayment() {
    const navigation = useNavigation();
    return (
    <Screen>
      <AppText>Weekly Payments</AppText>
      <AppButton title={'Next'} onPress={()=>navigation.navigate("SavingScreen")}/>
    </Screen>
  )
}

const styles = StyleSheet.create({})