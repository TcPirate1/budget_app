import React from 'react'
import Screen from '../components/Screen';
import AppText from '../components/AppText';

export default function WelcomeScreen() {
    return (
      <Screen>
        <AppText>Welcome!</AppText>
        <AppText>Enter some basic information to get started.</AppText>
      </Screen>
    )
  }