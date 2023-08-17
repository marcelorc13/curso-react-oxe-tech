import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Banner from './components/banner'
import Formulario from './components/formulario'

//import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Banner/>
      <Formulario/>
    </div>
  )
}

export default App

