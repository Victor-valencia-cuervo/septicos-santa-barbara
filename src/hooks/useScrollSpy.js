import { useEffect, useState } from 'react'

/**
 * useScrollSpy — observa el contenedor con scroll-snap de la home
 * y devuelve el id de la sección actualmente visible, para resaltar
 * tanto los puntos de navegación lateral como el navbar.
 */
export default function useScrollSpy(containerId, sectionIds) {
  const [active, setActive] = useState(sectionIds[0] || '')

  useEffect(() => {
    const container = document.getElementById(containerId)
    if (!container) return

    const handler = () => {
      const scrollPos = container.scrollTop + window.innerHeight / 2
      let current = active
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        if (scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          current = id
          break
        }
      }
      setActive(current)
    }

    handler()
    container.addEventListener('scroll', handler, { passive: true })
    window.addEventListener('resize', handler)
    return () => {
      container.removeEventListener('scroll', handler)
      window.removeEventListener('resize', handler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerId, sectionIds.join(',')])

  return active
}
