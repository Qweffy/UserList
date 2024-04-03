import React from 'react'
import { View, TextInput } from 'react-native'
import { Colors } from 'styles/Colors'
import { InputProps } from './Input.types'

import styles from './Input.styles'

export const Input = ({ placeholder, secureTextEntry, value, onChangeText }: InputProps) => (
  <View style={styles.inputContainer}>
    <TextInput
      value={value}
      placeholder={placeholder}
      placeholderTextColor={Colors.TextSecondary}
      secureTextEntry={secureTextEntry}
      style={styles.textInput}
      onChangeText={onChangeText}
      autoCapitalize="none"
    />
  </View>
)
