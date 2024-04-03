import { Platform, StyleSheet, ViewStyle } from 'react-native'

import { Colors } from 'styles/Colors'

type SafeAreaStyleType = {
  container: ViewStyle
}

export default StyleSheet.create<SafeAreaStyleType>({
  container: {
    backgroundColor: Colors.Background,
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
})
