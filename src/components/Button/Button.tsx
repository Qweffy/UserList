import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Colors } from 'styles/Colors'
import { ButtonProps } from './Button.types'

import styles from './Button.styles'

export const Button = ({ title, onPress, style, textStyle, disabled = false }: ButtonProps) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={onPress}
    style={[styles.button, style, { backgroundColor: disabled ? Colors.Background : Colors.Black }]}
    disabled={disabled}>
    <Text style={[styles.text, textStyle]}>{title}</Text>
  </TouchableOpacity>
)
