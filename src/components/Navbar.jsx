import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useScrollSpy from '../hooks/useScrollSpy.js'

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
  { to: '/#servicios', label: 'Servicios' },
  { to: '/servicios/instalacion-profesional', label: 'Instalación' },
  { to: '/servicios/limpieza-mantenimiento', label: 'Limpieza' },
  { to: '/servicios/tanques-almacenamiento', label: 'Tanques' },
]

// clase compartida: subrayado permanente si activo, en hover si no
const underline = (active) =>
  `relative pb-1 font-semibold text-sm transition-colors ${active ? 'text-brand' : 'text-slate-600 hover:text-brand'} ` +
  `after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-brand after:transition-all after:duration-300 ` +
  (active ? 'after:w-full' : 'after:w-0 hover:after:w-full')

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'
  const [mobileOpen, setMobileOpen] = useState(false)

  const activeSection = useScrollSpy('main-container', HOME_LINKS.map((l) => l.id))

  const scrollToSection = (id) => {
    if (!isHome) {
      navigate('/', { state: { scrollTo: id } })
      return
    }
    const section = document.getElementById(id)
    const container = document.getElementById('main-container')
    if (section && container) container.scrollTo({ top: section.offsetTop, behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-40 border-b border-sky-100 shadow-sm" role="navigation" aria-label="Menú principal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <button onClick={() => scrollToSection('inicio')} className="flex items-center gap-3 focus:outline-none" aria-label="Ir al inicio">
            <img
              src="/assets/images/app/logo.png"
              alt="Sépticos Santa Bárbara"
              className="h-10 sm:h-12 w-auto object-contain"
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/60x60/0284c7/ffffff?text=SSB' }}
            />
            <div className="flex flex-col leading-tight text-left">
              <span className="font-extrabold text-brand text-sm md:text-base tracking-wider uppercase">SÉPTICOS</span>
              <span className="font-bold text-slate-600 text-[10px] md:text-xs tracking-widest">SANTA BÁRBARA</span>
            </div>
          </button>

          <div className="hidden lg:flex space-x-6 items-center">
            {isHome ? (
              <>
                {HOME_LINKS.map((l) => (
                  <button key={l.id} onClick={() => scrollToSection(l.id)} className={underline(activeSection === l.id)}>
                    {l.label}
                  </button>
                ))}
              </>
            ) : (
              <>
                {SERVICE_LINKS.map((l) => (
                  <Link key={l.to} to={l.to} className={underline(location.pathname === l.to)}>
                    {l.label}
                  </Link>
                ))}
              </>
            )}
            <button
              onClick={() => scrollToSection('contacto')}
              className="bg-brand text-white px-5 py-2.5 rounded-full hover:bg-brand-dark transition-all shadow-md font-bold text-sm flex items-center gap-2"
            >
              <i className="fa-solid fa-phone"></i> Contáctanos
            </button>
          </div>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden text-slate-600 hover:text-brand focus:outline-none p-2"
            aria-label="Abrir menú"
          >
            <i className="fa-solid fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-sky-100 shadow-lg absolute w-full left-0 z-50">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {(isHome
              ? HOME_LINKS.map((l) => ({ label: l.label, onClick: () => scrollToSection(l.id), active: activeSection === l.id }))
              : SERVICE_LINKS.map((l) => ({ label: l.label, to: l.to, active: location.pathname === l.to }))
            ).map((item, i) =>
              item.to ? (
                <Link
                  key={i}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={`block w-full text-left px-3 py-2 rounded-md font-medium ${item.active ? 'text-brand bg-sky-50' : 'text-slate-700 hover:text-brand hover:bg-sky-50'}`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={i}
                  onClick={item.onClick}
                  className={`block w-full text-left px-3 py-2 rounded-md font-medium ${item.active ? 'text-brand bg-sky-50' : 'text-slate-700 hover:text-brand hover:bg-sky-50'}`}
                >
                  {item.label}
                </button>
              )
            )}
            <button
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-center bg-brand text-white py-3 rounded-xl font-bold hover:bg-brand-dark transition shadow-md"
            >
              <i className="fa-solid fa-phone mr-1"></i> Contáctanos
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
