import React from "react";

/**
 * Componente para exibir um card de cosplay
 */
export default function CosplayCard({ cosplay }) {
  return (
    <div className="cosplay-card rounded rounded-3 bg-body-secondary w-100" >
      <img
        src={cosplay.imagem || "https://placehold.co/600x400?text=Hello+World"}
        alt={cosplay.nome}
        className="w-100 cosplay-image rounded-top-3"
      />
      <div className=" p-2">
        <p className="card-title small fw-medium text-center mb-0">
          {cosplay.nome}
        </p>
        <p className="card-text small text-muted text-center">
          {cosplay.origem}
        </p>
      </div>
    </div>
  );
}
