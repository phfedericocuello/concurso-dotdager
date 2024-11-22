import React, { useState, useEffect } from 'react';
import './cursor.css'; // Asegúrate de importar tu archivo CSS

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Actualiza la posición del cursor cuando el mouse se mueve
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    // Escuchar el movimiento del mouse
    window.addEventListener('mousemove', handleMouseMove);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-brillo"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      >
        🥒 {/* Emoji de pepino */}
      </div>
    </>
  );
};

export default CustomCursor;