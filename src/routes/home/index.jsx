import { useState } from 'react'

import Banner from '../../components/banner'
import Formulario from '../../components/formulario'
import Time from '../../components/time'
import Footer from '../../components/footer'

import BotaoAdd from '../../assets/btn-add.png'

export default function Home() {

    const [colaboradores, setColaboradores] = useState([])
  
    const NovoColaborador = (colaborador) => {
      setColaboradores([...colaboradores, colaborador])
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
      <main className='scroll-smooth'>
        <Banner />
        <div className='mx-auto'>
          <Formulario
            times={times.map(time => time.nome)}
            colaboradorCadastrado={colaborador => NovoColaborador(colaborador)} />
        </div>
        <div>
          <div className='mb-12 flex flex-row items-center justify-center relative'>
            <div>
              <h1 className='text-center text-4xl font-titulo text-color-btn'>Minha Organização:</h1>
              <div className="mx-auto mt-5 h-1 w-16 bg-color-btn"></div>
              <img src={BotaoAdd} className='hidden md:block md:w-24 md:absolute md:right-32 md:-top-4' />
            </div>
          </div>
          {times.map(
            time => <Time
              key={time.nome}
              nome={time.nome}
              fundo={time.fundo}
              card={time.card}
  
              colaboradores={colaboradores.filter(
                colaborador => colaborador.time == time.nome)} />)}
        </div>
        <Footer />
      </main>
    )
  }
  