import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from './components/Header'



const App = () => {
  return (
    <View>
      <Header title="Shopping list"/>
    </View>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: '#876'
  }
})










export default App