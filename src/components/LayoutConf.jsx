import React from 'react'
import ConfirmacionButton from './utiles/ConfirmacionButton';
import WhatsAppButton from './utiles/WhatsappButton';

export const LayoutConf = () => {

    const imgFinal= '/src/assets/img/transicionFinal.png';
    const imageFinal = (
        <img
            src={imgFinal}
            alt='transicionEn'
            width={1280}
            height={425}
        />
  )
  return (
    <>
        <h1>Podras venir?</h1>
        <h3>
            Es importante que si vos o alguien de tu familia
            necesita un Menu Especial (vegano, vegetariano, sin TACC)
            lo aclares en la confirmacion de la asistencia
        </h3>
        <div className='buttonConf'>
            <ConfirmacionButton buttonClass={'confirmacionBut'}/>
        </div>        
        <h2>Cualquier duda que tengas consultanos</h2>
        <div className='buttonWa'>
            <WhatsAppButton buttonClass={'confirmacionWa'} imageSource={'/src/assets/img/walogo2.png'}/>
        </div>        
        <h2>Te esperamos!</h2>
        <div>
            {imageFinal}
        </div>
    </>
  )
}
