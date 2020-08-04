import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import './styles.css'
import TeacherItem from '../../components/TeacherItem'

export default function index() {
  return (
    <div id='page-teacher-list' className='container'>
      <PageHeader title='Esses são os porffys disponiveis.'>
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id='subject' />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id='week_day' />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id='time' />
          </div>
        </form>
      </PageHeader>
      <main>
       <TeacherItem />
       <TeacherItem />
      </main>
    </div>
  )
}