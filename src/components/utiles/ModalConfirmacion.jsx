import React from 'react';
import '/src/assets/styles/layouts.css';
import { WhatsappLink } from './WhatsappLink';

const ModalConfirmacion = ({ isOpen, onClose, onConfirm, selectedOption, specialMenu }) => {
  if (!isOpen) return null;

<<<<<<< HEAD
  const sendToWhatsapp = (selectedOption, specialMenu) => {
    let origenMensaje = specialMenu ? 'confirmacionMenuEspecial' : 'confirmacionNormal';
    WhatsappLink({ origenInvitado: selectedOption, origenMensaje });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Confirmar Asistencia</h2>
        <p>Selecciona si eres invitado del novio o la novia:</p>
        <select value={selectedOption} onChange={onOptionChange}>
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
=======
    // Función para confirmar la acción
    const confirmAction = () => {
    // Obtiene los datos del usuario
    const tipoInvitado = selectedOption;
    const menuEspecial = specialMenu;

    // Llama a la función de redirección a WhatsApp
    sendToWhatsapp(tipoInvitado, menuEspecial);

     // Cierra el modal
      onClose();
    };
    // Llama a la función confirmAction() en el botón de confirmación
    onConfirm = confirmAction;


    
    
    if (!isOpen) return null;
    return (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Confirmar Asistencia</h2>
            <p>Selecciona si eres invitado del novio o la novia:</p>
            <select value={selectedOption} onChange={onOptionChange}>
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
              <button onClick={onConfirm}>               
                  Confirmar
                </button>   
              
            </div>
          </div>
>>>>>>> b92826999186ab9fb44777b058321846124d962b
        </div>

        <div className="modal-buttons">
          <button onClick={onClose}>Cancelar</button>
          <button onClick={() => {
            onConfirm();
            if (selectedOption) {
              sendToWhatsapp(selectedOption, specialMenu);
            }
          }}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmacion;


<<<<<<< HEAD
=======

>>>>>>> b92826999186ab9fb44777b058321846124d962b
