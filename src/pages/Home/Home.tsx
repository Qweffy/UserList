import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from 'services/navigator/navigationTypes'
import HorizontalBar from 'pages/Home/Home.components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
})

export const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const navigateToDetail = () => {
    navigation.navigate('ItemDetail', { itemId: '123' })
  }

  return (
    <View style={styles.container}>
      <HorizontalBar title={'Tu lista de contactos'} />
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Go to Detail" onPress={navigateToDetail} />
    </View>
  )
}
