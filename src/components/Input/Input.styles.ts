import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Colors } from 'styles/Colors'

type ButtonStyleType = {
  inputContainer: ViewStyle
  textInput: TextStyle
}

export default StyleSheet.create<ButtonStyleType>({
  inputContainer: {
    backgroundColor: Colors.InputBackground,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 2,
    borderColor: Colors.Black,
  },
  textInput: {
    color: Colors.Black,
    flex: 1,
    fontSize: 17,
  },
})
