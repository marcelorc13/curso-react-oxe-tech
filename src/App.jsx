import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Banner from './components/banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Banner />
    </div>
  )
}

export default App

