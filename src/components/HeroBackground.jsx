import React from 'react'

/**
 * Capa de fondo del hero. Soporta imagen o video (ver src/data/heroConfig.js)
 * y SIEMPRE aplica el gradiente azul por encima, sin importar el tipo.
 */
export default function HeroBackground({ config }) {
  return (
    <div className="absolute inset-0 z-0">
      {config.type === 'video' ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={config.src}
          poster={config.poster}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={config.src}
          alt=""
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
      )}
      <div className="absolute inset-0" style={{ backgroundImage: config.gradient }} />
    </div>
  )
}
