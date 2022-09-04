import { StyleSheet } from 'react-native'
import React from 'react'
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import NextButton from '../components/NextButton';
import { useNavigation } from '@react-navigation/native';

export default function WeeklyPayment() {
    const navigation = useNavigation();
    return (
      <Screen style={{flex:1}}>
      <Screen>
        <AppText>Enter your total weekly payments:</AppText>
        <AppTextInput placeholder={'$'}/>
        <AppButton title={'Add'} onPress={()=>console.log("Button will add")}/>
      </Screen>
        <Screen>
        <NextButton title={'Next'} onPress={()=>navigation.navigate("Saving Screen")}/>
        </Screen>
    </Screen>
  )
}

const styles = StyleSheet.create({})