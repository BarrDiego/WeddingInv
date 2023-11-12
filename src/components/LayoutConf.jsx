import React from 'react'
import ConfirmacionButton from './utiles/ConfirmacionButton.jsx';
import WhatsAppButton from './utiles/WhatsappButton.jsx';

export const LayoutConf = () => {

    const imgFinal= '../src/assets/img/TransicionFinal02.png';
    const imageFinal = (
        <img
            src={imgFinal}
            alt='transicionEn'
            width={1280}
            height={375}
        />
  )
  return (
    <>
        <h1>Podras venir?</h1>
        <h2 className='textMenu'>
            Es importante que si vos o alguien de tu familia
            necesita un Menu Especial (vegano, vegetariano, sin TACC)
            lo aclares en la confirmacion de la asistencia
        </h2>
        <div className='buttonConf'>
            <ConfirmacionButton buttonClass={'confirmacionBut'}/>
        </div>        
        <h2>Cualquier duda que tengas consultanos</h2>
        <div className='buttonWa'>
            <WhatsAppButton buttonClass={'confirmacionWa'} imageSource={'../src/assets/img/Walogo3.png'}/>
        </div>        
        <h1>Te esperamos!</h1>
        <div className='finalTransi'>
            {imageFinal}
        </div>
    </>
  )
}
