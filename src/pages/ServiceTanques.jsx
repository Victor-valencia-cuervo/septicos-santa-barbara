import React, { useState } from 'react'
import SEO from '../components/SEO.jsx'
import ServiceSubNav from '../components/ServiceSubNav.jsx'
import HeroBackground from '../components/HeroBackground.jsx'
import Reveal from '../hooks/useReveal.jsx'
import VideoGrid from '../components/VideoGrid.jsx'
import Faq from '../components/Faq.jsx'
import Footer from '../components/Footer.jsx'
import WhatsAppFloat from '../components/WhatsAppFloat.jsx'
import TankCard from '../components/TankCard.jsx'
import TankModal from '../components/TankModal.jsx'
import { RelatedServices, SectionHeader } from '../components/ServicePagePieces.jsx'
import { VIDEOS_TANQUES } from '../data/videosData.js'
import { HERO_TANQUES } from '../data/heroConfig.js'
import { TANKS } from '../data/tanksData.js'

const FAQ = [
  { q: '¿Cuánto tiempo dura un tanque?', a: 'Los tanques de polietileno HDPE tienen una vida útil estimada <strong>superior a 20 años</strong> gracias a su resistencia UV, anticorrosiva y a los cambios de temperatura.' },
  { q: '¿Qué capacidad de tanque necesito?', a: 'La regla general es calcular <strong>150 litros por persona por día</strong>. Para 4 personas se recomienda un tanque de 500–1,000 L. Para finca con riego, mínimo 2,000–5,000 L. Consúltenos y le asesoramos.' },
  { q: '¿El tanque puede instalarse elevado?', a: 'Sí, todos nuestros tanques pueden instalarse <strong>sobre estructuras elevadas (torres)</strong> para aprovechar la gravedad en la distribución. También instalamos la estructura metálica y conexiones hidráulicas.' },
  { q: '¿Los tanques tienen garantía?', a: 'Sí. Todos los tanques cuentan con <strong>garantía de fabricante</strong> contra defectos de material y fabricación. La instalación hidráulica realizada por nuestro equipo también tiene garantía en mano de obra.' },
]

