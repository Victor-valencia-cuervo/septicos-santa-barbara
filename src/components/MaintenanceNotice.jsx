import React, { useEffect, useState } from 'react'
import { useCensorship } from '../context/CensorshipContext.jsx'

const AUTO_DISMISS_MS = 11000

export default function MaintenanceNotice() {
  const { showNotice, chooseOpen, chooseCensored, dismissNotice } = useCensorship()
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    if (!showNotice) return
    const t = setTimeout(() => setClosing(true), AUTO_DISMISS_MS)
    return () => clearTimeout(t)
  }, [showNotice])

  useEffect(() => {
    if (!closing) return
    const t = setTimeout(() => dismissNotice(), 350)
    return () => clearTimeout(t)
  }, [closing, dismissNotice])

  if (!showNotice) return null

  return (
    <div
      className={`fixed bottom-4 right-4 left-4 sm:left-auto z-[150] sm:w-[380px] transition-all duration-300 ${
        closing ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
      }`}
      role="dialog"
      aria-labelledby="mw-title"
    >
      <div className="relative bg-slate-900/95 border border-orange-500/25 rounded-2xl p-5 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-md">
        <button
          onClick={() => setClosing(true)}
          aria-label="Cerrar aviso"
          className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition"
        >
          <i className="fa-solid fa-xmark text-xs"></i>
        </button>

        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 shrink-0 bg-orange-500/15 border border-orange-500/30 rounded-full flex items-center justify-center">
            <i className="fa-solid fa-triangle-exclamation text-orange-400"></i>
          </div>
          <div>
            <h3 id="mw-title" className="text-white font-bold text-sm sm:text-base leading-snug">Aviso de contenido</h3>
            <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mt-1">
              Algunas imágenes de <strong className="text-orange-300 font-semibold">mantenimiento y limpieza</strong> muestran
              el interior de pozos sépticos con lodos y residuos, y pueden resultar desagradables para algunas personas.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mt-2">
          <button
            onClick={chooseCensored}
            className="flex-1 bg-brand hover:bg-brand-dark text-white py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-droplet"></i> Continuar con censura
          </button>
          <button
            onClick={chooseOpen}
            className="flex-1 bg-white/10 hover:bg-white/20 border border-white/15 text-white py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm transition"
          >
            Continuar sin censura
          </button>
        </div>
      </div>
    </div>
  )
}
