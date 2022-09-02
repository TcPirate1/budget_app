import { StyleSheet, } from 'react-native'
import React from 'react'
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import NextButton from '../components/NextButton';
import { useNavigation } from '@react-navigation/native';

export default function WeeklyIncome() {
    const navigation = useNavigation();
    return (
    <Screen>
        <AppText>Weekly Income</AppText>
        <AppButton title={'Add'} onPress={()=>console.log("Button will add")}/>
        <NextButton title={'Next'} onPress={()=>navigation.navigate("WeeklyPayment")}/>
    </Screen>
  )
}

const styles = StyleSheet.create({})