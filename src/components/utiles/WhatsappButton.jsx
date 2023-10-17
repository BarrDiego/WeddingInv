import React, { useState } from 'react';
import '/src/assets/styles/layouts.css';

const WhatsAppButton = ({imageSource , buttonClass }) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const isMobile = () => {
    if (sessionStorage.desktop) return false;
    else if (localStorage.mobile) return true;
    const mobile = ["iphone", "ipad", "android", "blackberry", "nokia", "opera mini", "window mobile", "windows phone", "iemobile"];
    for (const i in mobile)
      if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
  };

  const handleWhatsAppClick = () => {
    setButtonDisabled(true);
    setTimeout(() => {
      const nroTelefono = "2215687487";
      const mensaje = "send?phone=" + nroTelefono + "&text=Hola! necesito ayuda con la confirmacion de la boda!!";

      if (isMobile()) {
        window.open("https://wa.me/" + mensaje, "_blank");
      } else {
        window.open("https://web.whatsapp.com/" + mensaje, "_blank");
      }
      
      setButtonDisabled(false);
    }, 2000);
  };

  return (
    <button id="submit" onClick={handleWhatsAppClick} disabled={buttonDisabled}>
      <img 
      src={imageSource || '/src/assets/img/WALogo.png'}
      alt='Whatsapp'
      className={ buttonClass || 'whatsapp-button'}
      />
    </button>
  );
};

export default WhatsAppButton;