import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import styles from './SafeArea.styles'
import { SafeAreaProps } from './SafeArea.types'

export const SafeArea = ({ children, modal = false, containerStyles }: SafeAreaProps) => (
  <SafeAreaView
    style={containerStyles || styles.container}
    edges={modal ? ['bottom', 'left', 'right'] : ['top', 'bottom', 'left', 'right']}>
    {children}
  </SafeAreaView>
)
