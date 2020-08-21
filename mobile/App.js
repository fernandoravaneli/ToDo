import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

// DESABILITA OS ALERTAS
console.disableYellowBox = true;

import Home from './src/views/Home'
import Task from './src/views/Task'

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Task,
  })
)

export default function App() {
  return (
    <SafeAreaView style={S.safeAreaView}>
      <Routes />
    </SafeAreaView>
  )
}

const S = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});