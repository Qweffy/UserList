import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'components/Icon'
import { Colors } from 'styles/Colors'
import { HorizontalBarProps } from 'pages/Home/Home.types'
import { largeSpace, x4LargeSpace } from 'styles/Spacing'
import { largeSize } from 'styles/Size'

const styles = StyleSheet.create({
  container: {
    height: x4LargeSpace,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: largeSpace,
    backgroundColor: Colors.Primary,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.Background,
  },
})
const HorizontalBar = ({ title, containerStyles }: HorizontalBarProps) => (
  <View style={[styles.container, containerStyles]}>
    <Icon name={'home3'} style={styles.icon} size={largeSize} color={Colors.Background} />
    <Text style={styles.title}>{title}</Text>
    <Icon name={'bell'} style={styles.icon} size={largeSize} color={Colors.Background} />
  </View>
)

export default HorizontalBar
