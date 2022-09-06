import React from 'react';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import NextButton from '../components/NextButton';
import { useNavigation } from '@react-navigation/native';

export default function WeeklyBudgetCalc({route}) {
    const newPage = useNavigation();
    // let Calculation = Income - Payment - Savings;
    let Income=`${route.params.paramKey}`;
    // let Payment=`${route.params.paramKey}`;
    // let Savings=`${route.params.paramKey}`;
    return (
    <Screen>
      <Screen>
      <AppText>Budget Calculator</AppText>
      <AppTextInput editable={false}>You have ${Income}</AppTextInput>
      </Screen>
      <Screen>
      <NextButton title={'Next'} onPress={()=>newPage.navigate("Main Page")}/>
      </Screen>
    </Screen>
  )
}