import { useState } from 'react'

import Banner from './components/banner'
import Formulario from './components/formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Banner />
      <Formulario />
    </div>
  )
}

export default App
