import React from 'react'

import '../assets/styles/layouts.css'
import '../assets/styles/images.css'


const LayoutPrl = () => {
  const imgPath = '/src/assets/img/InvitacionOriginaria01.png';
  const image = (
    <img
      src={imgPath}
      alt='imagenPrl'
      width={1280}
      height={1880}
    />
  )  
  return (
    
        <div className='imagenPRL'>
          {image}
        </div>
        
    

  )
};

export default LayoutPrl;