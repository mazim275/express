import { useState } from 'react'
import './App.css'
import Addemployee from './addemployee'
import Getemployee from './getemplyee'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Addemployee/>
      <Getemployee/>
        
    </>
  )
}

export default App
