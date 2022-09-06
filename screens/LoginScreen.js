import React from 'react'
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import LoginButton from '../components/LoginButton';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const newPage = useNavigation();
  return (
    <Screen>
      <AppText>Login with your email</AppText>
      <AppText style={{marginBottom:"10%"}}>fill the field and click Register</AppText>
      <AppTextInput placeholder={'Email'}></AppTextInput>
      <AppTextInput placeholder={'Password'} secureTextEntry></AppTextInput>
      <LoginButton title={'Login'} onPress={()=>newPage.navigate("Welcome")}/>
      <AppButton title={'Register'}/>
    </Screen>
  )
}