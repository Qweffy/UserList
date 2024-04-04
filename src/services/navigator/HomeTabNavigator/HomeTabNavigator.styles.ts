import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Colors } from 'styles/Colors'

type HomeTabNavigatorStyleType = {
  container: ViewStyle
  text: TextStyle
  focusedIcon: ViewStyle
}

export default StyleSheet.create<HomeTabNavigatorStyleType>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  focusedIcon: {
    backgroundColor: Colors.CardShadow,
    borderRadius: 20,
    padding: 10,
  },
})
