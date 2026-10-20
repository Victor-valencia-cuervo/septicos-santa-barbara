import React, { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
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
import SectionHead from '../components/SectionHead.jsx'
import Footer from '../components/Footer.jsx'
import { useIntroDone } from '../components/IntroSplash.jsx'
import { scrollToId } from '../lib/scroll.js'
import { GALLERY_INICIO, ANTES_DESPUES } from '../data/galleryData.js'
import { VIDEOS_INICIO } from '../data/videosData.js'
import { HERO_INICIO } from '../data/heroConfig.js'

const REVIEWS = [
  { stars: 5, text: 'Excelente servicio por parte de Didier Cuervo. Vinieron el mismo día, succionaron y lavaron el pozo completamente. Muy ordenados y profesionales.', initials: 'HR', name: 'Hernán Restrepo', role: 'Propietario de Finca de Recreo' },
  { stars: 5, text: 'Compré un tanque de 5,000 L para riego agrícola. Didier nos asesoró de manera excelente y realizó la instalación en tiempo récord. Totalmente confiables.', initials: 'MA', name: 'Martha Arboleda', role: 'Productora Agrícola' },
  { stars: 4.5, text: 'La instalación del pozo séptico con filtro anaerobio para nuestra casa de campo quedó perfecta. Son expertos en el tema y los precios son muy justos.', initials: 'FG', name: 'Felipe Gómez', role: 'Ingeniero Civil' },
]

const SERVICES = [
  { to: '/servicios/instalacion-profesional', icon: 'fa-screwdriver-wrench', n: '01', title: 'Instalación Profesional', cta: 'Saber más', tint: 'from-sky-500/15', color: 'text-brand', desc: 'Diseño y colocación técnica de sistemas sépticos completos. Evaluamos el terreno, calculamos las dimensiones ideales y garantizamos una filtración perfecta y ecológica.' },
  { to: '/servicios/limpieza-mantenimiento', icon: 'fa-pump-soap', n: '02', title: 'Limpieza & Mantenimiento', cta: 'Saber más', tint: 'from-cyan-500/15', color: 'text-cyan-600', desc: 'Mantenimiento preventivo y correctivo de pozos sépticos. Succión y extracción de lodos acumulados, lavado a presión y reactivadores biológicos.' },
  { to: '/servicios/tanques-almacenamiento', icon: 'fa-faucet-drip', n: '03', title: 'Tanques de Almacenamiento', cta: 'Ver catálogo', tint: 'from-blue-500/15', color: 'text-blue-600', desc: 'Venta y conexión de tanques certificados para agua potable, ideales para fincas, viviendas y comercio. Desde 250 L hasta 10,000 L.' },
]

const SOCIAL = [
  { href: 'https://wa.me/573133815853', icon: 'fa-brands fa-whatsapp', bg: 'bg-emerald-500', title: 'WhatsApp Directo', desc: 'Chatea directamente con Didier Cuervo para cotizaciones inmediatas.', cta: 'Escríbenos' },
  { href: 'https://www.facebook.com/share/192qztjzH5/', icon: 'fa-brands fa-facebook-f', bg: 'bg-blue-600', title: 'Facebook', desc: 'Mira fotos de instalaciones y lee opiniones adicionales de clientes.', cta: 'Seguir' },
  { href: 'https://vm.tiktok.com/ZS96TUKn8Wjw3-TpJnR/', icon: 'fa-brands fa-tiktok', bg: 'bg-gradient-to-tr from-rose-500 via-slate-800 to-cyan-400', title: 'TikTok', desc: 'Videos rápidos de nuestros trabajos, consejos y el antes/después.', cta: 'Ver videos' },
]

function Stars({ count }) {
  const full = Math.floor(count)
  return (
    <div className="flex gap-0.5 text-amber-400 mb-4 text-sm" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: full }).map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
      {count - full >= 0.5 && <i className="fa-solid fa-star-half-stroke"></i>}
    </div>
  )
}

/* Animación del título del hero: cada palabra sube desde una máscara */
const wordsV = { hidden: { y: '110%' }, show: (i) => ({ y: 0, transition: { duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.2, 0.8, 0.2, 1] } }) }
const fadeUp = (d = 0) => ({ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, delay: d, ease: [0.2, 0.8, 0.2, 1] } } })

