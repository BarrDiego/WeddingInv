import React, { useState, useEffect } from 'react';

export const WhatsappLink = ({ origenInvitado, origenMensaje }) => {
  const [nroTelefono, setNroTelefono] = useState('');
  const [texto, setTexto] = useState('');

  useEffect(() => {
    // Define los valores de número de teléfono y texto según origenInvitado y origenMensaje
    const nro1 = '2215408262';
    const nro2 = '2215687487';
    const confNormal = 'Hola! quiero confirmar mi asistencia a la ceremonia!!';
    const confMenuEspecial = 'Hola! quiero confirmar mi asistencia a la ceremonia!! AVISO: necesito MENU ESPECIAL!!!';

    let nroTelefono = '';
    let texto = '';

    if (origenMensaje === 'confirmacionNormal') {
      texto = confNormal;
    } else {
      texto = confMenuEspecial;
    }

    if (origenInvitado === 'origenNovia') {
      nroTelefono = nro2;
    } else {
      nroTelefono = nro1;
    }

    setNroTelefono(nroTelefono);
    setTexto(texto);
  }, [origenInvitado, origenMensaje]);

  const isMobile = () => {
    if (sessionStorage.desktop) return false;
    else if (localStorage.mobile) return true;
    const mobile = ["iphone", "ipad", "android", "blackberry", "nokia", "opera mini", "window mobile", "windows phone", "iemobile"];
    for (const i in mobile)
      if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
  };

  const sendToWhatsapp = () => {
    const mensaje = "send?phone=" + nroTelefono + "&text=" + texto;

    if (isMobile()) {
      window.open("https://wa.me/" + mensaje, "_blank");
    } else {
      window.open("https://web.whatsapp.com/" + mensaje, "_blank");
    }
  };

  console.log("Llegó al onClick de WhatsApp");

  return (
    <>
      <button onClick={sendToWhatsapp}>Confirmar</button>
    </>
  );
};



