import React, { useEffect, useState } from 'react';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import LoginButton from '../components/LoginButton';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../Authentication';

export default function LoginScreen() {
  const newPage = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        newPage.replace("Welcome")
      }
    })
    return unsubscribe
  },[])

  const handleSignup = () => {
    auth.createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      alert.apply('Thank you for registering with' + user.email + 'you will be redirected to the Welcome page.')
    })
    .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
    })
    .catch(error => alert(error.message))
  }
  
  return (
    <Screen>
      <AppText>Login with your email</AppText>
      <AppText style={{marginBottom:"10%"}}>fill the field and click Register</AppText>
      <AppTextInput placeholder='Email' value={email} onChangeText={(email)=>setEmail(email)}></AppTextInput>
      <AppTextInput placeholder='Password' value={password} onChangeText={(password)=>setPassword(password)} secureTextEntry></AppTextInput>
      <LoginButton title='Login' onPress={handleLogin}/>
      <AppButton title='Register' onPress={handleSignup}/>
    </Screen>
  )
}