import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import LoginButton from '../components/LoginButton';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../Authentication';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

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
  //Skips the login page if there is already a user signed in

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      alert(`Thank you for registering with ${user.email} \nyou will be redirected to the Welcome page.`)
    })
    .catch(error => alert(error.message))
  }
  //Registration

  const handleLogin = async() => {
    await signInWithEmailAndPassword(auth, email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      alert(`You have successfully logged in with ${user.email}`)
    })
    .catch(error => alert(error.message))
  }
  //Login
  
  return (
    <Screen>
      <AppText>Login with your email</AppText>
      <AppText style={{marginBottom:"10%"}}>fill the field and click Register</AppText>
      <AppTextInput placeholder='Email' value={email} onChangeText={(email)=>setEmail(email)}></AppTextInput>
      <AppTextInput placeholder='Password' value={password} onChangeText={(password)=>setPassword(password)} secureTextEntry></AppTextInput>
      <LoginButton title='Login' onPress={handleLogin}/>
      <AppButton title='Register' onPress={handleSignup}/>
      <AppText style={{marginTop:'10%'}}>Or try the app <Text onPress={()=>newPage.navigate("Welcome")} style={{color:'green', textDecorationLine: 'underline'}}>here</Text></AppText>
    </Screen>
  )
}