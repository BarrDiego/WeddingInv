import React from 'react'
import { useState, useEffect } from 'react'

export const Temporizador = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);  
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const wedDay = "December 16, 2023";

    const getDay = () => {
        const time = Date.parse(wedDay) - Date.now();
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(getDay, 1000);
        return ()=> clearInterval(interval);
    }, [] );

    const imgPath2 = '/src/assets/img/Invitacion originaria-03.png';
  const imageTemp = (
    <img
      src={imgPath2}
      alt='imagenTemp'
      width={350}
      height={100}
      //position:'absolute' 
    />
  )

  return (
    <>
    <div className='imagenTemp'>
            {imageTemp}
    </div>
    <div className='Temporizador'>Faltan: {days} dias , {hours} hs : {minutes} min : {seconds} segs </div>
    </>
    
  )
}



