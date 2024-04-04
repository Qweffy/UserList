import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from 'pages/Login'
import ItemDetail from 'pages/ItemDetail'
import { RootStackParamList } from 'services/navigator/navigationTypes'
import HomeTabNavigator from 'services/navigator/HomeTabNavigator'

const Stack = createNativeStackNavigator<RootStackParamList>()

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    <Stack.Screen name="Home" component={HomeTabNavigator} options={{ headerShown: false }} />
    <Stack.Screen name="ItemDetail" component={ItemDetail} options={{ headerShown: false }} />
  </Stack.Navigator>
)

export default AppNavigator
