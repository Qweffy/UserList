import React, { useState, useEffect } from 'react'
import { Alert, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import SafeArea from 'components/SafeArea'
import Button from 'components/Button'
import Icon from 'components/Icon'
import Input from 'components/Input'
import { mediumSpace } from 'styles/Spacing'
import { largeSize } from 'styles/Size'
import { login } from 'features/auth/authSlice'
import styles from './Login.styles'

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const handleLogin = async () => {
    if (username.trim() && password.trim()) {
      await AsyncStorage.setItem('isLoggedIn', 'true')
      dispatch(login())
      navigation.navigate('Home')
    } else {
      Alert.alert('Login Failed', 'Username and password cannot be empty')
    }
  }

  useEffect(() => {
    const checkLoginStatus = async () => {
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn')
      if (isLoggedIn === 'true') {
        navigation.navigate('Home')
      }
    }

    checkLoginStatus()
  }, [navigation])

  return (
    <SafeArea containerStyles={{ marginHorizontal: mediumSpace }}>
      <Icon name={'undo2'} style={styles.iconColor} size={largeSize} />
      <Text style={styles.text}>Log in</Text>
      <Input placeholder="Username" value={username} onChangeText={setUsername} />
      <Input placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="LOG IN" onPress={handleLogin} style={styles.button} />
    </SafeArea>
  )
}