export default function ServiceTanques() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <SEO
        title="Tanques de Almacenamiento de Agua | Sépticos Santa Bárbara"
        description="Venta e instalación de tanques de agua certificados de 250 a 10,000 litros para hogares, fincas y empresas en Colombia. Polietileno HDPE con garantía. Didier Cuervo · 313 381 5853."
        canonical="https://septicossantabarbara.pages.dev/servicios/tanques-almacenamiento"
      />
      <ServiceSubNav />

      <section className="service-hero relative">
        <HeroBackground config={HERO_TANQUES} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 relative z-10">
          <div className="max-w-3xl">
            <div className="hero-animate hero-delay-1 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sky-200 text-xs sm:text-sm font-semibold tracking-wider mb-6">
              <i className="fa-solid fa-faucet-drip text-sky-400"></i> Venta e Instalación
            </div>
            <h1 className="hero-animate hero-delay-2 text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Tanques de<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-cyan-300">Almacenamiento de Agua</span>
            </h1>
            <p className="hero-animate hero-delay-3 text-lg md:text-xl text-sky-100 font-light max-w-2xl mb-10 leading-relaxed">
              Venta e instalación de tanques certificados para hogares, fincas y empresas. Desde 250 hasta 10,000 litros con garantía de fábrica.
            </p>
            <div className="hero-animate hero-delay-4 flex flex-col sm:flex-row gap-4">
              <a href="#catalogo" className="bg-gradient-to-r from-sky-500 to-brand text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all font-bold text-base flex items-center justify-center gap-2 shadow-lg">
                <i className="fa-solid fa-cubes-stacked"></i> Ver Catálogo
              </a>
              <a href="https://wa.me/573133815853?text=Hola%20Didier,%20me%20interesa%20cotizar%20un%20tanque%20de%20almacenamiento%20de%20agua." target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl transition font-bold text-base flex items-center justify-center gap-2">
                <i className="fa-brands fa-whatsapp text-xl"></i> Cotizar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="catalogo" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Catálogo Completo" title="Elige la Capacidad Ideal" desc="Haz clic en cualquier tanque para ver todos los detalles." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {TANKS.map((tank, i) => (
              <TankCard key={tank.id} tank={tank} delay={(i % 3) * 80} onOpen={setSelected} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="En Movimiento" title="Videos del Proceso" desc="Instalación y distribución de tanques en campo." dark />
          <div className="max-w-5xl mx-auto"><VideoGrid videos={VIDEOS_TANQUES} /></div>
        </div>
      </section>

      <section className="bg-sky-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="text-brand font-bold tracking-widest uppercase text-sm">Calidad Garantizada</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-6">¿Por qué elegir nuestros tanques?</h2>
              <div className="space-y-4 text-slate-600 font-light leading-relaxed">
                <p>Todos nuestros tanques son fabricados en <strong className="text-slate-800 font-semibold">polietileno HDPE de alta densidad</strong>, con protección UV y tratamiento anticorrosivo.</p>
                <p>Ofrecemos <strong className="text-slate-800 font-semibold">instalación completa</strong>: conexiones hidráulicas, estructuras elevadas y todo lo necesario para dejar su sistema funcionando.</p>
                <p>Contamos con <strong className="text-slate-800 font-semibold">6 capacidades disponibles</strong> para cubrir desde el hogar más pequeño hasta proyectos comerciales e industriales.</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/assets/images/servicios/tanques-almacenamiento/tanque-01.jpg"
                  alt="Tanque de almacenamiento"
                  className="w-full h-80 sm:h-96 object-cover"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/0284c7/ffffff?text=Tanques+de+Agua' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent flex items-end p-6">
                  <p className="text-white font-bold">Distribución de tanques certificados — Sépticos Santa Bárbara</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="bg-sky-50 border border-sky-100 rounded-2xl p-3 text-center"><span className="text-2xl font-black text-brand block">6</span><span className="text-slate-500 text-xs">Capacidades</span></div>
                <div className="bg-sky-50 border border-sky-100 rounded-2xl p-3 text-center"><span className="text-2xl font-black text-brand block">+20</span><span className="text-slate-500 text-xs">Años duración</span></div>
                <div className="bg-sky-50 border border-sky-100 rounded-2xl p-3 text-center"><span className="text-2xl font-black text-brand block">100%</span><span className="text-slate-500 text-xs">Certificados</span></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-sky-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Resolvemos sus Dudas" title="Preguntas Frecuentes" />
          <Faq items={FAQ} />
        </div>
      </section>

      <section className="bg-gradient-to-br from-brand-dark to-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-sky-300 text-3xl mx-auto mb-6"><i className="fa-solid fa-faucet-drip"></i></div>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">¿Listo para cotizar su tanque?</h2>
            <p className="text-sky-100 font-light text-lg mb-8 leading-relaxed">Cuéntenos su necesidad y capacidad requerida. Le enviamos la cotización por WhatsApp de manera inmediata.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/573133815853?text=Hola%20Didier,%20quiero%20cotizar%20un%20tanque%20de%20almacenamiento%20de%20agua.%20¿Puede%20ayudarme?" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 px-8 rounded-2xl transition shadow-xl flex items-center justify-center gap-3 text-lg">
                <i className="fa-brands fa-whatsapp text-2xl"></i> Cotizar por WhatsApp
              </a>
              <a href="tel:3133815853" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-4 px-8 rounded-2xl transition flex items-center justify-center gap-3 text-lg">
                <i className="fa-solid fa-phone"></i> 313 381 5853
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-sky-200">
              <span className="flex items-center gap-1"><i className="fa-solid fa-circle-check text-emerald-400"></i> Entrega inmediata</span>
              <span className="flex items-center gap-1"><i className="fa-solid fa-circle-check text-emerald-400"></i> Instalación opcional</span>
              <span className="flex items-center gap-1"><i className="fa-solid fa-circle-check text-emerald-400"></i> Garantía de fábrica</span>
            </div>
          </Reveal>
        </div>
      </section>

      <RelatedServices
        items={[
          { to: '/servicios/instalacion-profesional', bg: 'bg-sky-100', color: 'text-brand', icon: 'fa-screwdriver-wrench', title: 'Instalación Profesional', desc: 'Sistemas sépticos completos con garantía técnica.', cta: 'Ver servicio' },
          { to: '/servicios/limpieza-mantenimiento', bg: 'bg-cyan-100', color: 'text-cyan-600', icon: 'fa-pump-soap', title: 'Limpieza & Mantenimiento', desc: 'Succión y lavado profesional de pozos sépticos.', cta: 'Ver servicio' },
        ]}
      />

      <Footer />
      <WhatsAppFloat message="Hola Didier, me interesa cotizar un tanque de almacenamiento de agua." />
      <TankModal tank={selected} onClose={() => setSelected(null)} />
    </>
  )
}
