import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Colors } from 'styles/Colors'
import { mediumSpace } from 'styles/Spacing'

type HomeStyleType = {
  container: ViewStyle
  listItem: ViewStyle
  listItemText: TextStyle
  profileImage: ImageStyle
}

export default StyleSheet.create<HomeStyleType>({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  listItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.Background,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: mediumSpace,
  },
  listItemText: {
    marginLeft: 10,
    color: Colors.Black,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
})
