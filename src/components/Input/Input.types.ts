export interface InputProps {
  value: string
  placeholder: string
  secureTextEntry?: boolean
  onChangeText: (text: string) => void
}
