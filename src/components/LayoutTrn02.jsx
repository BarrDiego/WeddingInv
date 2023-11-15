import React from 'react'
import { LayoutCofre } from './LayoutCofre.jsx';

export const LayoutTrn02 = () => {

    const imgTr02= '/img/Transicion0301.png';
    const isPortrait = window.matchMedia('(orientation: portrait)').matches;  
    const ancho = isPortrait ? window.innerWidth : 1280; 

    const imageTr02 = (
        <img
            src={imgTr02}
            alt='transicionEndT'
            width={ancho}
            height={ancho*0.292}
    />
  )
  const imgEndT= '/img/Transicion02.png';
  const imageEndT = (
    <img
      src={imgEndT}
      alt='transicionEndT'
      width={ancho}
      height={ancho * 0.078}
    />
  ) 

  return (
    <>
        <div>
            {imageTr02}
        </div>
        <LayoutCofre/>
        <div>
          {imageEndT}
        </div>
    </>
    
  )
}
