import React from 'react'
import { LayoutCofre } from './LayoutCofre.jsx';

export const LayoutTrn02 = () => {

    const imgTr02= '/public/img/Transicion0301.png';
    const imageTr02 = (
        <img
            src={imgTr02}
            alt='transicionEndT'
            width={1280}
            height={375}
    />
  )
  const imgEndT= '/public/img/Transicion02.png';
  const imageEndT = (
    <img
      src={imgEndT}
      alt='transicionEndT'
      width={1280}
      height={100}
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
