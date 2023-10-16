import React from 'react'
import '../assets/styles/layouts.css'

export const LayoutCofre = () => {
    const imgStr= '/src/assets/img/InvitacionOriginaria12.png';
    const imageStr = (
        <img
            src={imgStr}
            alt='transicionStr'
            width={160}
            height={140}
        />
  )
  const rings= '/src/assets/img/rings.png';
  const imageRings = (
      <img
          src={rings}
          alt='rings'
          width={160}
          height={140}
      />
)
  const chest= '/src/assets/img/chest.jpg';
  const imageChest = (
      <img
          src={chest}
          alt='chest'
          width={160}
          height={140}
      />
)
  const imgEn= '/src/assets/img/InvitacionOriginaria13Rot.png';
    const imageEn = (
        <img
            src={imgEn}
            alt='transicionEn'
            width={160}
            height={140}
        />
  )

  return (
    
        <div className='layoutCofre'>
            <div className='imgUno'>
                {imageStr}
            </div>
            <div className='labelMsg'>
                {imageRings}
                <h2>Por el regalo no te precupes hay Cofre!</h2>
                {imageChest}
            </div>            
            <div className='imgDos'>
                {imageEn}
            </div>
            
            
        </div>
    
    
  )
}
