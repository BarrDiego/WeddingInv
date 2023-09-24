import { useState } from 'react'
import './App.css'
import LayoutPrl from './components/layoutPrl'
import WhatsAppButton from './components/utiles/WhatsappButton'
import ConfirmacionButton from './components/utiles/ConfirmacionButton'
import { LayoutTrn01 } from './components/LayoutTrn01'
import { LayoutInfo } from './components/LayoutInfo'
import { Temporizador } from './components/utiles/Temporizador'




function App() { 
  
  return (
    <>
      <div className="whatsapp-button">
        <WhatsAppButton />
      </div>
      <div className='style-gral'>
        <div className='temporizador-container' >               
          <Temporizador/>
        </div> 
        <div>
          <LayoutPrl/>
        </div>
        <div>
            <LayoutTrn01/>
        </div>
        <div>
            <LayoutInfo/>
        </div>
        <ConfirmacionButton/>
        <div>aqui algo mas</div>
      </div>
      
    </>
  )
}

export default App
