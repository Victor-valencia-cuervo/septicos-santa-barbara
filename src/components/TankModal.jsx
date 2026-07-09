import React, { useEffect } from 'react'
import { formatCOP } from '../data/tanksData.js'

export default function TankModal({ tank, onClose }) {
  useEffect(() => {
    document.body.style.overflow = tank ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [tank])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!tank) return null

  const waHref = `https://wa.me/573133815853?text=${encodeURIComponent(`Hola Didier, quiero cotizar un tanque de ${tank.waText}.`)}`

  return (
    <div className="modal-overlay open" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal-box">
        <div className="relative h-52 sm:h-64 overflow-hidden rounded-t-3xl bg-sky-100">
          <img
            src={tank.img}
            alt={tank.title}
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/560x220/0284c7/ffffff?text=SSB+Tanques' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
          <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition z-10">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="absolute bottom-4 left-5">
            <span className={`${tank.badgeColor || 'bg-brand'} text-white text-xs font-bold px-3 py-1 rounded-full`}>{tank.badge}</span>
          </div>
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-3 mb-1">
            <h2 className="text-2xl font-extrabold text-slate-800">{tank.title}</h2>
            <span className="text-brand font-black text-lg whitespace-nowrap">{formatCOP(tank.price)}</span>
          </div>
          <p className="text-slate-500 font-light text-sm mb-5 leading-relaxed">{tank.desc}</p>
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-sky-50 rounded-xl p-3 border border-sky-100">
              <span className="text-xs text-slate-500 font-medium block mb-1"><i className="fa-solid fa-droplet text-brand mr-1"></i>Capacidad</span>
              <span className="font-extrabold text-slate-800 text-lg">{tank.capacity}</span>
            </div>
            <div className="bg-sky-50 rounded-xl p-3 border border-sky-100">
              <span className="text-xs text-slate-500 font-medium block mb-1"><i className="fa-solid fa-users text-brand mr-1"></i>Uso recomendado</span>
              <span className="font-bold text-slate-800 text-sm">{tank.use}</span>
            </div>
            <div className="bg-sky-50 rounded-xl p-3 border border-sky-100">
              <span className="text-xs text-slate-500 font-medium block mb-1"><i className="fa-solid fa-shield text-brand mr-1"></i>Material</span>
              <span className="font-bold text-slate-800 text-sm">{tank.material}</span>
            </div>
            <div className="bg-sky-50 rounded-xl p-3 border border-sky-100">
              <span className="text-xs text-slate-500 font-medium block mb-1"><i className="fa-solid fa-clock text-brand mr-1"></i>Vida útil</span>
              <span className="font-bold text-slate-800 text-sm">{tank.lifespan}</span>
            </div>
          </div>
          <div className="bg-slate-50 rounded-xl p-3 mb-5 flex items-start gap-2 border border-slate-100">
            <i className="fa-solid fa-circle-check text-emerald-500 mt-0.5 flex-shrink-0"></i>
            <p className="text-xs text-slate-600 leading-relaxed">Certificado para agua potable · Protección UV · Anticorrosivo · Garantía de fabricante incluida</p>
          </div>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 rounded-2xl transition shadow-lg text-lg"
          >
            <i className="fa-brands fa-whatsapp text-2xl"></i> Cotizar este tanque por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
