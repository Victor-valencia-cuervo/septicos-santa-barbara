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
import { GALLERY_LIMPIEZA } from '../data/galleryData.js'
import { VIDEOS_LIMPIEZA } from '../data/videosData.js'
import { HERO_LIMPIEZA } from '../data/heroConfig.js'

const SENALES = [
  { icon: 'fa-wind', bg: 'bg-red-100', color: 'text-red-500', card: 'bg-red-50 border-red-100', title: 'Malos Olores', desc: 'Si percibe olores nauseabundos dentro o fuera de la vivienda, el pozo está saturado.' },
  { icon: 'fa-arrow-up-from-ground-water', bg: 'bg-amber-100', color: 'text-amber-600', card: 'bg-amber-50 border-amber-100', title: 'Reboses', desc: 'Las aguas negras que asoman a la superficie indican el sistema completamente colmatado.' },
  { icon: 'fa-hourglass-half', bg: 'bg-orange-100', color: 'text-orange-600', card: 'bg-orange-50 border-orange-100', title: 'Drenajes Lentos', desc: 'Si lavabos y duchas desaguan lentamente, el sistema está perdiendo capacidad de absorción.' },
  { icon: 'fa-calendar-xmark', bg: 'bg-slate-200', color: 'text-slate-600', card: '', title: 'Mucho Tiempo sin Mantenimiento', desc: 'Más de 2-3 años sin revisión: es el momento de hacer una limpieza preventiva.' },
  { icon: 'fa-water', bg: 'bg-blue-100', color: 'text-blue-600', card: 'bg-blue-50 border-blue-100', title: 'Filtraciones', desc: 'Zonas húmedas o encharcadas cerca del sistema séptico pueden indicar fugas urgentes.' },
  { icon: 'fa-leaf', bg: 'bg-emerald-100', color: 'text-emerald-600', card: 'bg-emerald-50 border-emerald-100', title: 'Vegetación Excesiva', desc: 'Pasto inusualmente verde sobre el tanque puede indicar filtraciones de aguas residuales.' },
]

const INCLUYE = [
  { title: 'Succión de lodos', desc: 'Extracción total de lodos acumulados con equipo de vacío de alta potencia.' },
  { title: 'Lavado a presión', desc: 'Hidrolavado interno de paredes y fondo del pozo para eliminar incrustaciones.' },
  { title: 'Limpieza de tuberías', desc: 'Desobstrucción y lavado de tuberías de entrada y salida del sistema.' },
  { title: 'Aplicación de bacterias', desc: 'Inoculación de bacterias digestivas para reactivar el proceso biológico natural.' },
  { title: 'Revisión del sistema', desc: 'Inspección completa del estado de tuberías, tapas y estructura del pozo.' },
  { title: 'Disposición de residuos', desc: 'Los lodos se trasladan a sitios de disposición final autorizados ambientalmente.' },
]

const TIMELINE = [
  { icon: 'fa-eye', title: 'Inspección', desc: 'Evaluamos el estado del pozo, niveles de lodos y el acceso para el equipo de succión.' },
  { icon: 'fa-faucet-drip', iconColor: 'text-cyan-600', title: 'Succión', desc: 'Utilizamos un sistema de mangueras que aprovecha el principio de sifonado y la fuerza de gravedad para extraer el 100% de los lodos y líquidos, sin necesidad de equipos de bombeo mecánico.' },
  { icon: 'fa-shower', iconColor: 'text-blue-600', title: 'Lavado', desc: 'Lavado intensivo de paredes internas, fondo y tuberías para remover incrustaciones.' },
  { icon: 'fa-bacteria', iconColor: 'text-emerald-600', title: 'Aplicación de Enzimas', desc: 'Aplicamos bacterias y enzimas digestivas que reactivan la degradación biológica del sistema.' },
  { icon: 'fa-circle-check', title: 'Revisión Final', desc: 'Inspección final y reporte al propietario con recomendaciones de mantenimiento preventivo.', final: true },
]

const FAQ = [
  { q: '¿Cada cuánto tiempo se debe limpiar el pozo?', a: 'Para viviendas familiares se recomienda limpieza <strong>cada 2 a 3 años</strong>. Si hay uso intensivo o muchos usuarios, el intervalo debe reducirse a 6-12 meses.' },
  { q: '¿Cuánto tiempo demora una limpieza?', a: 'Una limpieza residencial estándar toma entre <strong>2 y 4 horas</strong>. Para sistemas de gran capacidad puede extenderse hasta medio día de trabajo.' },
  { q: '¿El proceso genera malos olores?', a: 'Es normal que existan <strong>olores leves y momentáneos</strong> durante la apertura del tanque. Nuestro equipo trabaja con eficiencia para minimizar el tiempo de exposición. Luego de cerrar el sistema, los olores desaparecen por completo.' },
]

