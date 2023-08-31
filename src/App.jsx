import { useState } from 'react'

import Banner from './components/banner'
import Formulario from './components/formulario'
import Time from './components/time'

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const NovoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores)
  }

  const times = [
    {
      nome: 'Programação',
      card: '#57C278',
      fundo: '#D9F7E9',
    },
    {
      nome: 'Front-End',
      card: '#82CFFA',
      fundo: '#E8F8FF',
    },
    {
      nome: 'Data Science',
      card: '#A6D157',
      fundo: '#F0F8E2',
    },
    {
      nome: 'Devops',
      card: '#E06B69',
      fundo: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      card: '#DB6EBF',
      fundo: '#FAE9F5',
    },
    {
      nome: 'Mobile',
      card: '#FFBA05',
      fundo: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      card: '#FF8A29',
      fundo: '#FFEEDF',
    },
  ]

  return (
    <div className='scroll-smooth'>
      <Banner />
      <div className='mx-auto'>
        <Formulario colaboradorCadastrado={colaborador => NovoColaborador(colaborador)} />
      </div>
      <div>
        {times.map(time =><Time nome={time.nome} fundo={time.fundo} card={time.card} />)}
      </div>
    </div>
  )
}

export default App
