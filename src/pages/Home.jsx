import React, { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import DotsNav from '../components/DotsNav.jsx'
import Reveal from '../hooks/useReveal.jsx'
import StatCounter from '../components/StatCounter.jsx'
import Gallery from '../components/Gallery.jsx'
import VideoGrid from '../components/VideoGrid.jsx'
import AntesDespues from '../components/AntesDespues.jsx'
import Cotizador from '../components/Cotizador.jsx'
import MaintenanceNotice from '../components/MaintenanceNotice.jsx'
import WhatsAppFloat from '../components/WhatsAppFloat.jsx'
import HeroBackground from '../components/HeroBackground.jsx'
import { GALLERY_INICIO, ANTES_DESPUES } from '../data/galleryData.js'
import { VIDEOS_INICIO } from '../data/videosData.js'
import { HERO_INICIO } from '../data/heroConfig.js'

const REVIEWS = [
  { stars: 5, text: 'Excelente servicio por parte de Didier Cuervo. Vinieron el mismo día, succionaron y lavaron el pozo completamente. Muy ordenados y profesionales.', initials: 'HR', name: 'Hernán Restrepo', role: 'Propietario de Finca de Recreo' },
  { stars: 5, text: 'Compré un tanque de 5,000 L para riego agrícola. Didier nos asesoró de manera excelente y realizó la instalación en tiempo récord. Totalmente confiables.', initials: 'MA', name: 'Martha Arboleda', role: 'Productora Agrícola' },
  { stars: 4.5, text: 'La instalación del pozo séptico con filtro anaerobio para nuestra casa de campo quedó perfecta. Son expertos en el tema y los precios son muy justos.', initials: 'FG', name: 'Felipe Gómez', role: 'Ingeniero Civil' },
]

function Stars({ count }) {
  const full = Math.floor(count)
  const half = count - full >= 0.5
  return (
    <div className="flex text-amber-400 mb-4 text-sm">
      {Array.from({ length: full }).map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
      {half && <i className="fa-solid fa-star-half-stroke"></i>}
    </div>
  )
}

export default function Home() {
  const location = useLocation()

  // Si venimos de otra página con state.scrollTo (por ej. clic en "Servicios" desde una página de servicio)
  useEffect(() => {
    const target = location.state?.scrollTo
    if (!target) return
    const t = setTimeout(() => {
      const section = document.getElementById(target)
      const container = document.getElementById('main-container')
      if (section && container) container.scrollTo({ top: section.offsetTop, behavior: 'smooth' })
    }, 60)
    return () => clearTimeout(t)
  }, [location.state])

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    const container = document.getElementById('main-container')
    if (section && container) container.scrollTo({ top: section.offsetTop, behavior: 'smooth' })
  }

  return (
    <>
      <SEO
        title="Sépticos Santa Bárbara | Instalación y Mantenimiento de Pozos Sépticos | Didier Cuervo"
        description="Sépticos Santa Bárbara — Expertos en instalación profesional de pozos sépticos, limpieza y mantenimiento de sistemas sépticos, y venta de tanques de agua desde 250 hasta 10,000 litros. Contacto: Didier Cuervo · 313 381 5853."
        canonical="https://septicossantabarbara.pages.dev/"
      />
      <DotsNav />
      <MaintenanceNotice />

      <main id="main-container" className="snap-container no-scrollbar">
        {/* ── 1 · HERO ─────────────────────────────────────────── */}
        <section id="inicio" className="snap-section relative pt-16 md:pt-20">
          <HeroBackground config={HERO_INICIO} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-24 lg:py-0 relative z-10">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="hero-animate hero-delay-1 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-sky-200 text-xs sm:text-sm font-semibold tracking-wide mx-auto lg:mx-0 w-fit">
                <i className="fa-solid fa-shield-halved text-sky-400"></i> Calidad y Confianza Certificada
              </div>
              <h1 className="hero-animate hero-delay-2 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none text-white drop-shadow-md">
                SÉPTICOS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-cyan-300">SANTA BÁRBARA</span>
              </h1>
              <p className="hero-animate hero-delay-3 text-lg md:text-xl text-sky-100 max-w-2xl mx-auto lg:mx-0 font-light">
                Expertos en instalación y mantenimiento integral de pozos sépticos y venta de tanques de agua de alta calidad desde 250 hasta 10,000 Litros.
              </p>
              <div className="hero-animate hero-delay-4 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl max-w-md mx-auto lg:mx-0 flex items-center gap-4 text-left shadow-lg transition duration-300 mb-8 sm:mb-12">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-brand flex items-center justify-center text-white text-xl">
                  <i className="fa-solid fa-user-gear"></i>
                </div>
                <div>
                  <p className="text-xs text-sky-200 uppercase tracking-widest font-bold">Director General</p>
                  <h2 className="text-lg font-bold text-white">Didier Cuervo</h2>
                  <a href="tel:3133815853" className="text-sky-300 hover:text-white font-medium text-sm flex items-center gap-1 transition">
                    <i className="fa-solid fa-mobile-screen-button text-xs"></i> 313 381 5853
                  </a>
                </div>
              </div>
              <div className="hero-animate hero-delay-5 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <button onClick={() => scrollToSection('contacto')} className="bg-gradient-to-r from-sky-500 to-brand text-white px-8 py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-bold text-base flex items-center justify-center gap-2 shadow">
                  <i className="fa-solid fa-envelope"></i> Contáctanos
                </button>
                <button onClick={() => scrollToSection('cotizador')} className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl transition-all duration-300 font-bold text-base flex items-center justify-center gap-2">
                  <i className="fa-solid fa-calculator text-sky-300"></i> Cotizador Inteligente
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center items-center relative py-6 lg:py-12 w-full px-4 mt-4 lg:mt-0">
              <div className="relative z-10 w-full max-w-md sm:max-w-xl lg:max-w-2xl mx-auto">
                <div className="grid grid-cols-3 gap-2 sm:gap-6 lg:gap-8 w-full text-center items-start">
                  <StatCounter icon="fa-award" target={12} label={'Años\nExperiencia'} />
                  <StatCounter icon="fa-users" target={100} label={'Clientes\nSatisfechos'} />
                  <StatCounter icon="fa-truck-droplet" target={200} label={'Tanques\n& Pozos vendidos'} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2 · SERVICIOS ────────────────────────────────────── */}
        <section id="servicios" className="snap-section bg-sky-50 pt-20 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">
            <div className="text-center mb-8 max-w-3xl mx-auto">
              <Reveal as="span" className="text-brand font-bold tracking-widest uppercase text-sm block">¿Qué Ofrecemos?</Reveal>
              <Reveal as="h2" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-1">Servicios de Ingeniería Hidráulica</Reveal>
              <div className="w-24 h-1.5 bg-brand mx-auto mt-3 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto w-full px-2">
              <Reveal as={Link} to="/servicios/instalacion-profesional" className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-sky-100 hover:border-brand/40 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group">
                <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center text-brand text-2xl mb-6 group-hover:bg-brand group-hover:text-white transition duration-300 shadow-md"><i className="fa-solid fa-screwdriver-wrench"></i></div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3">Instalación Profesional</h3>
                <p className="text-slate-600 font-light flex-grow leading-relaxed">Diseño y colocación técnica de sistemas sépticos completos. Evaluamos el terreno, calculamos las dimensiones ideales y garantizamos filtración perfecta y ecológica.</p>
                <div className="mt-6 flex items-center gap-2 text-brand font-bold group-hover:gap-3 transition-all duration-300 text-sm">Saber más <i className="fa-solid fa-arrow-right"></i></div>
              </Reveal>
              <Reveal as={Link} to="/servicios/limpieza-mantenimiento" delay={80} className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-sky-100 hover:border-brand/40 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group">
                <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center text-cyan-600 text-2xl mb-6 group-hover:bg-cyan-600 group-hover:text-white transition duration-300 shadow-md"><i className="fa-solid fa-pump-soap"></i></div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3">Limpieza &amp; Mantenimiento</h3>
                <p className="text-slate-600 font-light flex-grow leading-relaxed">Mantenimiento preventivo y correctivo de pozos sépticos. Succión y extracción de lodos acumulados, lavado a presión y reactivadores biológicos.</p>
                <div className="mt-6 flex items-center gap-2 text-cyan-600 font-bold group-hover:gap-3 transition-all duration-300 text-sm">Saber más <i className="fa-solid fa-arrow-right"></i></div>
              </Reveal>
              <Reveal as={Link} to="/servicios/tanques-almacenamiento" delay={160} className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-sky-100 hover:border-brand/40 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition duration-300 shadow-md"><i className="fa-solid fa-faucet-drip"></i></div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3">Tanques de Almacenamiento</h3>
                <p className="text-slate-600 font-light flex-grow leading-relaxed">Venta y conexión de tanques certificados para agua potable, ideales para fincas, viviendas y comercio. Desde <strong className="text-brand font-semibold">250 L</strong> hasta <strong className="text-brand font-semibold">10,000 L</strong>.</p>
                <div className="mt-6 flex items-center gap-2 text-blue-600 font-bold group-hover:gap-3 transition-all duration-300 text-sm">Ver catálogo <i className="fa-solid fa-arrow-right"></i></div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 3 · GALERÍA ──────────────────────────────────────── */}
        <section id="galeria" className="snap-section bg-white pt-20 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">
            <div className="text-center mb-5">
              <Reveal as="span" className="text-brand font-bold tracking-widest uppercase text-sm block">Nuestro Trabajo en Acción</Reveal>
              <Reveal as="h2" className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">Galería de Proyectos</Reveal>
              <Reveal as="p" className="text-slate-500 font-light max-w-xl mx-auto mt-1 text-sm md:text-base">Imágenes reales de instalaciones, limpiezas y la excelente calidad de los tanques que comercializamos.</Reveal>
            </div>
            <div className="max-w-5xl mx-auto w-full px-2">
              <Gallery images={GALLERY_INICIO} mode="grid" filters batchSize={8} />
            </div>
          </div>
        </section>

        {/* ── 4 · VIDEOS ───────────────────────────────────────── */}
        <section id="videos" className="snap-section bg-slate-900 pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">
            <div className="text-center mb-8">
              <Reveal as="span" className="text-brand font-bold tracking-widest uppercase text-sm block">En Movimiento</Reveal>
              <Reveal as="h2" className="text-3xl sm:text-4xl font-extrabold text-white mt-1">Videos del Proceso</Reveal>
              <div className="w-24 h-1.5 bg-brand mx-auto mt-3 rounded-full"></div>
              <Reveal as="p" className="text-slate-400 font-light mt-3 max-w-xl mx-auto text-sm md:text-base">Mira cómo trabajamos. Videos reales de nuestros servicios. Haz clic para verlos en grande.</Reveal>
            </div>
            <div className="max-w-5xl mx-auto w-full px-2">
              <VideoGrid videos={VIDEOS_INICIO} />
            </div>
          </div>
        </section>

        {/* ── 5 · ANTES Y DESPUÉS ──────────────────────────────── */}
        <section id="proyectos" className="snap-section bg-slate-900 text-white pt-20 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">
            <div className="text-center mb-8">
              <Reveal as="span" className="text-brand font-bold tracking-widest uppercase text-sm block">Resultados Sorprendentes</Reveal>
              <Reveal as="h2" className="text-3xl sm:text-4xl md:text-5xl font-black mt-1 text-white">Antes y Después</Reveal>
              <div className="w-24 h-1.5 bg-brand mx-auto mt-3 rounded-full"></div>
              <Reveal as="p" className="text-slate-400 font-light mt-4 max-w-xl mx-auto text-sm sm:text-base">Usa el deslizador táctil/mouse para ver el cambio radical de lodos acumulados a limpieza total.</Reveal>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto w-full px-2">
              <Reveal className="lg:col-span-5 space-y-4">
                <div className="bg-white/10 border border-white/10 p-5 rounded-2xl">
                  <h3 className="text-xl font-bold text-sky-300 flex items-center gap-2 mb-2"><i className="fa-solid fa-triangle-exclamation"></i> Pozo Séptico Tapado</h3>
                  <p className="text-slate-300 text-sm font-light leading-relaxed">Un pozo sin mantenimiento acumula grasas y lodos que obstruyen las tuberías, causando malos olores y contaminación.</p>
                </div>
                <div className="bg-white/10 border border-white/10 p-5 rounded-2xl">
                  <h3 className="text-xl font-bold text-emerald-400 flex items-center gap-2 mb-2"><i className="fa-solid fa-circle-check"></i> Después de la Limpieza</h3>
                  <p className="text-slate-300 text-sm font-light leading-relaxed">Realizamos lavado intensivo y succión técnica. El pozo recupera su capacidad original del 100%, libre de sedimentos y con flujo biológico reactivado.</p>
                </div>
              </Reveal>
              <Reveal className="lg:col-span-7 flex justify-center">
                <AntesDespues antes={ANTES_DESPUES.antes} despues={ANTES_DESPUES.despues} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 6 · COTIZADOR ────────────────────────────────────── */}
        <section id="cotizador" className="snap-section bg-gradient-to-br from-sky-50 to-cyan-50 pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">
            <div className="text-center mb-6">
              <Reveal as="span" className="text-brand font-bold tracking-widest uppercase text-sm block">Herramienta Interactiva</Reveal>
              <Reveal as="h2" className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">Cotizador Inteligente</Reveal>
              <div className="w-24 h-1.5 bg-brand mx-auto mt-2 rounded-full"></div>
              <Reveal as="p" className="text-slate-500 font-light mt-2 text-xs sm:text-sm">Calcula la capacidad recomendada o cotiza un tanque de agua al instante.</Reveal>
            </div>
            <Reveal><Cotizador /></Reveal>
          </div>
        </section>

        {/* ── 7 · RESEÑAS ──────────────────────────────────────── */}
        <section id="resenas" className="snap-section bg-white pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">
            <div className="text-center mb-8 max-w-3xl mx-auto">
              <Reveal as="span" className="text-brand font-bold tracking-widest uppercase text-sm block">Opiniones de Clientes</Reveal>
              <Reveal as="h2" className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">Garantía de Satisfacción</Reveal>
              <div className="w-24 h-1.5 bg-brand mx-auto mt-3 rounded-full"></div>
              <Reveal as="p" className="text-slate-500 font-light mt-3 text-xs sm:text-sm md:text-base">Nuestros clientes avalan la responsabilidad, limpieza y cumplimiento de Didier Cuervo en cada servicio.</Reveal>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full px-2">
              {REVIEWS.map((r, i) => (
                <Reveal key={r.name} delay={i * 80} className="bg-sky-50 rounded-3xl p-6 relative border border-sky-100 shadow-md flex flex-col justify-between hover:shadow-lg transition">
                  <i className="fa-solid fa-quote-right text-4xl text-sky-200/50 absolute top-6 right-6"></i>
                  <div>
                    <Stars count={r.stars} />
                    <p className="text-slate-700 italic font-light text-sm leading-relaxed mb-6">&ldquo;{r.text}&rdquo;</p>
                  </div>
                  <div className="flex items-center gap-3 border-t border-sky-100 pt-4 mt-auto">
                    <div className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-black text-sm">{r.initials}</div>
                    <div><h4 className="font-extrabold text-slate-800 text-sm">{r.name}</h4><span className="text-[11px] text-slate-500 block">{r.role}</span></div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8 · REDES SOCIALES ───────────────────────────────── */}
        <section id="redes" className="snap-section bg-slate-900 text-white pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">
            <div className="text-center mb-8">
              <Reveal as="span" className="text-brand font-bold tracking-widest uppercase text-sm block">Comunidad &amp; Contenido</Reveal>
              <Reveal as="h2" className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-1">Conéctate con Nosotros</Reveal>
              <div className="w-24 h-1.5 bg-brand mx-auto mt-3 rounded-full"></div>
              <Reveal as="p" className="text-slate-400 font-light mt-4 max-w-xl mx-auto text-xs sm:text-sm md:text-base">Síguenos en redes sociales donde compartimos videos educativos sobre limpieza, cuidado ecológico de pozos sépticos y consejos de almacenamiento.</Reveal>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto w-full px-2">
              <Reveal as="a" href="https://wa.me/573133815853" target="_blank" rel="noopener noreferrer" className="bg-emerald-600/10 hover:bg-emerald-600/20 border-2 border-emerald-500/20 rounded-3xl p-6 text-center transition duration-300 transform hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4 group-hover:scale-110 transition duration-300 shadow-md"><i className="fa-brands fa-whatsapp"></i></div>
                <h3 className="text-xl font-bold text-white mb-2">WhatsApp Directo</h3>
                <p className="text-slate-300 text-sm font-light mb-4">Chatea directamente con Didier Cuervo para cotizaciones inmediatas.</p>
                <span className="inline-block bg-emerald-500 text-white font-extrabold text-xs px-4 py-2 rounded-xl">Escríbenos</span>
              </Reveal>
              <Reveal as="a" href="https://www.facebook.com/share/192qztjzH5/" target="_blank" rel="noopener noreferrer" delay={80} className="bg-blue-600/10 hover:bg-blue-600/20 border-2 border-blue-500/20 rounded-3xl p-6 text-center transition duration-300 transform hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4 group-hover:scale-110 transition duration-300 shadow-md"><i className="fa-brands fa-facebook-f"></i></div>
                <h3 className="text-xl font-bold text-white mb-2">Facebook Page</h3>
                <p className="text-slate-300 text-sm font-light mb-4">Mira fotos de instalaciones y lee opiniones adicionales de clientes.</p>
                <span className="inline-block bg-blue-600 text-white font-extrabold text-xs px-4 py-2 rounded-xl">Seguir</span>
              </Reveal>
              <Reveal as="a" href="https://vm.tiktok.com/ZS96TUKn8Wjw3-TpJnR/" target="_blank" rel="noopener noreferrer" delay={160} className="bg-slate-800/80 hover:bg-slate-800 border-2 border-slate-700 rounded-3xl p-6 text-center transition duration-300 transform hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-tr from-rose-500 via-slate-900 to-cyan-400 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-4 group-hover:scale-110 transition duration-300 shadow-md"><i className="fa-brands fa-tiktok"></i></div>
                <h3 className="text-xl font-bold text-white mb-2">TikTok Oficial</h3>
                <p className="text-slate-300 text-sm font-light mb-4">Videos rápidos de nuestros trabajos, consejos y el antes/después.</p>
                <span className="inline-block bg-rose-500 text-white font-extrabold text-xs px-4 py-2 rounded-xl">Ver Videos</span>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 9 · CONTACTO ─────────────────────────────────────── */}
        <section id="contacto" className="snap-section bg-sky-950 text-white pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-between py-12">
            <div></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto w-full">
              <Reveal className="lg:col-span-6 space-y-6 text-center lg:text-left">
                <span className="text-brand font-bold tracking-widest uppercase text-sm">¿Tienes Dudas?</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-none text-white">Consúltanos Hoy Mismo</h2>
                <p className="text-slate-300 font-light text-sm sm:text-base">Atendemos solicitudes urgentes de mantenimiento, cotizaciones y suministro de tanques en toda la región. ¡Contáctate de forma directa!</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                  <a href="tel:3133815853" className="bg-brand hover:bg-brand-light text-white font-black py-4 px-8 rounded-2xl transition shadow-lg flex items-center justify-center gap-3">
                    <i className="fa-solid fa-phone-volume text-xl"></i> Llamar a Didier Cuervo
                  </a>
                  <a href="https://wa.me/573133815853?text=Hola%20Didier,%20me%20gustaría%20solicitar%20un%20servicio%20de%20Sépticos%20Santa%20Bárbara" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 px-8 rounded-2xl transition shadow-lg flex items-center justify-center gap-3">
                    <i className="fa-brands fa-whatsapp text-xl"></i> Escribir por WhatsApp
                  </a>
                </div>
              </Reveal>
              <Reveal delay={100} className="lg:col-span-6">
                <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-md shadow-2xl space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-sky-300">Sépticos Santa Bárbara</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0"><i className="fa-solid fa-user"></i></div>
                      <div><p className="text-xs text-slate-400">Responsable Directo</p><p className="text-base font-bold text-white">Didier Cuervo</p></div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0"><i className="fa-solid fa-phone"></i></div>
                      <div><p className="text-xs text-slate-400">Teléfono Móvil</p><a href="tel:3133815853" className="text-base font-bold text-sky-300 hover:underline">313 381 5853</a></div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0"><i className="fa-solid fa-location-dot"></i></div>
                      <div><p className="text-xs text-slate-400">Cobertura</p><p className="text-base font-bold text-white">Servicios Urbanos y Rurales a Nivel Regional</p></div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="border-t border-white/10 pt-6 mt-8 text-center text-xs text-slate-400">
              <p>© 2026 <strong>Sépticos Santa Bárbara</strong>. Todos los derechos reservados. · Contacto: Didier Cuervo — <a href="tel:3133815853" className="hover:text-brand transition">313 381 5853</a></p>
            </div>
          </div>
        </section>
      </main>

      <WhatsAppFloat />
    </>
  )
}
