import React from 'react'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'

import { IconProps } from './Icon.types'

const icoMoonConfig = require('assets/icons/selection.json')

const IconSet = createIconSetFromIcoMoon(icoMoonConfig, 'iconsax', 'iconsax.ttf') as any
export const Icon = (props: IconProps) => {
  const { children } = props

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <IconSet {...(props as any)}>{children}</IconSet>
}
