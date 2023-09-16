import { useState } from 'react'
import './App.css'
import LayoutPrl from './components/layoutPrl'
import WhatsAppButton from './components/utiles/WhatsappButton'
import ConfirmacionButton from './components/utiles/ConfirmacionButton'




function App() { 
  
  return (
    <>
      <div className="whatsapp-button">
        <WhatsAppButton />
      </div>
      <div className='style-gral'>
        <div>
          <LayoutPrl/>
        </div>
        <div>aqui transicion</div>
        <div>aqui info</div>
        <ConfirmacionButton/>
        <div>aqui algo mas</div>
      </div>
      
    </>
  )
}

export default App
