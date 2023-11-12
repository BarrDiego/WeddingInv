import { useState, useEffect } from 'react'
import './App.css'
import LayoutPrl from './components/LayoutPrl.jsx'
import WhatsAppButton from './components/utiles/WhatsappButton.jsx'
import ConfirmacionButton from './components/utiles/ConfirmacionButton.jsx'
import { LayoutTrn01 } from './components/LayoutTrn01.jsx'
import { LayoutInfo } from './components/LayoutInfo.jsx'
import { Temporizador } from './components/utiles/Temporizador.jsx'
import { LayoutSalon } from './components/LayoutSalon.jsx'
import { LayoutTrn02 } from './components/LayoutTrn02.jsx'
import { LayoutConf } from './components/LayoutConf.jsx'




function App() { 
  
  const [ layoutConfVisible, setLayoutConfVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const layoutConfElement = document.getElementById('layoutConf');
      if (layoutConfElement) {
        const rect = layoutConfElement.getBoundingClientRect();
        const offset = 500;
        if (rect.top >= offset) {
          setLayoutConfVisible(true);
        } else {
          setLayoutConfVisible(false);
        }
      }      
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);  
  
  return (
    <>
      
      {layoutConfVisible && (
        <div className='whatsapp-button'>
          <WhatsAppButton/>
        </div>
      )}
      
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
        {layoutConfVisible && (
          <div>
            <ConfirmacionButton/>
          </div>
        )}        
                  
        <div id='layoutConf'>          
          <LayoutConf/>
        </div>
      </div>
      
    </>
  )
}

export default App
