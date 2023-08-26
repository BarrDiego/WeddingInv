import { useState } from 'react'
import './App.css'
import LayoutPrl from './components/layoutPrl'
import WhatsAppButton from './components/utiles/WhatsappButton'
import ConfirmacionButton from './components/utiles/ConfirmacionButton'



function App() {
  const styleGral = {
      border: '1px solid'
  }
  return (
    <>
      <div className="confirmacion-button">
        <ConfirmacionButton />
      </div>
      <div className="whatsapp-button">
        <WhatsAppButton />
      </div>
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
