import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

export default function LoginScreen() {
  return (
    <Screen>
      <AppText>LoginScreen</AppText>
      <AppButton title={'Login'}></AppButton>
      <AppButton title={'Register'}></AppButton>
    </Screen>
  )
}

const styles = StyleSheet.create({})