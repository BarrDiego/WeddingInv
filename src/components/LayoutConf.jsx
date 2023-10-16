import React from 'react'

export const LayoutConf = () => {

    const imgFinal= '/src/assets/img/transicionFinal.png';
    const imageFinal = (
        <img
            src={imgFinal}
            alt='transicionEn'
            width={1280}
            height={425}
        />
  )
  return (
    <>
        <h1>Podras venir?</h1>
        <h3>
            Es importante que si vos o alguien de tu familia
            necesita un Menu Especial (vegano, vegetariano, sin TACC)
            lo aclares en la confirmacion de la asistencia
        </h3>
        <p>**** boton confirmacion ****</p>
        <h2>Cualquier duda que tengas consultanos</h2>
        <p> **** boton whatsapp *****</p>
        <h2>Te esperamos!</h2>
        <h1>Diego & Victoria</h1>
        <div>
            {imageFinal}
        </div>
    </>
  )
}
