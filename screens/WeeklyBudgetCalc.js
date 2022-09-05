import React from 'react';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import NextButton from '../components/NextButton';
import { useNavigation } from '@react-navigation/native';

export default function WeeklyBudgetCalc() {
    const navigation = useNavigation();
    return (
    <Screen>
      <Screen>
      <AppText>Budget Calculator</AppText>
      <AppTextInput editable={false}>You have ${}</AppTextInput>
      </Screen>
      <Screen>
      <NextButton title={'Next'} onPress={()=>navigation.navigate("Main Page")}/>
      </Screen>
    </Screen>
  )
}