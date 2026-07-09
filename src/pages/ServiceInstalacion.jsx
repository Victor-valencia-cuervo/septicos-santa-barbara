import React from 'react'
import SEO from '../components/SEO.jsx'
import ServiceSubNav from '../components/ServiceSubNav.jsx'
import HeroBackground from '../components/HeroBackground.jsx'
import Reveal from '../hooks/useReveal.jsx'
import Gallery from '../components/Gallery.jsx'
import VideoGrid from '../components/VideoGrid.jsx'
import Timeline from '../components/Timeline.jsx'
import Faq from '../components/Faq.jsx'
import Footer from '../components/Footer.jsx'
import WhatsAppFloat from '../components/WhatsAppFloat.jsx'
import { RelatedServices, SectionHeader } from '../components/ServicePagePieces.jsx'
import { GALLERY_INSTALACION } from '../data/galleryData.js'
import { VIDEOS_INSTALACION } from '../data/videosData.js'
import { HERO_INSTALACION } from '../data/heroConfig.js'

const INCLUYE = [
  { icon: 'fa-magnifying-glass', color: 'bg-sky-100 text-brand', title: 'Estudio del Terreno', desc: 'Análisis de permeabilidad del suelo y evaluación topográfica.' },
  { icon: 'fa-drafting-compass', color: 'bg-cyan-100 text-cyan-600', title: 'Diseño del Sistema', desc: 'Dimensionamiento según la cantidad de usuarios y norma RAS 2000.' },
  { icon: 'fa-trowel', color: 'bg-blue-100 text-blue-600', title: 'Excavación', desc: 'Excavación técnica con maquinaria adecuada respetando el terreno.' },
  { icon: 'fa-screwdriver-wrench', color: 'bg-sky-100 text-brand', title: 'Instalación', desc: 'Montaje del tanque, tuberías y filtros con materiales certificados.' },
  { icon: 'fa-vial', color: 'bg-emerald-100 text-emerald-600', title: 'Pruebas de Funcionamiento', desc: 'Verificación hidráulica del sistema antes de la entrega oficial.' },
  { icon: 'fa-flag-checkered', color: 'bg-amber-100 text-amber-600', title: 'Entrega del Proyecto', desc: 'Capacitación, documentación técnica y garantía del trabajo.' },
]

const TIMELINE = [
  { icon: 'fa-calendar-check', title: 'Visita Técnica', desc: 'Evaluación de condiciones del terreno, accesos y necesidades del proyecto.' },
  { icon: 'fa-flask', iconColor: 'text-cyan-600', title: 'Estudio del Terreno', desc: 'Pruebas de percolación y análisis del subsuelo para determinar el sistema ideal.' },
  { icon: 'fa-pen-ruler', iconColor: 'text-blue-600', title: 'Diseño', desc: 'Diseño técnico según norma RAS 2000 y requerimientos ambientales regionales.' },
  { icon: 'fa-trowel-bricks', iconColor: 'text-amber-600', title: 'Excavación', desc: 'Excavación técnica con maquinaria especializada según las dimensiones aprobadas.' },
  { icon: 'fa-gears', iconColor: 'text-emerald-600', title: 'Instalación', desc: 'Montaje del tanque, FAFA, tuberías de conducción y ventilación con materiales certificados.' },
  { icon: 'fa-vial', title: 'Pruebas', desc: 'Pruebas hidráulicas de presión y verificación del flujo correcto antes de cubrir.' },
  { icon: 'fa-circle-check', title: 'Entrega', desc: 'Entrega formal, capacitación del propietario, documentación técnica y garantía.', final: true },
]

const BENEFICIOS = [
  { title: 'Mayor vida útil', desc: 'Sistemas bien instalados duran más de 20 años con mantenimiento adecuado.' },
  { title: 'Evita malos olores', desc: 'Un sistema correcto elimina olores y protege el bienestar del hogar.' },
  { title: 'Cumple normas ambientales', desc: 'Diseño bajo normatividad RAS 2000 y resoluciones de la CAR regional.' },
  { title: 'Menos mantenimiento', desc: 'Una instalación técnica reduce la frecuencia y el costo del mantenimiento futuro.' },
  { title: 'Excelente filtración', desc: 'El FAFA garantiza un efluente de calidad que no contamina suelo ni fuentes de agua.' },
  { title: 'Valoriza su propiedad', desc: 'Un sistema séptico certificado aumenta el valor comercial del predio rural.' },
]

