import { useState } from 'react'

import Banner from './components/banner'
import Formulario from './components/formulario'

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const NovoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores)
  }

  return (
    <div>
      <Banner />
      <div className='mx-auto'>
        <Formulario colaboradorCadastrado={colaborador => NovoColaborador(colaborador)} />
      </div>
    </div>
  )
}

export default App
