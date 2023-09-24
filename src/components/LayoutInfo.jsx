import React from 'react'
import "../assets/styles/layouts.css"

export const LayoutInfo = () => {
    const imgUp = '/src/assets/img/InvitacionOriginaria03.png';
  const imageUp = (
    <img
      src={imgUp}
      alt='transicionUno'
      width={600}
      height={400}
    />
  )
  return (
    <div className='layoutInfo'>
        <div>
            <div>
                {imageUp}
            </div>
            <div>
                <h1>El lugar:</h1>
                <p>
                    El Portal, Salon de Eventos
                    Calle 57 Nro. 1110
                    entre 10 y 11
                    Villa Elisa, La Plata, Buenos Aires 
                </p>
            </div>
        </div>
        <div>
            <div>
                MAPA:
            </div>
            
        </div>

    </div>
  )
}
