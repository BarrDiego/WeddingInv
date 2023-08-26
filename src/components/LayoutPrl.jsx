import React from 'react'
import { Temporizador } from './utiles/Temporizador';
import '../assets/styles/layouts.css'
import '../assets/styles/images.css'


const LayoutPrl = () => {
  const imgPath = '/src/assets/img/Invitacion originaria-01.png';
  const image = (
    <img
      src={imgPath}
      alt='imagenPrl'
      width={800}
      height={1200}
    />
  )
  return (
    <>
        <div className='temporizador-container' >
          <Temporizador/>
        </div>
        
        <div className='imagenPRL'>
          {image}
        </div>
        
    </>

  )
};

export default LayoutPrl;