import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const SERVICES = [
  { to: '/servicios/instalacion-profesional', label: 'Instalación Profesional', icon: 'fa-screwdriver-wrench' },
  { to: '/servicios/limpieza-mantenimiento', label: 'Limpieza & Mantenimiento', icon: 'fa-pump-soap' },
  { to: '/servicios/tanques-almacenamiento', label: 'Tanques de Almacenamiento', icon: 'fa-faucet-drip' },
]

/**
 * Reemplaza la barra de "Inicio > Servicios > ..." por una barra
 * interactiva pegada debajo del navbar que muestra los 3 servicios,
 * resaltando con una rayita el que se está viendo actualmente.
 */
export default function ServiceSubNav() {
  const { pathname } = useLocation()

  return (
    <div className="service-subnav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-2.5" aria-label="Servicios">
          {SERVICES.map((s) => {
            const active = pathname === s.to
            return (
              <Link
                key={s.to}
                to={s.to}
                className={`relative flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                  active ? 'text-white bg-white/10' : 'text-sky-200/80 hover:text-white hover:bg-white/5'
                }`}
              >
                <i className={`fa-solid ${s.icon} text-[11px]`}></i>
                {s.label}
                <span
                  className={`absolute left-3 right-3 -bottom-[9px] h-[2px] rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 transition-all duration-300 ${
                    active ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                  }`}
                />
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
