import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const styleGral = {
      border: '1px solid'
  }
  return (
    <>
      <div style={styleGral}>
        <div>Aqui IMAGEN PORTADA</div>
        <div>aqui transicion</div>
        <div>aqui info</div>
        <div>aqui registro</div>
        <div> aqui algo mas</div>
      </div>
      
    </>
  )
}

export default App
