import React, { useState } from 'react';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import NextButton from '../components/NextButton';
import { useNavigation } from '@react-navigation/native';
import { Alert, KeyboardAvoidingView, ScrollView } from 'react-native';

export default function SurveyScreen() {
    const newPage = useNavigation();
    const [weeklyIncome, setIncome] = useState();
    const [weeklyExpense, setExpense] = useState();
    const [weeklySaving, setSaving] = useState();

    let budget = weeklyIncome - weeklyExpense - weeklySaving
    if (Number.isNaN(budget)){
      budget = 0;
    }
    else{
      budget = budget;
    }
    
    return (
    <KeyboardAvoidingView style={{flex:1}}>
      <ScrollView style={{marginTop:'1%'}}>
        <AppText>What is your weekly income?</AppText>
        <AppTextInput keyboardType="numeric" placeholder={'$'} value={weeklyIncome} onChangeText={(weeklyIncome) => setIncome(weeklyIncome)}/>
        <AppButton title={'Clear'} onPress={()=>{setIncome(0);Alert.alert("Field cleared")}}/>

        <AppText>What are your weekly expenses?</AppText>
        <AppTextInput keyboardType="numeric" placeholder={'$'} value={weeklyExpense} onChangeText={(weeklyExpense) => setExpense(weeklyExpense)}/>
        <AppButton title={'Clear'} onPress={()=>{setExpense(0);Alert.alert("Field cleared")}}/>

        <AppText>How much would you like to save in a week?</AppText>
        <AppTextInput keyboardType="numeric" placeholder={'$'} value={weeklySaving} onChangeText={(weeklySaving) => setSaving(weeklySaving)}/>
        <AppButton title={'Clear'} onPress={()=>{setSaving(0);Alert.alert("Field cleared")}}/>

        <AppText>The amount you have to spend this week is:</AppText>
        <AppTextInput editable={false}>${budget}</AppTextInput>

        <NextButton title={'Next'} onPress={()=>newPage.navigate("Main",{paramKey: budget})}/>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}