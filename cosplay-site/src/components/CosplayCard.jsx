import React from 'react';

/**
 * Componente para exibir um card de cosplay
 */
export default function CosplayCard({ cosplay }) {
  return (
    <div className="card h-100 cosplay-card">
      <img
        src={cosplay.imagem || "/placeholder.svg"}
        alt={cosplay.nome}
        className="card-img-top cosplay-image"
      />
      <div className="card-body p-2">
        <p className="card-title small fw-medium text-center mb-0">{cosplay.nome}</p>
        <p className="card-text small text-muted text-center">{cosplay.origem}</p>
      </div>
    </div>
  );
}