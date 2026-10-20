import React from 'react'
import useScrollSpy from '../hooks/useScrollSpy.js'
import { scrollToId } from '../lib/scroll.js'

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
  const active = useScrollSpy(SECTIONS.map((s) => s.id))
  return (
    <div className="nav-dots" role="navigation" aria-label="Secciones">
      {SECTIONS.map((s) => (
        <button key={s.id} type="button" className={`dot ${active === s.id ? 'active' : ''}`} onClick={() => scrollToId(s.id)} title={s.label} aria-label={s.label} />
      ))}
    </div>
  )
}
