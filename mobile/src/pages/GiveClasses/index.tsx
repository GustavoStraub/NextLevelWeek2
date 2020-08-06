import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import styles from './styles'
import GiveClassesBgImage from '../../assets/images/give-classes-background.png'
import { useNavigation } from '@react-navigation/native'

export default function GiveClasses() {
  const { goBack } = useNavigation()

  function handleNavigateBack(){
    goBack()
  }

  return (
    <View style={styles.container}>
      <ImageBackground resizeMode='contain' source={GiveClassesBgImage} style={styles.content}>
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web.
      </Text>
      </ImageBackground>
      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.textButton}>Tudo bem</Text>
      </RectButton>
    </View>
  )
}
