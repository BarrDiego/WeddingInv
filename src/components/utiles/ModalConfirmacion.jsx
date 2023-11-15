import {useState, React} from 'react';
import '/src/assets/styles/layouts.css'; 


const ModalConfirmacion = ({ isOpen, onClose, onConfirm, selectedOption, onOptionChange, toggleSpecialMenu, specialMenu}) => {
    
    const [mostarExito, setMostrarExito] = useState(false);
    // Defino los valores de número de teléfono y texto según origenInvitado y origenMensaje
    const nro1 = '2215408262';
    const nro2 = '2215687487';
    const confNormal = 'Hola! quiero confirmar mi asistencia a la ceremonia!!';
    const confMenuEspecial = 'Hola! quiero confirmar mi asistencia a la ceremonia!! AVISO: necesito MENU ESPECIAL!!!';
    
    const isMobile = () => {
      if (sessionStorage.desktop) return false;
      else if (localStorage.mobile) return true;
      const mobile = ["iphone", "ipad", "android", "blackberry", "nokia", "opera mini", "window mobile", "windows phone", "iemobile"];
      for (const i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
      return false;
    };
  
    const sendToWhatsapp = (tipoInvitado, menuEspecial, callback) => {
    let telefono = '';
    let text = '';

    if (!menuEspecial) {
      text = confNormal;
    } else {
      text = confMenuEspecial;
    }

    if (tipoInvitado === 'novia') {
      telefono = nro2;
    } else {
      telefono = nro1;
    }    
    callback(telefono, text)
    };

    // Función para confirmar la acción
    const confirmAction = () => {
    // Obtiene los datos del usuario
    const tipoInvitado = selectedOption;
    const menuEspecial = specialMenu;
      
    // Llama a la función de redirección a WhatsApp
    sendToWhatsapp(tipoInvitado, menuEspecial, (telefono, text) =>{
      
      const mensaje = telefono + "?text=" + text;
      console.log(mensaje)
      if (isMobile()) {
        window.open("https://wa.me/" + mensaje, "_blank");
      } else {
        const mensaje = telefono + "&text=" + text;
        window.open("https://web.whatsapp.com/send?phone=" + mensaje, "_blank");
      }
    });
    setMostrarExito(true);
    }; 
    
    
    
    if (!isOpen) return null;
    return (
        <div className="modal-overlay">
          <div className="modal">

            {mostarExito ? (
          <div className='modalExito'>
            <h2>Redirigido con exito</h2>
            <button onClick={() => {setMostrarExito(false); onClose()}}>Continuar</button>
          </div>
        ) : (
          <>         
          <h2>Confirmar Asistencia</h2>
            <p>Selecciona si eres invitado del novio o la novia:</p>
            <select value={selectedOption} style={{width:'100%'}} onChange={onOptionChange}>
              <option value="">Seleccionar</option>
              <option value="novio">Invitado del Novio</option>
              <option value="novia">Invitado de la Novia</option>
            </select>
            <div className="checkbox">
              <input
                type="checkbox"
                id="specialMenu"
                checked={specialMenu}
                onChange={() => toggleSpecialMenu(!specialMenu)}
              />
              <label htmlFor="specialMenu">Deseo incluir un menú especial para mí o acompañante</label>
            </div>
          <div className="modal-buttons">
            <button onClick={onClose}>Cancelar</button>
            <button onClick={confirmAction} disabled={!selectedOption}>Confirmar</button>
          </div>
          </>
        )}    
            
          </div>
        </div>
      );
    };

export default ModalConfirmacion;


