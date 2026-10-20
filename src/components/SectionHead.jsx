import React from 'react'
import Reveal from '../hooks/useReveal.jsx'

/** Encabezado de sección unificado: eyebrow + título + descripción (minimalista). */
export default function SectionHead({ eyebrow, title, desc, light = false, align = 'center', className = '' }) {
  return (
    <div className={`${align === 'center' ? 'text-center mx-auto' : ''} max-w-2xl mb-12 ${className}`}>
      <Reveal as="span" className="eyebrow">{eyebrow}</Reveal>
      <Reveal as="h2" delay={60} className={`text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold leading-[1.1] mt-3 ${light ? 'text-white' : 'text-[var(--ink)]'}`}>{title}</Reveal>
      {desc && <Reveal as="p" delay={120} className={`mt-4 text-sm sm:text-base leading-relaxed ${light ? 'text-slate-400' : 'text-[var(--ink-3)]'}`}>{desc}</Reveal>}
    </div>
  )
}
