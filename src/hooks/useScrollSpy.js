import { useEffect, useState } from 'react'

/**
 * useScrollSpy — devuelve el id de la sección visible en el centro de la
 * pantalla (scroll normal de la ventana, con IntersectionObserver).
 */
export default function useScrollSpy(sectionIds) {
  const [active, setActive] = useState(sectionIds[0] || '')
  const key = sectionIds.join(',')

  useEffect(() => {
    const els = sectionIds.map((id) => document.getElementById(id)).filter(Boolean)
    if (!els.length) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return active
}
