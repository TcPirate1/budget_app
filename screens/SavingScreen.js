import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import NextButton from '../components/NextButton';
import { useNavigation } from '@react-navigation/native';

export default function SavingScreen() {
    const navigation = useNavigation();
    return (
    <Screen>
      <Screen>
      <AppText>How much would you like to put away a week?</AppText>
      <AppTextInput placeholder={'$'}/>
      <AppButton title={'Add'} onPress={()=>console.log('Added')}/>
      </Screen>
      <Screen>
      <NextButton title={'Next'} onPress={()=>navigation.navigate("Budget Calculator")}/>
      </Screen>
    </Screen>
  )
}

const styles = StyleSheet.create({})