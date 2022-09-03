import { StyleSheet, } from 'react-native'
import React from 'react'
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import NextButton from '../components/NextButton';
import { useNavigation } from '@react-navigation/native';

export default function WeeklyIncome() {
    const navigation = useNavigation();
    return (
    <Screen style={{flex:1}}>
      <Screen>
        <AppText>Weekly Income</AppText>
        <AppText>Enter your income:</AppText>
        <AppTextInput placeholder={'$'}/>
        <AppButton title={'Add'} onPress={()=>console.log("Button will add")}/>
        <Screen style={{height:'60%'}}>
        <NextButton title={'Next'} onPress={()=>navigation.navigate("WeeklyPayment")}/>
        </Screen>
      </Screen>
    </Screen>
  )
}

const styles = StyleSheet.create({})