import { ReactNode } from 'react'
import { ViewStyle } from 'react-native'

export type SafeAreaInputProps = {}

export type SafeAreaFunctionProps = {}

export type SafeAreaOwnProps = {
  modal?: boolean
  containerStyles?: ViewStyle
  children: ReactNode
}

export type SafeAreaProps = SafeAreaInputProps & SafeAreaFunctionProps & SafeAreaOwnProps