export default function ServiceLimpieza() {
  return (
    <>
      <SEO
        title="Limpieza y Mantenimiento de Pozos Sépticos | Sépticos Santa Bárbara"
        description="Succión de lodos, hidrolavado y aplicación de bacterias digestivas para pozos sépticos. Atención el mismo día. Didier Cuervo · 313 381 5853."
        canonical="https://septicossantabarbara.pages.dev/servicios/limpieza-mantenimiento"
      />
      <ServiceSubNav />

      {/* El hero de esta página NUNCA se censura, aunque el resto del contenido sí */}
      <section className="service-hero relative">
        <HeroBackground config={HERO_LIMPIEZA} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 relative z-10">
          <div className="max-w-3xl">
            <div className="hero-animate hero-delay-1 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sky-200 text-xs sm:text-sm font-semibold tracking-wider mb-6">
              <i className="fa-solid fa-pump-soap text-sky-400"></i> Servicio Especializado
            </div>
            <h1 className="hero-animate hero-delay-2 text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Limpieza Profesional de<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-cyan-300">Pozos Sépticos</span>
            </h1>
            <p className="hero-animate hero-delay-3 text-lg md:text-xl text-sky-100 font-light max-w-2xl mb-10 leading-relaxed">
              Eliminamos lodos, grasas y residuos para mantener su sistema funcionando perfectamente y prolongar su vida útil.
            </p>
            <div className="hero-animate hero-delay-4 flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/573133815853?text=Hola%20Didier,%20necesito%20una%20limpieza%20de%20pozo%20séptico.%20¿Puede%20ayudarme?" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl transition-all font-bold text-base flex items-center justify-center gap-2 shadow-lg">
                <i className="fa-brands fa-whatsapp text-xl"></i> Solicitar Limpieza
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
          <SectionHeader eyebrow="Señales de Alerta" title="¿Cuándo necesita una limpieza?" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {SENALES.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className={`service-card text-center h-full ${s.card}`}>
                  <div className={`w-14 h-14 ${s.bg} rounded-2xl flex items-center justify-center ${s.color} text-2xl mx-auto mb-4 shadow-md`}>
                    <i className={`fa-solid ${s.icon}`}></i>
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">{s.title}</h3>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Servicio Completo" title="¿Qué incluye nuestro servicio?" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {INCLUYE.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="benefit-check">
                  <div className="w-9 h-9 bg-brand/10 rounded-xl flex items-center justify-center flex-shrink-0"><i className="fa-solid fa-check text-brand text-sm"></i></div>
                  <div><h4 className="font-bold text-slate-800 text-sm">{b.title}</h4><p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{b.desc}</p></div>
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

      {/* Galería censurable: todas las imágenes de mantenimiento se difuminan según el aviso de la home */}
      <section id="galeria-servicio" className="bg-sky-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Imágenes Reales" title="Galería de Trabajos" desc="Haz clic en cualquier imagen para verla en grande con el lightbox." />
          <div className="max-w-5xl mx-auto"><Gallery images={GALLERY_LIMPIEZA} mode="masonry" /></div>
        </div>
      </section>

      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="En Movimiento" title="Videos del Proceso" desc="Mira cómo realizamos la limpieza completa de un pozo séptico." dark />
          <div className="max-w-5xl mx-auto"><VideoGrid videos={VIDEOS_LIMPIEZA} /></div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Consejos del Experto" title="Recomendaciones de Mantenimiento" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Reveal>
              <div className="recommendation-card">
                <div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center text-brand flex-shrink-0"><i className="fa-solid fa-calendar-days"></i></div><h3 className="font-bold text-slate-800">¿Cada cuánto hacer mantenimiento?</h3></div>
                <ul className="space-y-2 text-slate-600 font-light text-sm">
                  <li className="flex items-start gap-2"><i className="fa-solid fa-circle text-brand text-[6px] mt-2 flex-shrink-0"></i><span><strong>Cada 2 años:</strong> Viviendas con uso normal (3-5 personas).</span></li>
                  <li className="flex items-start gap-2"><i className="fa-solid fa-circle text-brand text-[6px] mt-2 flex-shrink-0"></i><span><strong>Cada año:</strong> Hogares con más de 6 personas.</span></li>
                  <li className="flex items-start gap-2"><i className="fa-solid fa-circle text-brand text-[6px] mt-2 flex-shrink-0"></i><span><strong>Cada 6 meses:</strong> Restaurantes y comercios.</span></li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="recommendation-card">
                <div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center text-red-500 flex-shrink-0"><i className="fa-solid fa-ban"></i></div><h3 className="font-bold text-slate-800">Qué NO arrojar al sistema</h3></div>
                <ul className="space-y-2 text-slate-600 font-light text-sm">
                  <li className="flex items-start gap-2"><i className="fa-solid fa-xmark text-red-400 text-xs mt-1 flex-shrink-0"></i><span>Toallas húmedas, pañales y elementos sólidos.</span></li>
                  <li className="flex items-start gap-2"><i className="fa-solid fa-xmark text-red-400 text-xs mt-1 flex-shrink-0"></i><span>Aceites, grasas de cocina y pinturas.</span></li>
                  <li className="flex items-start gap-2"><i className="fa-solid fa-xmark text-red-400 text-xs mt-1 flex-shrink-0"></i><span>Medicamentos y productos químicos.</span></li>
                  <li className="flex items-start gap-2"><i className="fa-solid fa-xmark text-red-400 text-xs mt-1 flex-shrink-0"></i><span>Cloro en exceso (mata las bacterias benéficas).</span></li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="recommendation-card">
                <div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0"><i className="fa-solid fa-leaf"></i></div><h3 className="font-bold text-slate-800">Cómo prolongar la vida útil</h3></div>
                <ul className="space-y-2 text-slate-600 font-light text-sm">
                  <li className="flex items-start gap-2"><i className="fa-solid fa-circle-check text-emerald-500 text-xs mt-1 flex-shrink-0"></i><span>Use jabones y detergentes biodegradables.</span></li>
                  <li className="flex items-start gap-2"><i className="fa-solid fa-circle-check text-emerald-500 text-xs mt-1 flex-shrink-0"></i><span>Aplique bacterias activadoras cada 3 meses.</span></li>
                  <li className="flex items-start gap-2"><i className="fa-solid fa-circle-check text-emerald-500 text-xs mt-1 flex-shrink-0"></i><span>No estacione vehículos sobre el área del tanque.</span></li>
                  <li className="flex items-start gap-2"><i className="fa-solid fa-circle-check text-emerald-500 text-xs mt-1 flex-shrink-0"></i><span>Evite el paso de animales grandes como caballos o vacas.</span></li>
                </ul>
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
            <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-sky-300 text-3xl mx-auto mb-6"><i className="fa-solid fa-pump-soap"></i></div>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">¿Necesita mantenimiento urgente?</h2>
            <p className="text-sky-100 font-light text-lg mb-8 leading-relaxed">No espere a que el problema se agrave. Contáctenos ahora por WhatsApp y programamos la limpieza de su pozo séptico a la brevedad.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/573133815853?text=Hola%20Didier,%20necesito%20una%20limpieza%20urgente%20de%20mi%20pozo%20séptico.%20¿Puede%20ayudarme?" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 px-8 rounded-2xl transition shadow-xl flex items-center justify-center gap-3 text-lg">
                <i className="fa-brands fa-whatsapp text-2xl"></i> Solicitar Mantenimiento
              </a>
              <a href="tel:3133815853" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-4 px-8 rounded-2xl transition flex items-center justify-center gap-3 text-lg">
                <i className="fa-solid fa-phone"></i> 313 381 5853
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-sky-200">
              <span className="flex items-center gap-1"><i className="fa-solid fa-circle-check text-emerald-400"></i> Atención el mismo día</span>
              <span className="flex items-center gap-1"><i className="fa-solid fa-circle-check text-emerald-400"></i> Equipo especializado</span>
              <span className="flex items-center gap-1"><i className="fa-solid fa-circle-check text-emerald-400"></i> Trabajo garantizado</span>
            </div>
          </Reveal>
        </div>
      </section>

      <RelatedServices
        items={[
          { to: '/servicios/instalacion-profesional', bg: 'bg-sky-100', color: 'text-brand', icon: 'fa-screwdriver-wrench', title: 'Instalación Profesional', desc: 'Sistemas sépticos completos con diseño técnico garantizado.', cta: 'Ver servicio' },
          { to: '/servicios/tanques-almacenamiento', bg: 'bg-blue-100', color: 'text-blue-600', icon: 'fa-faucet-drip', title: 'Tanques de Almacenamiento', desc: 'Venta e instalación de tanques de 250 a 10,000 L.', cta: 'Ver catálogo' },
        ]}
      />

      <Footer />
      <WhatsAppFloat message="Hola Didier, me interesa el servicio de Limpieza y Mantenimiento de Sépticos Santa Bárbara." />
    </>
  )
}
