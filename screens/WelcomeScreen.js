import React from 'react'
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import NextButton from '../components/NextButton';
import { useNavigation } from '@react-navigation/native';


export default function WelcomeScreen() {
  const navigation = useNavigation();
    return (
      <Screen style={{flex:1}}>
        <Screen>
        <AppText>Welcome!</AppText>
        <AppText>Enter some basic information to get started.</AppText>
        </Screen>
        <Screen style={{maxHeight:"50%",height: "100%"}}>
        <NextButton title={'Next'} onPress={()=>navigation.navigate("WeeklyIncome")}/>
        </Screen>
      </Screen>
    )
  }