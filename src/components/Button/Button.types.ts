import { TextStyle, ViewStyle } from 'react-native'

export interface ButtonProps {
  title: string
  onPress: () => void
  style?: ViewStyle
  textStyle?: TextStyle
  disabled?: boolean
}
