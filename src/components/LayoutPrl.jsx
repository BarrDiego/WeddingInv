import React from 'react'

import '../assets/styles/layouts.css'
import '../assets/styles/images.css'


const LayoutPrl = () => {
 
  const imgPath = '/img/Portada0101.png';
  const isPortrait = window.matchMedia('(orientation: portrait)').matches;
  const ancho = isPortrait ? window.innerWidth : 1280;    
  
  const imagePortada = (
    <img
      src={imgPath}
      alt='imagenPrl'
      width={ancho}
      height={ancho * 1.156}
    />
  )
    
  return (     
        <div className='imagenPRL'>          
            {imagePortada}
        </div>
  )
};

export default LayoutPrl;