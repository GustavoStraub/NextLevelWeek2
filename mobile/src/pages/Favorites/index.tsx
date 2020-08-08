import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, AsyncStorage } from 'react-native'
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import { useFocusEffect } from '@react-navigation/native'
export default function Favorites() {

  const [favorites, setFavorites] = useState([])
  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(res => {
      if (res) {
        const favoritedTeachers = JSON.parse(res)

        setFavorites(favoritedTeachers)
      }
    })
  }

  useFocusEffect(() => {
    loadFavorites()
  })

  return (
    <View style={styles.container}>
      <PageHeader title='Meus Proffys favoritos' />
      <ScrollView contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16
      }}
        style={styles.teacherList}>
        {favorites.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited />
          )
        })}
      </ScrollView>
    </View>
  )
}
