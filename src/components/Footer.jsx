import React from 'react'
import { Link } from 'react-router-dom'

const SOCIAL = [
  { href: 'https://wa.me/573133815853', icon: 'fa-whatsapp', label: 'WhatsApp', hover: 'hover:bg-emerald-600' },
  { href: 'https://www.facebook.com/share/192qztjzH5/', icon: 'fa-facebook-f', label: 'Facebook', hover: 'hover:bg-blue-600' },
  { href: 'https://vm.tiktok.com/ZS96TUKn8Wjw3-TpJnR/', icon: 'fa-tiktok', label: 'TikTok', hover: 'hover:bg-rose-500' },
]

export default function Footer() {
  return (
    <footer className="bg-[#07182c] text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img src="/assets/images/app/logo.png" alt="Logo Sépticos Santa Bárbara" width="40" height="40" loading="lazy" className="h-10 w-auto object-contain" onError={(e) => { e.currentTarget.src = 'https://placehold.co/40x40/0284c7/ffffff?text=SSB' }} />
            <div>
              <span className="font-extrabold text-sky-300 text-sm tracking-[.14em] uppercase block">Sépticos Santa Bárbara</span>
              <span className="text-slate-400 text-xs">Didier Cuervo · 313 381 5853</span>
            </div>
          </div>
          <div className="flex gap-3">
            {SOCIAL.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className={`w-11 h-11 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-slate-200 transition-all hover:text-white hover:-translate-y-1 ${s.hover}`}>
                <i className={`fa-brands ${s.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-slate-400">
          <p>
            © 2026 Sépticos Santa Bárbara · <Link to="/" className="hover:text-sky-300 transition">Inicio</Link> ·{' '}
            <Link to="/servicios/instalacion-profesional" className="hover:text-sky-300 transition">Instalación</Link> ·{' '}
            <Link to="/servicios/limpieza-mantenimiento" className="hover:text-sky-300 transition">Limpieza</Link> ·{' '}
            <Link to="/servicios/tanques-almacenamiento" className="hover:text-sky-300 transition">Tanques</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
