import React from 'react'
import { useCensorship } from '../context/CensorshipContext.jsx'

/**
 * Envuelve una imagen (u otro contenido) potencialmente sensible.
 * Si `sensitive` es true y el sitio está en modo censurado, se muestra
 * un overlay tipo "glass morphism" azul/blanco explicando el porqué.
 * Al hacer clic sobre el overlay se pide confirmación para quitar la
 * censura de forma permanente y global en todo el sitio.
 */
export default function CensorWrapper({ sensitive, className = '', children }) {
  const { isCensored, requestReveal } = useCensorship()
  const censored = sensitive && isCensored

  return (
    <div className={`relative ${className}`}>
      {children}
      {censored && (
        <button
          type="button"
          className="ssb-censor"
          onClick={(e) => { e.stopPropagation(); requestReveal() }}
          aria-label="Contenido censurado — clic para quitar la censura"
        >
          <span className="ssb-censor__icon"><i className="fa-solid fa-eye-slash"></i></span>
          <span className="ssb-censor__title">Contenido censurado</span>
          <span className="ssb-censor__desc">
            Imagen de mantenimiento con lodos y residuos. Puede resultar desagradable. Toca para revelarla.
          </span>
        </button>
      )}
    </div>
  )
}
