import React from 'react'

import '../assets/styles/layouts.css'
import '../assets/styles/images.css'


const LayoutPrl = () => {
  const imgPath = '/src/assets/img/InvitacionOriginaria04.png';
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
        <div className='imagenPRL'>
          {image}
        </div>
        
    </>

  )
};

export default LayoutPrl;