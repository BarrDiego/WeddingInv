import React from 'react'
import '../assets/styles/layouts.css'

export const LayoutCofre = () => {
    const imgStr= '/img/InvitacionOriginaria12.png';
    const imageStr = (
        <img
            src={imgStr}
            alt='transicionStr'
            width={160}
            height={140}
        />
  )
  const rings= '/img/Rings1.png';
  const imageRings = (
      <img
          src={rings}
          alt='rings'
          width={160}
          height={140}
      />
)
  const chest= '/img/Chest1.png';
  const imageChest = (
      <img
          src={chest}
          alt='chest'
          width={160}
          height={140}
      />
)
  const imgEn= '/img/InvitacionOriginaria13Rot.png';
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
                <div className='imageRings'>
                    {imageRings}
                </div>                
                <h2>Si deseas realizarnos un regalo, no te precupes hay Cofre!</h2>
                <div className='imageChest'>
                    {imageChest}
                </div>                
            </div>            
            <div className='imgDos'>
                {imageEn}
            </div>
            
            
        </div>
    
    
  )
}
