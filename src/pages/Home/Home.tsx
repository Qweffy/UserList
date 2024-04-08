import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity, ListRenderItem } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from 'services/navigator/navigationTypes'
import HorizontalBar from 'pages/Home/Home.components'
import { useGetUsersQuery } from 'app/services/usersApi'
import { Colors } from 'styles/Colors'
import Icon from 'components/Icon'
import { largeSize } from 'styles/Size'
import { SafeAreaView } from 'react-native-safe-area-context'
import { User, UsersResponse } from 'types/UserTypes'
import styles from './Home.styles'

export const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const { data, error, isLoading } = useGetUsersQuery() as { data?: UsersResponse; error: any; isLoading: boolean }

  if (isLoading) return <Text>Cargando...</Text>
  if (error) return <Text>Error al cargar los usuarios</Text>

  const navigateToUserDetail = (user: User) => {
    navigation.navigate('ItemDetail', { user })
  }

  const renderItem: ListRenderItem<User> = ({ item }) => (
    <View style={styles.listItem}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={{ uri: item.photo || 'https://via.placeholder.com/50' }} style={styles.profileImage} />
        <Text style={styles.listItemText}>{`${item.name} ${item.surnames}`}</Text>
      </View>
      <TouchableOpacity onPress={() => navigateToUserDetail(item)}>
        <Icon name={'arrow-right2'} size={largeSize} color={Colors.Primary} />
      </TouchableOpacity>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <HorizontalBar title={'Tu lista de contactos'} />
      <FlatList data={data?.users} renderItem={renderItem} keyExtractor={(item) => item.contactId.toString()} />
    </SafeAreaView>
  )
}
