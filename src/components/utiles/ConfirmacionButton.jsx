import React, { useState } from 'react';
import '/src/assets/styles/layouts.css'; // Asegúrate de tener un archivo CSS para los estilos del botón

import ModalConfirmacion from './ModalConfirmacion';

const ConfirmacionButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedOption('');
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleConfirm = () => {
    // Realiza acciones con la opción seleccionada, por ejemplo, enviarla al servidor
    handleModalClose();
  };

  return (
    <div>
      <button className="confirmacion-button" onClick={handleModalOpen}>
        Confirmar Asistencia
      </button>

      <ModalConfirmacion
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirm}
        selectedOption={selectedOption}
        onOptionChange={handleOptionChange}
      />
    </div>
  );
};

export default ConfirmacionButton;