import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-sky-950 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/assets/images/app/logo.png"
              alt="Logo"
              className="h-10 w-auto object-contain"
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/40x40/0284c7/ffffff?text=SSB' }}
            />
            <div>
              <span className="font-extrabold text-brand text-sm tracking-wider uppercase block">SÉPTICOS SANTA BÁRBARA</span>
              <span className="text-slate-400 text-xs">Didier Cuervo · 313 381 5853</span>
            </div>
          </div>
          <div className="flex gap-4">
            <a href="https://wa.me/573133815853" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center hover:bg-emerald-500 transition">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="https://www.facebook.com/share/192qztjzH5/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center hover:bg-blue-600 transition">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://vm.tiktok.com/ZS96TUKn8Wjw3-TpJnR/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-700 transition">
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-6 pt-6 text-center text-xs text-slate-400">
          <p>
            © 2026 Sépticos Santa Bárbara · <Link to="/" className="hover:text-brand transition">Inicio</Link> ·{' '}
            <Link to="/servicios/instalacion-profesional" className="hover:text-brand transition">Instalación</Link> ·{' '}
            <Link to="/servicios/limpieza-mantenimiento" className="hover:text-brand transition">Limpieza</Link> ·{' '}
            <Link to="/servicios/tanques-almacenamiento" className="hover:text-brand transition">Tanques</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
