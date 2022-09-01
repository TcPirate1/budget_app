import React from 'react'
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import { useNavigation } from '@react-navigation/native';


export default function WelcomeScreen() {
  const navigation = useNavigation();
    return (
      <Screen>
        <AppText>Welcome!</AppText>
        <AppText>Enter some basic information to get started.</AppText>
        <AppButton title={'Next'} onPress={()=>navigation.navigate("WeeklyIncome")}/>
      </Screen>
    )
  }