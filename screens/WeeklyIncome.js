import React, { useState } from 'react';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import NextButton from '../components/NextButton';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

export default function WeeklyIncome({navigation}) {
    const newPage = useNavigation();
    const [weeklyIncome, setIncome] = useState();
    return (
    <Screen>
      <Screen>
        <AppText>Enter your income:</AppText>
        <AppTextInput placeholder={'$'} value={weeklyIncome} onChangeText={(weeklyIncome)=> setIncome(weeklyIncome)}/>
        <AppButton title={'Add'} onPress={()=>{navigation.navigate("Budget Calculator",{paramKey:weeklyIncome});Alert.alert("Value added")}}/>
      </Screen>
        <Screen>
        <NextButton title={'Next'} onPress={()=>newPage.navigate("Weekly Payment")}/>
        </Screen>
    </Screen>
  )
}