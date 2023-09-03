import React from 'react';
import '/src/assets/styles/layouts.css'; 

const ModalConfirmacion = ({ isOpen, onClose, onConfirm, selectedOption, onOptionChange}) => {
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
            <div className="modal-buttons">
              <button onClick={onClose}>Cancelar</button>
              <button onClick={onConfirm} disabled={!selectedOption}>
                Confirmar
              </button>
            </div>
          </div>
        </div>
      );
    };

export default ModalConfirmacion
