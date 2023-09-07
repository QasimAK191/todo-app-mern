import { useState } from 'react'
import './App.css'
import NavHeader from './components/NavHeader.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <NavHeader></NavHeader>
          <p>Helloaa World</p>


      
    </>
  )
}

export default App
