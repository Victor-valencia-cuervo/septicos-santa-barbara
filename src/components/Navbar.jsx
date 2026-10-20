import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import useScrollSpy from '../hooks/useScrollSpy.js'
import ThemeToggle from './ThemeToggle.jsx'
import { scrollToId } from '../lib/scroll.js'
import { useIntroDone } from './IntroSplash.jsx'

const HOME_LINKS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'galeria', label: 'Galería' },
  { id: 'videos', label: 'Videos' },
  { id: 'cotizador', label: 'Cotizador' },
  { id: 'resenas', label: 'Reseñas' },
]

const SERVICE_LINKS = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios/instalacion-profesional', label: 'Instalación' },
  { to: '/servicios/limpieza-mantenimiento', label: 'Limpieza' },
  { to: '/servicios/tanques-almacenamiento', label: 'Tanques' },
]

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const introDone = useIntroDone()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useScrollSpy(HOME_LINKS.map((l) => l.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => setMobileOpen(false), [location.pathname])

  const go = (id) => {
    setMobileOpen(false)
    if (!isHome) return navigate('/', { state: { scrollTo: id } })
    scrollToId(id)
  }

  // Transparente sobre el hero de la home; "vidrio" al hacer scroll o en otras páginas
  const solid = scrolled || !isHome || mobileOpen
  const onDark = !solid
  const items = isHome ? HOME_LINKS.map((l) => ({ key: l.id, label: l.label, active: activeSection === l.id, onClick: () => go(l.id) }))
    : SERVICE_LINKS.map((l) => ({ key: l.to, label: l.label, to: l.to, active: location.pathname === l.to }))

  const linkCls = (active) => `relative px-3.5 py-2 text-sm font-semibold rounded-full transition-colors ${
    onDark ? (active ? 'text-white' : 'text-white/75 hover:text-white') : (active ? 'text-brand' : 'text-[var(--ink-2)] hover:text-brand')
  }`

  return (
    <motion.nav
      initial={{ y: -90, opacity: 0 }}
      animate={introDone ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed top-0 inset-x-0 z-40 transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 border-b ${
        solid ? 'bg-white/90 dark:bg-[#0b1220]/90 backdrop-blur-xl border-[var(--line)] shadow-[0_6px_24px_-12px_rgba(2,132,199,.25)]' : 'bg-transparent border-transparent'
      }`}
      role="navigation"
      aria-label="Menú principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <button onClick={() => go('inicio')} className="flex items-center gap-3 group" aria-label="Ir al inicio">
            <img
              src="/assets/images/app/logo.png"
              alt="Sépticos Santa Bárbara"
              width="48" height="48"
              className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/60x60/0284c7/ffffff?text=SSB' }}
            />
            <div className="flex flex-col leading-tight text-left">
              <span className={`font-extrabold text-sm md:text-base tracking-[.14em] uppercase transition-colors ${onDark ? 'text-white' : 'text-brand'}`}>Sépticos</span>
              <span className={`font-semibold text-[10px] md:text-[11px] tracking-[.3em] transition-colors ${onDark ? 'text-sky-200/80' : 'text-[var(--ink-3)]'}`}>SANTA BÁRBARA</span>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {items.map((it) => {
              const inner = (
                <>
                  {it.active && (
                    <motion.span
                      layoutId="nav-pill"
                      className={`absolute inset-0 rounded-full ${onDark ? 'bg-white/15' : 'bg-brand/10'}`}
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{it.label}</span>
                </>
              )
              return it.to
                ? <Link key={it.key} to={it.to} className={linkCls(it.active)}>{inner}</Link>
                : <button key={it.key} onClick={it.onClick} className={linkCls(it.active)}>{inner}</button>
            })}
            <span className="w-2" />
            <ThemeToggle onDark={onDark} />
            <button onClick={() => go('contacto')} className="btn btn--primary ml-2 !py-2.5 !px-5 !text-sm">
              <i className="fa-solid fa-phone text-xs"></i> Contáctanos
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-1.5">
            <ThemeToggle onDark={onDark} />
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${onDark ? 'text-white hover:bg-white/15' : 'text-[var(--ink-2)] hover:bg-[var(--surface-2)]'}`}
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileOpen}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">{mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="lg:hidden overflow-hidden border-t border-[var(--line)]"
          >
            <div className="px-4 pt-3 pb-6 space-y-1">
              {items.map((it, i) => {
                const cls = `block w-full text-left px-4 py-3 rounded-xl font-semibold transition-colors ${it.active ? 'text-brand bg-brand/10' : 'text-[var(--ink-2)] hover:bg-[var(--surface-2)]'}`
                return (
                  <motion.div key={it.key} initial={{ x: -12, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.04 * i }}>
                    {it.to ? <Link to={it.to} className={cls}>{it.label}</Link> : <button onClick={it.onClick} className={cls}>{it.label}</button>}
                  </motion.div>
                )
              })}
              <button onClick={() => go('contacto')} className="btn btn--primary w-full mt-3">
                <i className="fa-solid fa-phone"></i> Contáctanos
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
