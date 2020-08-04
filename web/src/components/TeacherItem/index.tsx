import React from 'react'
import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
export default function index() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/49662792?s=460&u=f6ef49d70fe35d4f03e11416a6b6bae0d936bd80&v=4" alt="Gustavo Straub" />
        <div>
          <strong>Gustavo Straub</strong>
          <span>Programação</span>
        </div>
      </header>
      <p>Professor de progração do Matheus. <br /><br /> Eu sinceramente tenho pena dele
          por me ter como professor, mas é isso.
          </p>
      <footer>
        <p>Preço/hora
              <strong>R$20,70</strong>
        </p>
        <button type='button'>
          <img src={whatsappIcon} alt="Entrar em contato" />
              Entrar em contato
            </button>
      </footer>
    </article>
  )
}
