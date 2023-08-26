import { useState } from 'react'
import './App.css'
import LayoutPrl from './components/layoutPrl'
import WhatsAppButton from './components/utiles/WhatsappButton'



function App() {
  const styleGral = {
      border: '1px solid'
  }
  return (
    <>
      <WhatsAppButton/>
      <div style={styleGral}>
        <div>
          <LayoutPrl/>
        </div>
        <div>aqui transicion</div>
        <div>aqui info</div>
        <div>aqui registro</div>
        <div> aqui algo mas</div>
      </div>
      
    </>
  )
}

export default App
