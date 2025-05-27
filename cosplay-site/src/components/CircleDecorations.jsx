import React from 'react';

/**
 * Componente que renderiza os círculos decorativos no fundo
 */
export default function CircleDecorations({ count = 10 }) {
  // Criar círculos decorativos
  const renderCircles = () => {
    const circles = [];
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 100 + 20;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      
      circles.push(
        <div 
          key={i}
          className="circle-decoration"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
          }}
        />
      );
    }
    return circles;
  };

  return <>{renderCircles()}</>;
}