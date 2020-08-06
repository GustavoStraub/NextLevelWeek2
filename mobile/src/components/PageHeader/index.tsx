import React from 'react'
import { View, Text, Image } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import styles from './styles'
import backIcon from '../../assets/images/icons/back.png'
import Logo from '../../assets/images/logo.png'
import { useNavigation } from '@react-navigation/native'

interface PageHeaderProps {
  title: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const { navigate } = useNavigation()

  function handleGoBack() {
    navigate('Landing')
  }
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode='contain' />
        </BorderlessButton>
        <Image source={Logo} resizeMode='contain' />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default PageHeader