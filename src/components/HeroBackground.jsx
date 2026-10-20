import React, { useMemo } from 'react'
import { useReducedMotion } from 'framer-motion'
import ImageWithSkeleton from './SkeletonMedia.jsx'

const BUBBLES = Array.from({ length: 12 }).map((_, i) => ({
  size: 8 + ((i * 11) % 34),
  left: (i * 83) % 100,
  dur: 11 + ((i * 3) % 9),
  delay: -((i * 5) % 14),
}))

/**
 * Fondo del hero (imagen o video — ver src/data/heroConfig.js).
 * Siempre lleva el degradado azul encima. Opcional: burbujas flotantes y ola
 * inferior animada (`wave`) que enlaza con la siguiente sección.
 */
export default function HeroBackground({ config, bubbles = false, wave = false }) {
  const reduce = useReducedMotion()
  const items = useMemo(() => BUBBLES, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#07182c]">
      {config.type === 'video' ? (
        <video className="absolute inset-0 w-full h-full object-cover" src={config.src} poster={config.poster} autoPlay muted loop playsInline />
      ) : (
        <ImageWithSkeleton
          src={config.src}
          eager
          alt=""
          className="!absolute inset-0 !bg-transparent"
          imgClassName={`!absolute inset-0 !h-full w-full object-cover ${reduce ? '' : 'animate-kenburns'}`}
        />
      )}
      <div className="absolute inset-0" style={{ backgroundImage: config.gradient }} />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_30%,rgba(14,165,233,.18),transparent_60%)]" />

      {bubbles && !reduce && (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {items.map((b, i) => (
            <span
              key={i}
              className="bubble animate-rise"
              style={{ width: b.size, height: b.size, left: `${b.left}%`, animationDuration: `${b.dur}s`, animationDelay: `${b.delay}s` }}
            />
          ))}
        </div>
      )}

      {wave && (
        <div className="absolute left-0 right-0 bottom-[-1px] h-14 sm:h-20 overflow-hidden pointer-events-none" aria-hidden="true">
          <svg className="wave-svg" viewBox="0 0 2400 100" preserveAspectRatio="none" style={{ fill: 'var(--bg-alt)' }}>
            <path d="M0 55 C 200 10, 400 10, 600 55 S 1000 100, 1200 55 S 1600 10, 1800 55 S 2200 100, 2400 55 V100 H0 Z" />
          </svg>
        </div>
      )}
    </div>
  )
}
