import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from 'pages/Home'
import Icon from 'components/Icon'
import { Colors } from 'styles/Colors'
import { x5LargeSize, xxSmallSize } from 'styles/Size'

import styles from './HomeTabNavigator.styles'

const GenericPage = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Página Genérica</Text>
  </View>
)

const Tab = createBottomTabNavigator()

export const HomeTabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: {
        backgroundColor: Colors.Primary,
        height: x5LargeSize,
        paddingBottom: xxSmallSize,
      },
      tabBarLabelStyle: { color: Colors.Background, paddingBottom: xxSmallSize },
      tabBarIcon: ({ focused, size }) => {
        let iconName
        if (route.name === 'Muestras') {
          iconName = 'aid-kit'
        }
        if (route.name === 'Home') {
          iconName = 'home3'
        }
        if (route.name === 'Vademecum') {
          iconName = 'checkbox-unchecked'
        }
        if (!route.name) {
          iconName = 'home3'
        }

        const iconStyle = focused ? styles.focusedIcon : {}

        return (
          <View style={iconStyle}>
            <Icon name={iconName} size={size} color={Colors.Background} />
          </View>
        )
      },
    })}>
    <Tab.Screen name="Muestras" component={GenericPage} />
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Vademecum" component={GenericPage} />
  </Tab.Navigator>
)
