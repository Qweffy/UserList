import { ColorValue, TextProps as RNTextProps } from 'react-native'

export type IconInputProps = {}

export type IconFunctionProps = {}

export type IconOwnProps = {
  size?: number
  name?: string
  color?: ColorValue | number
} & RNTextProps

export type IconProps = IconInputProps & IconFunctionProps & IconOwnProps
