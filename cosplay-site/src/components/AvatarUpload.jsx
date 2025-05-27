import React from 'react';

/**
 * Componente para upload de avatar com preview
 */
export default function AvatarUpload({ 
  avatarPreview, 
  nome, 
  handleImagemChange 
}) {
  return (
    <div className="text-center mb-4">
      <div className="position-relative d-inline-block">
        <div className="avatar-circle">
          {avatarPreview ? (
            <img 
              src={avatarPreview || "/placeholder.svg"} 
              alt="Avatar" 
              className="w-100 h-100 object-fit-cover" 
            />
          ) : (
            <span className="text-primary-blue fs-1 fw-bold">
              {nome ? nome.charAt(0).toUpperCase() : "U"}
            </span>
          )}
        </div>
        <label htmlFor="avatar-upload" className="avatar-upload-button">
          <i className="bi bi-plus"></i>
        </label>
        <input 
          id="avatar-upload" 
          type="file" 
          className="d-none" 
          accept="image/*" 
          onChange={handleImagemChange} 
        />
      </div>
    </div>
  );
}