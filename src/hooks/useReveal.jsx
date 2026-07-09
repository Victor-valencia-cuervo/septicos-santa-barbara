import React, { useEffect, useRef, useState } from 'react'

/**
 * useInView — dispara `true` una sola vez cuando el elemento entra
 * en el viewport (o en `root`, útil dentro del contenedor con scroll-snap).
 */
export function useInView(root = null, threshold = 0.1) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            io.unobserve(entry.target)
          }
        })
      },
      { root, threshold, rootMargin: '0px 0px -20px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [root, threshold])

  return [ref, inView]
}

/**
 * <Reveal> — envuelve cualquier contenido y le aplica la animación
 * "reveal" (fade + slide-up) definida en index.css, igual que el
 * sitio original.
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', root = null, children, ...rest }) {
  const [ref, inView] = useInView(root)
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
