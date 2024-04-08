import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking, ScrollView } from 'react-native'
import Icon from 'components/Icon'
import { Colors } from 'styles/Colors'
import { largeSize, mediumSize } from 'styles/Size'
import { mediumSpace } from 'styles/Spacing'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useNavigation } from '@react-navigation/native'
import styles from './ItemDetail.styles'

export const ItemDetail = ({ route }: any) => {
  const { user } = route.params
  const phoneNumber = '+5492233465336'

  const sendSMS = () => {
    Linking.openURL(`sms:${phoneNumber}`)
  }

  const makeCall = () => {
    Linking.openURL(`tel:${phoneNumber}`)
  }

  const sendWhatsApp = () => {
    const waNumber = phoneNumber.replace('+', '')
    Linking.openURL(`https://wa.me/${waNumber}`)
  }

  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconContainer}>
            <Icon name={'arrow-left2'} color={Colors.Background} size={mediumSize} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Contacto</Text>
        </View>
        <Image source={{ uri: user.photo || 'https://via.placeholder.com/120' }} style={styles.profileImage} />
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{`${user.name} ${user.surnames}`}</Text>
          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={makeCall} style={styles.iconBackground}>
              <Icon name={'phone'} color={Colors.Background} size={mediumSize} />
            </TouchableOpacity>
            <TouchableOpacity onPress={sendSMS} style={styles.iconBackground}>
              <Icon name={'envelop'} color={Colors.Background} size={mediumSize} />
            </TouchableOpacity>
            <TouchableOpacity onPress={sendWhatsApp} style={styles.iconBackground}>
              <Icon name={'whatsapp'} color={Colors.Background} size={mediumSize} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.detailContainer}>
          <Icon name="calendar" size={largeSize} color={Colors.Black} style={styles.detailIcon} />
          <View style={styles.detailTextContent}>
            <Text style={styles.detailText}>Fecha de nacimiento</Text>
            <Text style={styles.detailText}>{user.birthDate}</Text>
          </View>
        </View>
        <View style={styles.detailContainer}>
          <Icon name="accessibility" size={largeSize} color={Colors.Black} style={styles.detailIcon} />
          <View style={styles.detailTextContent}>
            <Text style={styles.detailText}>Género</Text>
            <Text style={styles.detailText}>{user.gender}</Text>
          </View>
        </View>
        <View style={styles.detailContainer}>
          <Icon name="user-tie" size={largeSize} color={Colors.Black} style={styles.detailIcon} />
          <View style={styles.detailTextContent}>
            <Text style={styles.detailText}>Profesión</Text>
            <Text style={styles.detailText}>{user.profesion}</Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Eliminar de mi lista</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
