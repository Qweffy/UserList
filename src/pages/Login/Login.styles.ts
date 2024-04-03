import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Colors } from 'styles/Colors'
import { x4LargeSpace } from 'styles/Spacing'
import { h2Headline } from 'styles/Fonts'

type LoginStyleType = {
  iconColor: TextStyle
  button: ViewStyle
  text: TextStyle
}

export default StyleSheet.create<LoginStyleType>({
  iconColor: { color: Colors.Black },
  button: { height: x4LargeSpace },
  text: { ...h2Headline, color: Colors.Black },
})
