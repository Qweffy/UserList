import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Colors } from 'styles/Colors'
import { mediumSize } from 'styles/Size'
import { largeSpace, smallSpace } from 'styles/Spacing'

type ButtonStyleType = {
  button: ViewStyle
  text: TextStyle
}

export default StyleSheet.create<ButtonStyleType>({
  button: {
    backgroundColor: Colors.Black,
    paddingVertical: smallSpace,
    paddingHorizontal: largeSpace,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text: {
    color: Colors.Background,
    fontSize: mediumSize,
    fontWeight: 'bold',
  },
})
