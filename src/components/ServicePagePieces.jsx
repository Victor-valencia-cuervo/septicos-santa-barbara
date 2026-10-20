import React from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../hooks/useReveal.jsx'
import SectionHead from './SectionHead.jsx'

export function RelatedServices({ items }) {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Reveal as="span" className="text-brand font-bold tracking-widest uppercase text-sm block">También Ofrecemos</Reveal>
          <Reveal as="h2" className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Servicios Relacionados</Reveal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {items.map((it, i) => (
            <Reveal key={it.to} delay={i * 100}>
              <Link to={it.to} className="service-card flex items-center gap-4 hover:bg-sky-50">
                <div className={`w-14 h-14 ${it.bg} rounded-2xl flex items-center justify-center ${it.color} text-2xl flex-shrink-0`}>
                  <i className={`fa-solid ${it.icon}`}></i>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">{it.title}</h3>
                  <p className="text-slate-500 text-sm font-light mt-1">{it.desc}</p>
                  <span className={`${it.color} text-sm font-bold flex items-center gap-1 mt-2`}>{it.cta} <i className="fa-solid fa-arrow-right text-xs"></i></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectionHeader({ eyebrow, title, desc, dark = false }) {
  return <SectionHead eyebrow={eyebrow} title={title} desc={desc} light={dark} />
}