const FAQ = [
  { q: '¿Cuánto tiempo tarda la instalación?', a: 'Una instalación residencial estándar toma entre <strong>4 a 5 horas</strong>. Para proyectos comerciales o fincas grandes puede extenderse hasta 1 o 2 días.' },
  { q: '¿Cuánto cuesta una instalación séptica?', a: 'Los precios parten desde <strong>$2.500.000 COP</strong> para sistemas básicos residenciales. Ofrecemos visita técnica gratuita con cotización sin compromiso. Escríbanos por WhatsApp para más detalles.' },
  { q: '¿Cuántas personas puede soportar el sistema?', a: 'El sistema se diseña exactamente para la cantidad de usuarios requeridos: un tanque de <strong>1,000 L</strong> cubre hasta 5 personas y uno de <strong>2,000 L</strong> hasta 10 personas.' },
  { q: '¿Necesita licencia o permiso ambiental?', a: 'Para uso doméstico generalmente <strong>no se requiere licencia</strong>, pero el sistema debe cumplir la Norma RAS 2000. Nuestros sistemas están diseñados bajo estas normativas.' },
]

export default function ServiceInstalacion() {
  const scrollToCta = (e) => {
    e.preventDefault()
    document.getElementById('whatsapp-cta')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <>
      <SEO
        title="Instalación Profesional de Sistemas Sépticos | Sépticos Santa Bárbara"
        description="Diseño, excavación e instalación técnica de sistemas sépticos y FAFA para viviendas y fincas. Visita técnica gratuita. Didier Cuervo · 313 381 5853."
        canonical="https://septicossantabarbara.pages.dev/servicios/instalacion-profesional"
      />
      <ServiceSubNav />

      <section className="service-hero relative">
        <HeroBackground config={HERO_INSTALACION} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 relative z-10">
          <div className="max-w-3xl">
            <div className="hero-animate hero-delay-1 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sky-200 text-xs sm:text-sm font-semibold tracking-wider mb-6">
              <i className="fa-solid fa-screwdriver-wrench text-sky-400"></i> Servicio Especializado
            </div>
            <h1 className="hero-animate hero-delay-2 text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Instalación Profesional de<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-cyan-300">Sistemas Sépticos</span>
            </h1>
            <p className="hero-animate hero-delay-3 text-lg md:text-xl text-sky-100 font-light max-w-2xl mb-10 leading-relaxed">
              Diseñamos e instalamos sistemas sépticos seguros, eficientes y duraderos para viviendas, fincas y proyectos rurales.
            </p>
            <div className="hero-animate hero-delay-4 flex flex-col sm:flex-row gap-4">
              <a href="#whatsapp-cta" onClick={scrollToCta} className="bg-gradient-to-r from-sky-500 to-brand text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all font-bold text-base flex items-center justify-center gap-2 shadow-lg">
                <i className="fa-solid fa-paper-plane"></i> Solicitar Cotización
              </a>
              <a href="#galeria-servicio" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl transition font-bold text-base flex items-center justify-center gap-2">
                <i className="fa-solid fa-images text-sky-300"></i> Ver Galería
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="text-brand font-bold tracking-widest uppercase text-sm">Lo que debes saber</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-6">¿Qué es una Instalación Séptica?</h2>
              <div className="space-y-4 text-slate-600 font-light leading-relaxed">
                <p>Un <strong className="text-slate-800 font-semibold">sistema séptico</strong> es una solución descentralizada de tratamiento de aguas residuales, ideal para zonas rurales sin acceso a alcantarillado municipal.</p>
                <p><strong className="text-slate-800 font-semibold">¿Cómo funciona?</strong> Las aguas residuales fluyen hacia un tanque donde los sólidos se sedimentan y los líquidos son filtrados naturalmente a través de un campo de absorción o filtro anaerobio (FAFA).</p>
                <p><strong className="text-slate-800 font-semibold">¿Cuándo se necesita?</strong> Al construir una casa nueva, finca o negocio rural, o al reemplazar un sistema antiguo que falla.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-sky-100">
                <img
                  src="/assets/images/servicios/instalacion-profesional/instalacion-01.jpg"
                  alt="Sistema séptico en instalación"
                  className="w-full h-80 sm:h-96 object-cover"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/0369a1/ffffff?text=Sistema+Séptico' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent flex items-end p-6">
                  <p className="text-white font-bold">Pozo séptico en proceso de instalación</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-sky-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Servicio Completo" title="¿Qué incluye nuestro servicio?" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {INCLUYE.map((it, i) => (
              <Reveal key={it.title} delay={i * 80}>
                <div className="service-card text-center h-full">
                  <div className={`w-14 h-14 ${it.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-md`}>
                    <i className={`fa-solid ${it.icon}`}></i>
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">{it.title}</h3>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{it.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Metodología" title="Nuestro Proceso" />
          <Timeline steps={TIMELINE} />
        </div>
      </section>

      <section id="galeria-servicio" className="bg-sky-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Imágenes Reales" title="Galería de Trabajos" desc="Haz clic en cualquier imagen para verla en grande." />
          <div className="max-w-5xl mx-auto"><Gallery images={GALLERY_INSTALACION} mode="masonry" /></div>
        </div>
      </section>

      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="En Movimiento" title="Videos del Proceso" desc="Mira cómo trabajamos de la excavación a la entrega." dark />
          <div className="max-w-5xl mx-auto"><VideoGrid videos={VIDEOS_INSTALACION} /></div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Ventajas Comprobadas" title="Beneficios de una Instalación Profesional" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {BENEFICIOS.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="benefit-check">
                  <div className="w-9 h-9 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0"><i className="fa-solid fa-check text-emerald-600 text-sm"></i></div>
                  <div><h4 className="font-bold text-slate-800 text-sm">{b.title}</h4><p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{b.desc}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Resolvemos sus Dudas" title="Preguntas Frecuentes" />
          <Faq items={FAQ} />
        </div>
      </section>

      <section id="whatsapp-cta" className="bg-gradient-to-br from-brand-dark to-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-sky-300 text-3xl mx-auto mb-6"><i className="fa-solid fa-screwdriver-wrench"></i></div>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">¿Necesita instalar un sistema séptico?</h2>
            <p className="text-sky-100 font-light text-lg mb-8 leading-relaxed">Solicite una visita técnica gratuita. Comuníquese por WhatsApp o llámenos para recibir asesoría personalizada y cotización sin compromiso.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/573133815853?text=Hola%20Didier,%20necesito%20una%20instalación%20de%20sistema%20séptico.%20¿Podría%20darme%20información%20y%20una%20cotización?" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 px-8 rounded-2xl transition shadow-xl flex items-center justify-center gap-3 text-lg">
                <i className="fa-brands fa-whatsapp text-2xl"></i> Escribir por WhatsApp
              </a>
              <a href="tel:3133815853" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-4 px-8 rounded-2xl transition flex items-center justify-center gap-3 text-lg">
                <i className="fa-solid fa-phone"></i> 313 381 5853
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-sky-200">
              <span className="flex items-center gap-1"><i className="fa-solid fa-circle-check text-emerald-400"></i> Visita técnica gratuita</span>
              <span className="flex items-center gap-1"><i className="fa-solid fa-circle-check text-emerald-400"></i> Cotización sin compromiso</span>
              <span className="flex items-center gap-1"><i className="fa-solid fa-circle-check text-emerald-400"></i> Garantía en el trabajo</span>
            </div>
          </Reveal>
        </div>
      </section>

      <RelatedServices
        items={[
          { to: '/servicios/limpieza-mantenimiento', bg: 'bg-cyan-100', color: 'text-cyan-600', icon: 'fa-pump-soap', title: 'Limpieza & Mantenimiento', desc: 'Succión y lavado profesional de pozos sépticos.', cta: 'Ver servicio' },
          { to: '/servicios/tanques-almacenamiento', bg: 'bg-blue-100', color: 'text-blue-600', icon: 'fa-faucet-drip', title: 'Tanques de Almacenamiento', desc: 'Venta e instalación de tanques de 250 a 10,000 L.', cta: 'Ver catálogo' },
        ]}
      />

      <Footer />
      <WhatsAppFloat message="Hola Didier, me interesa el servicio de Instalación Profesional de Sépticos Santa Bárbara." />
    </>
  )
}
