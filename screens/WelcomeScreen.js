import React from 'react';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import NextButton from '../components/NextButton';
import { useNavigation } from '@react-navigation/native';


export default function WelcomeScreen() {
  const newPage = useNavigation();
    return (
      <Screen>
        <Screen style={{justifyContent:'center'}}>
        <AppText>Welcome!</AppText>
        <AppText>Enter some basic information to get started.</AppText>
        </Screen>
        <Screen>
        <NextButton title={'Next'} onPress={()=>newPage.navigate("Survey")}/>
        </Screen>
      </Screen>
    )
  }