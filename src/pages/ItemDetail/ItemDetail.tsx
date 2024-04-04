import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export const ItemDetail = ({ route }: any) => {
  const { itemId } = route.params
  return (
    <View style={styles.container}>
      <Text>This is the Detail Screen for item: {itemId}</Text>
    </View>
  )
}
