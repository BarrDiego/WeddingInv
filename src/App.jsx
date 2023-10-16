import { useState } from 'react'
import './App.css'
import LayoutPrl from './components/layoutPrl'
import WhatsAppButton from './components/utiles/WhatsappButton'
import ConfirmacionButton from './components/utiles/ConfirmacionButton'
import { LayoutTrn01 } from './components/LayoutTrn01'
import { LayoutInfo } from './components/LayoutInfo'
import { Temporizador } from './components/utiles/Temporizador'
import { LayoutSalon } from './components/LayoutSalon'
import { LayoutTrn02 } from './components/LayoutTrn02'
import { LayoutConf } from './components/LayoutConf'




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
        <div className='divPrl'>
          <LayoutPrl/>
        </div>
        <div>
            <LayoutTrn01/>
        </div>
        <div>
            <LayoutInfo/>
        </div>
        <div>
          <LayoutSalon/>
        </div>
        <div>
          <LayoutTrn02/>
        </div>
        <ConfirmacionButton/>
        <div>
          <LayoutConf/>
        </div>
      </div>
      
    </>
  )
}

export default App
