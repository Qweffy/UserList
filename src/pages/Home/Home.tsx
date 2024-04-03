import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export const Home = () => (
  <View style={styles.container}>
    <Text>Welcome to the Home Screen!</Text>
  </View>
)
