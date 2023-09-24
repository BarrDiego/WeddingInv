import React from 'react'
import '../assets/styles/images.css'
import '../assets/styles/layouts.css'

export const LayoutTrn01 = () => {
  const imgPath = '/src/assets/img/transicion01.png';
  const image = (
    <img
      src={imgPath}
      alt='transicionUno'
      width={1280}
      height={425}
    />
  ) 

  const imgLeaf = '/src/assets/img/InvitacionOriginaria10.png';
  const imageLeaf = (
    <img
      src={imgLeaf}
      alt='transicionLeaf'
      width={286}
      height={235}
    />
  )
  const imgEnd= '/src/assets/img/InvitacionOriginaria11.png';
  const imageEnd = (
    <img
      src={imgEnd}
      alt='transicionEnd'
      width={286}
      height={235}
    />
  ) 
  
  const imgEndT= '/src/assets/img/InvitacionOriginaria11.png';
  const imageEndT = (
    <img
      src={imgEndT}
      alt='transicionEndT'
      width={1280}
      height={235}
    />
  ) 

  return (
    <div className='transicionUno'>
        <div className='transicionUno'>
          {image}
        </div>
        <div className='transicionHistory'>
            <div className='transicionLeaf'>
                {imageLeaf}
            </div>
            <div className='transicionLabel'>
              <h1> Nuestra Historia</h1>
              <p>
                Nuestra Historia comienza cuando dos personas
                que ni soñaban conocerse, terminan encontrandose
                en el isntante menos esperado.
                Pero en el momento indicado.
              </p>
            </div>            
        </div> 
          <div className='transicionImgEnd'>
              {imageEnd}
          </div>
          <div className='transicionEnd'>
            {imageEndT}                
          </div>     
    </div>
  )
}
