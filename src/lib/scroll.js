// Desplazamiento suave a una sección de la home, compensando la altura del navbar.
export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  if (id === 'inicio') return window.scrollTo({ top: 0, behavior: 'smooth' })
  const nav = window.innerWidth >= 768 ? 80 : 64
  const y = el.getBoundingClientRect().top + window.scrollY - nav + 1
  window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' })
}