export default function Home() {
  const location = useLocation()
  const introDone = useIntroDone()
  const state = introDone ? 'show' : 'hidden'

  // Si venimos de otra página con state.scrollTo (p. ej. "Servicios" desde una página de servicio)
  useEffect(() => {
    const target = location.state?.scrollTo
    if (!target) return
    const t = setTimeout(() => scrollToId(target), 80)
    return () => clearTimeout(t)
  }, [location.state])

  return (
    <>
      <SEO
        title="Sépticos Santa Bárbara | Instalación y Mantenimiento de Pozos Sépticos | Didier Cuervo"
        description="Sépticos Santa Bárbara — Expertos en instalación profesional de pozos sépticos, limpieza y mantenimiento de sistemas sépticos, y venta de tanques de agua desde 250 hasta 10,000 litros. Contacto: Didier Cuervo · 313 381 5853."
        canonical="https://septicossantabarbara.pages.dev/"
      />
      <DotsNav />
      <MaintenanceNotice />

      <main id="main-container">
        {/* ── 1 · HERO ─────────────────────────────────────────── */}
        <section id="inicio" className="relative min-h-[100svh] flex items-center overflow-hidden pt-24 pb-28 lg:py-0">
          <HeroBackground config={HERO_INICIO} bubbles wave />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.div variants={fadeUp(0)} initial="hidden" animate={state} className="glass inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sky-100 text-xs sm:text-sm font-semibold tracking-wide">
                <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span></span>
                Calidad y confianza certificada
              </motion.div>

              <h1 className="mt-6 text-[2.6rem] sm:text-6xl xl:text-7xl font-extrabold leading-[1.02] text-white">
                {['SÉPTICOS'].map((w) => (
                  <span key={w} className="block overflow-hidden pb-1"><motion.span className="block" custom={0} variants={wordsV} initial="hidden" animate={state}>{w}</motion.span></span>
                ))}
                <span className="block overflow-hidden pb-2"><motion.span className="block hero-grad-text" custom={1} variants={wordsV} initial="hidden" animate={state}>SANTA BÁRBARA</motion.span></span>
              </h1>

              <motion.p variants={fadeUp(0.55)} initial="hidden" animate={state} className="mt-6 text-base sm:text-lg md:text-xl text-sky-100/90 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Instalación y mantenimiento integral de pozos sépticos y venta de tanques de agua de alta calidad, desde 250 hasta 10,000 litros.
              </motion.p>

              <motion.div variants={fadeUp(0.7)} initial="hidden" animate={state} className="mt-9 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button onClick={() => scrollToId('cotizador')} className="btn btn--primary btn--lg"><i className="fa-solid fa-calculator"></i> Cotizar ahora</button>
                <button onClick={() => scrollToId('galeria')} className="btn btn--ghost btn--lg"><i className="fa-solid fa-images text-sky-300"></i> Ver nuestros trabajos</button>
              </motion.div>

              <motion.ul variants={fadeUp(0.85)} initial="hidden" animate={state} className="mt-8 flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-xs sm:text-sm text-sky-100/80 font-medium">
                {['Visita técnica gratuita', 'Tanques de 250 a 10,000 L', 'Atención urbana y rural'].map((t) => (
                  <li key={t} className="flex items-center gap-2"><i className="fa-solid fa-check text-cyan-300 text-xs"></i>{t}</li>
                ))}
              </motion.ul>
            </div>

            <motion.div variants={fadeUp(0.6)} initial="hidden" animate={state} className="lg:col-span-5">
              <div className="glass rounded-[2rem] p-6 sm:p-7 max-w-md sm:max-w-lg mx-auto shadow-2xl">
                <div className="flex items-center gap-4 pb-5 border-b border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-400 to-brand flex items-center justify-center text-white text-lg shrink-0"><i className="fa-solid fa-user-gear"></i></div>
                  <div className="min-w-0 text-left">
                    <p className="text-[10px] text-sky-200 uppercase tracking-[.2em] font-bold">Director General</p>
                    <h2 className="text-lg font-bold text-white leading-tight">Didier Cuervo</h2>
                    <a href="tel:3133815853" className="text-sky-300 hover:text-white font-semibold text-sm inline-flex items-center gap-1.5 transition"><i className="fa-solid fa-mobile-screen-button text-xs"></i> 313 381 5853</a>
                  </div>
                </div>
                <div className="grid grid-cols-3 divide-x divide-white/10 pt-6">
                  <StatCounter icon="fa-award" target={12} label={'Años\nExperiencia'} />
                  <StatCounter icon="fa-users" target={100} label={'Clientes\nSatisfechos'} />
                  <StatCounter icon="fa-truck-droplet" target={200} label={'Tanques y\nPozos vendidos'} />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.button
            initial={{ opacity: 0 }} animate={introDone ? { opacity: 1 } : {}} transition={{ delay: 1.2 }}
            onClick={() => scrollToId('servicios')} aria-label="Bajar a servicios"
            className="hidden md:flex absolute z-10 bottom-14 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/70 hover:text-white transition"
          >
            <span className="scroll-hint"></span>
          </motion.button>
        </section>

        {/* ── 2 · SERVICIOS ────────────────────────────────────── */}
        <section id="servicios" className="section section--alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHead eyebrow="¿Qué ofrecemos?" title="Servicios de ingeniería hidráulica" desc="Soluciones completas para el agua de tu hogar, finca o negocio: desde la instalación hasta el mantenimiento." />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {SERVICES.map((s, i) => (
                <Reveal key={s.to} as={Link} to={s.to} delay={i * 90} className="card card--hover group relative overflow-hidden p-7 sm:p-8 flex flex-col">
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.tint} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <span className="absolute top-6 right-7 text-5xl font-extrabold text-[var(--ink)] opacity-[.05] select-none">{s.n}</span>
                  <div className={`relative w-14 h-14 rounded-2xl bg-[var(--surface-2)] border border-[var(--line)] flex items-center justify-center text-xl mb-6 ${s.color} group-hover:bg-brand group-hover:text-white group-hover:border-brand group-hover:rotate-[-6deg] transition-all duration-300`}><i className={`fa-solid ${s.icon}`}></i></div>
                  <h3 className="relative text-xl font-bold text-[var(--ink)] mb-3">{s.title}</h3>
                  <p className="relative text-[var(--ink-3)] flex-grow leading-relaxed text-sm sm:text-[15px]">{s.desc}</p>
                  <div className={`relative mt-6 inline-flex items-center gap-2 font-bold text-sm ${s.color} group-hover:gap-3 transition-all`}>{s.cta} <i className="fa-solid fa-arrow-right text-xs"></i></div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3 · GALERÍA ──────────────────────────────────────── */}
        <section id="galeria" className="section">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHead eyebrow="Nuestro trabajo en acción" title="Galería de proyectos" desc="Imágenes reales de instalaciones, limpiezas y la calidad de los tanques que comercializamos." />
            <Gallery images={GALLERY_INICIO} mode="grid" filters batchSize={8} />
          </div>
        </section>

        {/* ── 4 · VIDEOS ───────────────────────────────────────── */}
        <section id="videos" className="section section--dark">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHead light eyebrow="En movimiento" title="Videos del proceso" desc="Mira cómo trabajamos. Videos reales de nuestros servicios — toca cualquiera para verlo en grande." />
            <VideoGrid videos={VIDEOS_INICIO} />
          </div>
        </section>

        {/* ── 5 · ANTES Y DESPUÉS ──────────────────────────────── */}
        <section id="proyectos" className="section section--deep">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHead light eyebrow="Resultados sorprendentes" title="Antes y después" desc="Desliza para ver el cambio de lodos acumulados a limpieza total." />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
              <Reveal className="lg:col-span-5 space-y-4">
                <div className="glass rounded-2xl p-5">
                  <h3 className="text-lg font-bold text-sky-300 flex items-center gap-2 mb-2"><i className="fa-solid fa-triangle-exclamation"></i> Pozo séptico tapado</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">Un pozo sin mantenimiento acumula grasas y lodos que obstruyen las tuberías, causando malos olores y contaminación.</p>
                </div>
                <div className="glass rounded-2xl p-5">
                  <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2 mb-2"><i className="fa-solid fa-circle-check"></i> Después de la limpieza</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">Lavado intensivo y succión técnica: el pozo recupera su capacidad original, libre de sedimentos y con el flujo biológico reactivado.</p>
                </div>
              </Reveal>
              <Reveal delay={100} className="lg:col-span-7 flex justify-center">
                <AntesDespues antes={ANTES_DESPUES.antes} despues={ANTES_DESPUES.despues} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 6 · COTIZADOR ────────────────────────────────────── */}
        <section id="cotizador" className="section section--alt">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHead eyebrow="Herramienta interactiva" title="Cotizador inteligente" desc="Calcula la capacidad recomendada o cotiza un tanque de agua al instante." />
            <Reveal><Cotizador /></Reveal>
          </div>
        </section>

        {/* ── 7 · RESEÑAS ──────────────────────────────────────── */}
        <section id="resenas" className="section">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHead eyebrow="Opiniones de clientes" title="Garantía de satisfacción" desc="Nuestros clientes avalan la responsabilidad, limpieza y cumplimiento de Didier Cuervo en cada servicio." />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {REVIEWS.map((r, i) => (
                <Reveal key={r.name} delay={i * 90} className="card card--hover p-7 relative flex flex-col">
                  <i className="fa-solid fa-quote-right text-4xl text-brand/10 absolute top-6 right-6"></i>
                  <Stars count={r.stars} />
                  <p className="text-[var(--ink-2)] text-[15px] leading-relaxed mb-6 flex-grow">“{r.text}”</p>
                  <div className="flex items-center gap-3 border-t border-[var(--line)] pt-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-brand text-white rounded-full flex items-center justify-center font-bold text-sm">{r.initials}</div>
                    <div><h4 className="font-bold text-[var(--ink)] text-sm">{r.name}</h4><span className="text-[11px] text-[var(--ink-3)] block">{r.role}</span></div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8 · REDES SOCIALES ───────────────────────────────── */}
        <section id="redes" className="section section--dark">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHead light eyebrow="Comunidad y contenido" title="Conéctate con nosotros" desc="Compartimos videos educativos sobre limpieza, cuidado ecológico de pozos sépticos y consejos de almacenamiento." />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {SOCIAL.map((s, i) => (
                <Reveal key={s.title} as="a" href={s.href} target="_blank" rel="noopener noreferrer" delay={i * 90} className="glass group rounded-3xl p-6 text-center transition duration-300 hover:-translate-y-2 hover:bg-white/10">
                  <div className={`w-14 h-14 ${s.bg} rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition duration-300 shadow-lg`}><i className={s.icon}></i></div>
                  <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-slate-300 text-sm mb-5 leading-relaxed">{s.desc}</p>
                  <span className="inline-flex items-center gap-2 text-sky-300 font-bold text-sm group-hover:gap-3 transition-all">{s.cta} <i className="fa-solid fa-arrow-right text-xs"></i></span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9 · CONTACTO ─────────────────────────────────────── */}
        <section id="contacto" className="section section--deep">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <Reveal className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <span className="eyebrow">¿Tienes dudas?</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.08] text-white">Consúltanos hoy mismo</h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">Atendemos solicitudes urgentes de mantenimiento, cotizaciones y suministro de tanques en toda la región. ¡Contáctanos de forma directa!</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                <a href="tel:3133815853" className="btn btn--primary btn--lg"><i className="fa-solid fa-phone-volume"></i> Llamar a Didier</a>
                <a href="https://wa.me/573133815853?text=Hola%20Didier,%20me%20gustar%C3%ADa%20solicitar%20un%20servicio%20de%20S%C3%A9pticos%20Santa%20B%C3%A1rbara" target="_blank" rel="noopener noreferrer" className="btn btn--wa btn--lg"><i className="fa-brands fa-whatsapp text-lg"></i> Escribir por WhatsApp</a>
              </div>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-6">
              <div className="glass rounded-[2rem] p-7 sm:p-9 shadow-2xl space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-sky-300">Sépticos Santa Bárbara</h3>
                {[
                  { icon: 'fa-user', label: 'Responsable directo', body: <p className="text-base font-bold text-white">Didier Cuervo</p> },
                  { icon: 'fa-phone', label: 'Teléfono móvil', body: <a href="tel:3133815853" className="text-base font-bold text-sky-300 hover:underline">313 381 5853</a> },
                  { icon: 'fa-location-dot', label: 'Cobertura', body: <p className="text-base font-bold text-white">Servicios urbanos y rurales a nivel regional</p> },
                ].map((it) => (
                  <div key={it.label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-sky-500/15 text-sky-300 flex items-center justify-center shrink-0 border border-sky-400/20"><i className={`fa-solid ${it.icon}`}></i></div>
                    <div><p className="text-xs text-slate-400 mb-0.5">{it.label}</p>{it.body}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}
