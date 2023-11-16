import React from 'react'
import "../assets/styles/layouts.css"


export const LayoutInfo = () => {
  const imgUp = '/img/InvitacionOriginaria04.png';
  const isPortrait = window.matchMedia('(orientation: portrait)').matches;
  const ancho = isPortrait ? 500 : 250;
  const imageUp = (
    <img
      src={imgUp}
      alt='transicionUno'
      width={ancho}
      height={ancho}
    />
  )

  return (
    <div className='layoutInfo'>
        <div className='contenedorInfo'>
            <div className='imgInfo'>
                {imageUp}
            </div>
            <div className='ceremoniaLbl'>                
                <h1>Ceremonia:</h1>          
                <h2>El Portal, Salon de Eventos</h2>
                <h4>
                  Calle 57 Nro. 1110
                  entre 10 y 11                  
                </h4>
                <h4>Villa Elisa, La Plata, Buenos Aires</h4>             
            </div>
            
        </div>
        <div className='map'>            
        <iframe
          title='GoogleMaps'
          width='100%'
          height='500' 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.0990961633815!2d-58.098787823351735!3d-34.853737270746784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2ded515d750bb%3A0x475086e5c675aa27!2sEl%20Portal%20Salon%20De%20Eventos!5e0!3m2!1ses!2sar!4v1695750577088!5m2!1ses!2sar" 
          loading="lazy">
        </iframe> 
        <div className='contMap'>
          <h2>Visualiza el mapa completo:</h2>
          <button className='buttonMaps' onClick={()=>{
            window.open('https://maps.app.goo.gl/4aR7LEoPYDvDLsNG6', 'Maps', 'windowFeatures="location=yes"');
          }}>
            Ir a Maps
            
          </button>
        </div>           
        </div>       
         
    </div>
  );
}






