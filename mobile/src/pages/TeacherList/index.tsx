import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TextInput } from 'react-native'
import styles from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import api from '../../services/api'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native'


export default function TeacherList() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)

  const [subject, setSubject] = useState('')
  const [week_day, setWeek_day] = useState('')
  const [time, setTime] = useState('')
  const [teachers, setTeachers] = useState([])
  const [favorites, setFavorites] = useState<number[]>([])


  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(res => {
      if (res) {
        const favoritedTeachers = JSON.parse(res)
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id
        })
        setFavorites(favoritedTeachersIds)
      }
    })
  }

  useFocusEffect(()=> {
    loadFavorites()
  })

  function handleToggleFiltersVissible() {
    setIsFiltersVisible(!isFiltersVisible)
  }

  async function handleFiltersSubmit() {
    loadFavorites()
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    })
    setIsFiltersVisible(false)
    setTeachers(response.data)
  }

  return (
    <View style={styles.container}>
      <PageHeader title='Proffys Dinponíveis'
        headerRight={(
          <BorderlessButton onPress={handleToggleFiltersVissible} >
            <Feather name='filter' size={25} color='#fff' />
          </BorderlessButton>
        )} >
        {isFiltersVisible && (<View style={styles.searchForm}>
          <Text style={styles.label}>Matéria</Text>
          <TextInput placeholderTextColor="#c1bccc"
            style={styles.input}
            value={subject}
            onChangeText={text => setSubject(text)}
            placeholder="Qual a matéria?" />
          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Dia da semana</Text>
              <TextInput placeholderTextColor="#c1bccc"
                value={week_day}
                onChangeText={text => setWeek_day(text)}
                style={styles.input}
                placeholder="Qual o dia?" />
            </View>

            <View style={styles.inputBlock}>
              <Text style={styles.label}>Horário</Text>
              <TextInput placeholderTextColor="#c1bccc"
                value={time}
                onChangeText={text => setTime(text)}
                style={styles.input}
                placeholder="Qual horário?" />
            </View>
          </View>
          <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Filtrar</Text>
          </RectButton>
        </View>)}
      </PageHeader>
      <ScrollView contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16
      }}
        style={styles.teacherList}>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />
        ))}

      </ScrollView>
    </View>
  )
}
