import React, { useState } from 'react'
import "../assets/styles/layouts.css"
import "../assets/styles/images.css"

export const LayoutSalon = () => {
    const [imagenVisible, setImagenVisible] = useState(null); // Cambia a null para indicar que ninguna imagen está visible

    const imgPortal01 = '/img/Elportal.jpg';
    const imgPortal02 = '/img/Elportal02.jpg';
    const imgPortal03 = '/img/Elportal03.jpg';

    const handleImageClick = (imagen) => {
        setImagenVisible(imagen);
    };

    const imgEnd= '/img/InvitacionOriginaria07Rot.png';
    const imageEnd = (
        <img
            src={imgEnd}
            alt='transicionEnd'
            width={160}
            height={140}
        />
  )  
  const isPortrait = window.matchMedia('(orientation: portrait)').matches;
  const ancho = isPortrait ? 200 :300;  
    return (
        <>
        <div className='layoutSalon'>
            <h1>El lugar:</h1>
            <div className='imagenesPortal'>                
                <div onClick={() => handleImageClick(imgPortal01)}>
                    <img
                        src={imgPortal01}
                        alt='portal01'
                        width={ancho}
                        height={ancho}
                    />
                </div>
                <div onClick={() => handleImageClick(imgPortal02)}>
                    <img
                        src={imgPortal02}
                        alt='portal02'
                        width={ancho}
                        height={ancho}
                    />
                </div>
                <div onClick={() => handleImageClick(imgPortal03)}>
                    <img
                        src={imgPortal03}
                        alt='portal03'
                        width={ancho}
                        height={ancho}
                    />
                </div>
            </div>

            {/* Modal para mostrar la imagen en tamaño completo */}
            {imagenVisible && (
                <div className="modalSalon" onClick={() => setImagenVisible(null)}>
                    <img
                        src={imagenVisible}
                        alt={imagenVisible}
                        width={600}
                        height={600}
                    />
                </div>
            )}
        </div>
        <div className='imgEndSalon'>
            {imageEnd}
        </div>
        </>
    );
};




