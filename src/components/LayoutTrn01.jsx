import React from 'react'
import '../assets/styles/images.css'
import '../assets/styles/layouts.css'

export const LayoutTrn01 = () => {
  const imgPath = '/img/Transicion0101.png';
  const image = (
    <img
      src={imgPath}
      alt='transicionUno'
      width={1280}
      height={375}
    />
  ) 

  const imgLeaf = '/img/InvitacionOriginaria10.png';
  const imageLeaf = (
    <img
      src={imgLeaf}
      alt='transicionLeaf'
      width={286}
      height={235}
    />
  )
  const imgEnd= '/img/InvitacionOriginaria11.png';
  const imageEnd = (
    <img
      src={imgEnd}
      alt='transicionEnd'
      width={286}
      height={235}
    />
  ) 
  
  const imgEndT= '/img/Transicion02.png';
  const imageEndT = (
    <img
      src={imgEndT}
      alt='transicionEndT'
      width={1280}
      height={100}
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
                en el instante menos esperado.
                Pero en el momento indicado.
              </p>
            </div>            
        </div>           
          <div className='transicionEnd'>
            {imageEndT}                
          </div>     
    </div>
  )
}
