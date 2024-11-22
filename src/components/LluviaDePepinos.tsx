import React, { useEffect } from 'react';
import './cursor.css'; // Asegúrate de importar el archivo CSS

const LluviaDePepinos: React.FC = () => {
  useEffect(() => {
    // Función para crear pepinos
    const crearPepino = () => {
      const pepino = document.createElement('div');
      pepino.classList.add('pepino');
      pepino.innerText = '🥒'; // Emoji de pepino
      document.querySelector('.lluvia-pepinos')?.appendChild(pepino);

      // Posiciona el pepino aleatoriamente en el eje X
      const xPos = Math.random() * window.innerWidth;
      pepino.style.left = `${xPos}px`;

      // Elimina el pepino cuando se ha caído completamente
      setTimeout(() => {
        pepino.remove();
      }, 5000); // Se elimina después de que el pepino haya caído completamente
    };

    // Crear una lluvia de pepinos cada 500ms
    const intervalId = setInterval(crearPepino, 500);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  return <div className="lluvia-pepinos"></div>;
};

export default LluviaDePepinos;