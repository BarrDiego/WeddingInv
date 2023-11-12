import React from 'react'

import '../assets/styles/layouts.css'
import '../assets/styles/images.css'


const LayoutPrl = () => {
 
  const imgPath = '../src/assets/img/Portada0101.png';
  const imagePortada = (
    <img
      src={imgPath}
      alt='imagenPrl'
      width={1280}
      height={1480}
    />
  )
    
  return (     
        <div className='imagenPRL'>          
            {imagePortada}
        </div>
  )
};

export default LayoutPrl;