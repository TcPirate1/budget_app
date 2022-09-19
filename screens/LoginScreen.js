import React, { useState } from 'react';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import LoginButton from '../components/LoginButton';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../Authentication';

export default function LoginScreen() {
  const newPage = useNavigation();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSignup = () => {}
  
  return (
    <Screen>
      <AppText>Login with your email</AppText>
      <AppText style={{marginBottom:"10%"}}>fill the field and click Register</AppText>
      <AppTextInput placeholder='Email' value={email} onChangeText={(email)=>setEmail(email)}></AppTextInput>
      <AppTextInput placeholder='Password' value={password} onChangeText={(password)=>setPassword(password)} secureTextEntry></AppTextInput>
      <LoginButton title='Login' onPress={()=>newPage.navigate("Welcome")}/>
      <AppButton title='Register'/>
    </Screen>
  )
}