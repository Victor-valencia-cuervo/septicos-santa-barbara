import React from 'react'
import useScrollSpy from '../hooks/useScrollSpy.js'

const SECTIONS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'galeria', label: 'Galería' },
  { id: 'videos', label: 'Videos' },
  { id: 'proyectos', label: 'Antes y Después' },
  { id: 'cotizador', label: 'Cotizador' },
  { id: 'resenas', label: 'Reseñas' },
  { id: 'redes', label: 'Redes Sociales' },
  { id: 'contacto', label: 'Contacto' },
]

export default function DotsNav() {
  const active = useScrollSpy('main-container', SECTIONS.map((s) => s.id))

  const goTo = (id) => {
    const section = document.getElementById(id)
    const container = document.getElementById('main-container')
    if (section && container) container.scrollTo({ top: section.offsetTop, behavior: 'smooth' })
  }

  return (
    <div className="nav-dots hidden md:flex" aria-hidden="true">
      {SECTIONS.map((s) => (
        <button
          key={s.id}
          type="button"
          className={`dot ${active === s.id ? 'active' : ''}`}
          onClick={() => goTo(s.id)}
          title={s.label}
          aria-label={s.label}
        />
      ))}
    </div>
  )
}
