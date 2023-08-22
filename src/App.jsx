import { useState } from 'react'


import Banner from './components/banner'
import Main from './components/main'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Banner />
      <Main />
    </div>
  )
}

export default App

