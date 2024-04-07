import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Colors } from 'styles/Colors'
import { largeSpace, mediumSpace, smallSpace, x3LargeSpace, xSmallSpace } from 'styles/Spacing'
import { bodyBold, bodyRegular, h4Headline } from 'styles/Fonts'

type ItemDetailStyleType = {
  container: ViewStyle
  scrollView: ViewStyle
  header: ViewStyle
  headerText: TextStyle
  profileImage: ImageStyle
  iconsContainer: ViewStyle
  iconContainer: ViewStyle
  nameContainer: ViewStyle
  nameText: TextStyle
  detailContainer: ViewStyle
  detailIcon: ViewStyle
  detailText: TextStyle
  deleteButton: ViewStyle
  deleteButtonText: TextStyle
  iconBackground: ViewStyle
  detailTextContent: TextStyle
}

export default StyleSheet.create<ItemDetailStyleType>({
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  scrollView: { flex: 1 },
  headerText: { ...bodyBold, color: Colors.Background, marginLeft: xSmallSpace },
  header: {
    flexDirection: 'row',
    backgroundColor: Colors.Primary,
    paddingTop: largeSpace,
    paddingBottom: x3LargeSpace,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: Colors.Background,
    borderWidth: 3,
    marginTop: -x3LargeSpace,
    alignSelf: 'center',
  },
  iconsContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: 200 },
  iconContainer: { marginLeft: mediumSpace },
  nameContainer: {
    alignItems: 'center',
    marginVertical: xSmallSpace,
    gap: mediumSpace,
  },
  nameText: {
    ...h4Headline,
    fontWeight: 'bold',
    color: Colors.Black,
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: mediumSpace,
    borderBottomWidth: 1,
    borderBottomColor: Colors.CardShadow,
  },
  detailIcon: {
    marginRight: 8,
  },
  detailText: {
    ...bodyRegular,
    color: Colors.Black,
  },
  deleteButton: {
    backgroundColor: Colors.Primary,
    alignItems: 'center',
    padding: smallSpace,
    margin: mediumSpace,
    borderRadius: 30,
  },
  deleteButtonText: {
    color: Colors.Background,
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconBackground: {
    backgroundColor: Colors.Primary,
    borderRadius: 60,
    padding: xSmallSpace,
  },
  detailTextContent: { flexDirection: 'row', justifyContent: 'space-between', flex: 1 },
})
