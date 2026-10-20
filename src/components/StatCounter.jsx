import React, { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function StatCounter({ icon, target, suffix = '+', label }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const [val, setVal] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const run = () => {
      if (started.current) return
      started.current = true
      if (reduce) return setVal(target)
      const duration = 1900
      let t0 = null
      const step = (ts) => {
        if (!t0) t0 = ts
        const p = Math.min((ts - t0) / duration, 1)
        setVal(Math.round((1 - Math.pow(1 - p, 4)) * target))
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }
    const io = new IntersectionObserver((es) => es.some((e) => e.isIntersecting) && (run(), io.disconnect()), { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [target, reduce])

  return (
    <div ref={ref} className="text-center px-2">
      <i className={`fa-solid ${icon} text-sky-300/70 mb-2 text-lg`}></i>
      <div className="flex items-baseline justify-center gap-0.5">
        <span className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums tracking-tight">{val.toLocaleString('es-CO')}</span>
        <span className="text-xl font-bold text-cyan-300">{suffix}</span>
      </div>
      <p className="mt-1 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-sky-100/75 leading-tight whitespace-pre-line">{label}</p>
    </div>
  )
}
