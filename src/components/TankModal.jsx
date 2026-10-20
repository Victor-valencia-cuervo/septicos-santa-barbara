import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { formatCOP } from '../data/tanksData.js'
import ImageWithSkeleton from './SkeletonMedia.jsx'

const Info = ({ icon, label, children }) => (
  <div className="bg-[var(--surface-2)] rounded-2xl p-3.5 border border-[var(--line)]">
    <span className="text-xs text-[var(--ink-3)] font-medium block mb-1"><i className={`fa-solid ${icon} text-brand mr-1`}></i>{label}</span>
    <span className="font-bold text-[var(--ink)] text-sm">{children}</span>
  </div>
)

export default function TankModal({ tank, onClose }) {
  useEffect(() => {
    if (!tank) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', onKey) }
  }, [tank, onClose])

  const waHref = tank ? `https://wa.me/573133815853?text=${encodeURIComponent(`Hola Didier, quiero cotizar un tanque de ${tank.waText}.`)}` : '#'

  return (
    <AnimatePresence>
      {tank && (
        <motion.div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} role="dialog" aria-modal="true" aria-label={tank.title}>
          <motion.div className="modal-box" initial={{ opacity: 0, y: 30, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.97 }} transition={{ type: 'spring', stiffness: 300, damping: 28 }}>
            <div className="relative h-52 sm:h-64 overflow-hidden rounded-t-[1.75rem]">
              <ImageWithSkeleton src={tank.img} alt={tank.title} className="!absolute inset-0" imgClassName="!h-full object-cover" eager />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none"></div>
              <button onClick={onClose} aria-label="Cerrar" className="absolute top-4 right-4 w-9 h-9 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition z-10">
                <i className="fa-solid fa-xmark"></i>
              </button>
              <div className="absolute bottom-4 left-5 z-[2]">
                <span className={`${tank.badgeColor || 'bg-brand'} text-white text-xs font-bold px-3 py-1 rounded-full`}>{tank.badge}</span>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-3 mb-1">
                <h2 className="text-2xl font-extrabold text-[var(--ink)]">{tank.title}</h2>
                <span className="text-brand font-extrabold text-lg whitespace-nowrap">{formatCOP(tank.price)}</span>
              </div>
              <p className="text-[var(--ink-3)] text-sm mb-5 leading-relaxed">{tank.desc}</p>
              <div className="grid grid-cols-2 gap-3 mb-5">
                <Info icon="fa-droplet" label="Capacidad">{tank.capacity}</Info>
                <Info icon="fa-users" label="Uso recomendado">{tank.use}</Info>
                <Info icon="fa-shield" label="Material">{tank.material}</Info>
                <Info icon="fa-clock" label="Vida útil">{tank.lifespan}</Info>
              </div>
              <div className="rounded-2xl p-3.5 mb-5 flex items-start gap-2 border border-[var(--line)] bg-[var(--surface-2)]">
                <i className="fa-solid fa-circle-check text-emerald-500 mt-0.5 flex-shrink-0"></i>
                <p className="text-xs text-[var(--ink-2)] leading-relaxed">Certificado para agua potable · Protección UV · Anticorrosivo · Garantía de fabricante incluida</p>
              </div>
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn--wa btn--lg w-full">
                <i className="fa-brands fa-whatsapp text-xl"></i> Cotizar este tanque por WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
