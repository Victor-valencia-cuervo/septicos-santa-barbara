import React, { useRef } from 'react'
import CensorWrapper from './CensorWrapper.jsx'

export default function AntesDespues({ antes, despues }) {
  const sliderRef = useRef(null)
  const beforeRef = useRef(null)
  const handleRef = useRef(null)
  const dragging = useRef(false)

  const move = (x) => {
    const rect = sliderRef.current.getBoundingClientRect()
    const pos = Math.min(100, Math.max(0, ((x - rect.left) / rect.width) * 100))
    beforeRef.current.style.clipPath = `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)`
    handleRef.current.style.left = `${pos}%`
  }

  return (
    <CensorWrapper sensitive className="w-full max-w-lg mx-auto">
      <div
        ref={sliderRef}
        className="comparison-slider w-full h-64 sm:h-80 md:h-96 rounded-3xl border-4 border-white/20 shadow-2xl relative select-none"
        onMouseDown={() => (dragging.current = true)}
        onMouseUp={() => (dragging.current = false)}
        onMouseLeave={() => (dragging.current = false)}
        onMouseMove={(e) => dragging.current && move(e.clientX)}
        onTouchStart={() => (dragging.current = true)}
        onTouchEnd={() => (dragging.current = false)}
        onTouchMove={(e) => dragging.current && move(e.touches[0].clientX)}
      >
        <img
          src={despues.src}
          alt={despues.title}
          className="comparison-img"
          onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/0284c7/ffffff?text=Pozo+Limpio' }}
        />
        <img
          ref={beforeRef}
          src={antes.src}
          alt={antes.title}
          className="comparison-img img-before"
          onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/78716c/ffffff?text=Lodos+y+Obstrucción' }}
        />
        <div ref={handleRef} className="slider-handle" style={{ left: '50%' }}>
          <div className="slider-button"><i className="fa-solid fa-arrows-left-right"></i></div>
        </div>
        <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full z-20 shadow">Antes</span>
        <span className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full z-20 shadow">Después</span>
      </div>
    </CensorWrapper>
  )
}
