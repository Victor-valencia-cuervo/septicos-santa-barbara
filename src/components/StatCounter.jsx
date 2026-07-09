import React, { useEffect, useRef, useState } from 'react'

export default function StatCounter({ icon, target, suffix = '+', label }) {
  const ref = useRef(null)
  const [val, setVal] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const duration = 3500
            let startTime = null
            const step = (ts) => {
              if (!startTime) startTime = ts
              const progress = Math.min((ts - startTime) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 4)
              setVal(Math.floor(eased * target))
              if (progress < 1) requestAnimationFrame(step)
              else setVal(target)
            }
            requestAnimationFrame(step)
            io.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target])

  return (
    <div ref={ref} className="relative group cursor-default transition-all duration-700 w-full">
      <i className={`fa-solid ${icon} text-sky-400/50 mb-1 text-base sm:text-xl group-hover:text-cyan-400 transition-colors`}></i>
      <div className="flex items-start justify-center gap-0.5 mb-0.5">
        <span className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter tabular-nums drop-shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover:drop-shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all">
          {val.toLocaleString('es-CO')}
        </span>
        <span className="text-base sm:text-2xl lg:text-3xl font-extrabold text-cyan-400 mt-0.5">{suffix}</span>
      </div>
      <p className="text-[9px] sm:text-[10px] md:text-xs font-bold tracking-wider uppercase text-sky-200/90 leading-tight whitespace-pre-line">{label}</p>
    </div>
  )
}
