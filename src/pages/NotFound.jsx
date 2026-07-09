import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import WhatsAppFloat from '../components/WhatsAppFloat.jsx'

export default function NotFound() {
  return (
    <>
      <SEO title="Página no encontrada | Sépticos Santa Bárbara" description="La página que buscas no existe o fue movida." />
      <main
        className="min-h-screen flex items-center justify-center p-4"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,.88), rgba(15,23,42,.95)), url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative overflow-hidden max-w-3xl w-full p-8 md:p-12 rounded-3xl shadow-2xl text-center bg-white/5 border border-white/10 backdrop-blur-md">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="bg-brand/20 p-5 rounded-full inline-flex border border-brand/30">
                <i className="fa-solid fa-triangle-exclamation text-5xl text-sky-300"></i>
              </div>
            </div>

            <h1 className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-cyan-300 drop-shadow-sm mb-2 tracking-tighter">
              404
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              ¡Ups! Parece que esta página <br className="hidden md:block" /> se fue por el desagüe.
            </h2>

            <p className="text-slate-300 mb-10 max-w-lg mx-auto text-sm md:text-base leading-relaxed font-light">
              No pudimos encontrar la página que buscas. Es posible que haya sido eliminada, movida a otra sección o que el enlace sea incorrecto.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                to="/"
                className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(2,132,199,0.4)] hover:shadow-[0_0_25px_rgba(2,132,199,0.6)] flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-house"></i> Volver al Inicio
              </Link>
              <a
                href="https://wa.me/573133815853"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/15 text-white px-8 py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
              >
                <i className="fa-brands fa-whatsapp"></i> Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-slate-950 py-4 text-center border-t border-slate-800">
        <p className="text-slate-500 text-xs">&copy; 2026 Sépticos Santa Bárbara. Todos los derechos reservados.</p>
      </footer>
      <WhatsAppFloat />
    </>
  )
}
