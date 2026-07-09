import React, { useMemo, useState } from 'react'

const TANK_OPTIONS = [
  { value: 250, label: 'Tanque de 250 L — Pequeño / Reserva básica' },
  { value: 500, label: 'Tanque de 500 L — Casas pequeñas' },
  { value: 1000, label: 'Tanque de 1,000 L — Viviendas estándar' },
  { value: 2000, label: 'Tanque de 2,000 L — Fincas medianas' },
  { value: 5000, label: 'Tanque de 5,000 L — Gran capacidad / Comercial' },
  { value: 10000, label: 'Tanque de 10,000 L — Industrial / Agrícola' },
]

const JOB_OPTIONS = [
  { value: 'instalacion', label: 'Instalación Nueva de Pozo' },
  { value: 'mantenimiento', label: 'Mantenimiento y Limpieza Profesional' },
  { value: 'ambos', label: 'Instalación + Kit de Bacterias Digestivas' },
]

function septicResult(people, jobType) {
  let capacity, description
  if (people <= 5) { capacity = 1000; description = 'Pozo Séptico de 1,000L - Monobloque' }
  else if (people <= 10) { capacity = 2000; description = 'Pozo Séptico de 2,000L con FAFA' }
  else if (people <= 25) { capacity = 5000; description = 'Sistema Séptico Integrado 5,000L' }
  else { capacity = 10000; description = 'Sistemas Multicamara 10,000L' }

  let material = description
  if (jobType === 'mantenimiento') material = 'Servicio de Limpieza y Succión'
  else if (jobType === 'ambos') material = `${description} + Enzimas`

  return { capacity, material }
}

export default function Cotizador() {
  const [type, setType] = useState('septico')
  const [people, setPeople] = useState(6)
  const [jobType, setJobType] = useState('instalacion')
  const [tankCapacity, setTankCapacity] = useState(1000)
  const [tankInstall, setTankInstall] = useState('no')

  const result = useMemo(() => {
    if (type === 'septico') {
      const { capacity, material } = septicResult(people, jobType)
      return {
        label: 'Capacidad Séptica Recomendada',
        headline: `Para ${people} Personas`,
        capacityText: `${capacity.toLocaleString('es-CO')} Litros`,
        materialText: material,
      }
    }
    return {
      label: 'Tanque de Almacenamiento Elegido',
      headline: `Tanque de ${tankCapacity.toLocaleString('es-CO')} Litros`,
      capacityText: `${tankCapacity.toLocaleString('es-CO')} Litros`,
      materialText: tankInstall === 'si' ? 'Incluye Instalación Hidráulica Básica' : 'Solo Distribución y Suministro',
    }
  }, [type, people, jobType, tankCapacity, tankInstall])

  const sendQuote = () => {
    let msg
    if (type === 'septico') {
      const jobLabel = JOB_OPTIONS.find((j) => j.value === jobType)?.label || ''
      msg = `Hola Didier Cuervo (Sépticos Santa Bárbara). Me gustaría recibir una cotización de un pozo séptico.\n\n*Detalles:*\n- Personas: ${people}\n- Trabajo: ${jobLabel}\n- Capacidad estimada: ${result.capacityText}\n- Sistema propuesto: ${result.materialText}`
    } else {
      const inst = tankInstall === 'si' ? 'Suministro e Instalación' : 'Solo compra'
      msg = `Hola Didier Cuervo (Sépticos Santa Bárbara). Quiero cotizar un tanque de agua.\n\n*Detalles:*\n- Capacidad: ${tankCapacity} Litros\n- Modalidad: ${inst}`
    }
    window.open(`https://wa.me/573133815853?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const activeClass = 'py-2.5 px-4 rounded-xl font-semibold border-2 border-brand bg-brand text-white transition text-xs sm:text-sm flex items-center justify-center gap-2 shadow'
  const inactiveClass = 'py-2.5 px-4 rounded-xl font-semibold border-2 border-slate-200 bg-white hover:border-sky-300 text-slate-700 transition text-xs sm:text-sm flex items-center justify-center gap-2'

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-sky-100 w-full grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="md:col-span-7 space-y-5">
        <div>
          <label className="block text-slate-700 font-bold mb-2 text-sm"><i className="fa-solid fa-list-check text-brand mr-1"></i> Selecciona el Servicio:</label>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => setType('septico')} className={type === 'septico' ? activeClass : inactiveClass}>
              <i className="fa-solid fa-vial"></i> Pozo Séptico
            </button>
            <button onClick={() => setType('tanque')} className={type === 'tanque' ? activeClass : inactiveClass}>
              <i className="fa-solid fa-glass-water-droplet"></i> Tanques de Agua
            </button>
          </div>
        </div>

        {type === 'septico' ? (
          <div className="space-y-4">
            <div>
              <label className="block text-slate-700 font-bold mb-2 text-sm"><i className="fa-solid fa-person text-brand mr-1"></i> Número de Personas en la Vivienda:</label>
              <div className="flex items-center gap-4">
                <input
                  type="range" min="1" max="50" value={people}
                  onChange={(e) => setPeople(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-sky-200 rounded-lg appearance-none cursor-pointer accent-brand"
                />
                <span className="bg-sky-100 text-brand font-extrabold px-3 py-1 rounded-xl text-sm min-w-14 text-center">{people}</span>
              </div>
            </div>
            <div>
              <label className="block text-slate-700 font-bold mb-2 text-sm"><i className="fa-solid fa-gears text-brand mr-1"></i> Tipo de Trabajo Requerido:</label>
              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 text-slate-700 focus:border-brand focus:bg-white focus:outline-none transition font-semibold text-sm"
              >
                {JOB_OPTIONS.map((j) => <option key={j.value} value={j.value}>{j.label}</option>)}
              </select>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-slate-700 font-bold mb-2 text-sm"><i className="fa-solid fa-cubes-stacked text-brand mr-1"></i> Capacidad del Tanque:</label>
              <select
                value={tankCapacity}
                onChange={(e) => setTankCapacity(parseInt(e.target.value, 10))}
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 text-slate-700 focus:border-brand focus:bg-white focus:outline-none transition font-semibold text-sm"
              >
                {TANK_OPTIONS.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-slate-700 font-bold mb-2 text-sm"><i className="fa-solid fa-truck-ramp-box text-brand mr-1"></i> Incluir Instalación Hidráulica:</label>
              <div className="flex gap-4">
                <label className="inline-flex items-center">
                  <input type="radio" name="tank-install" checked={tankInstall === 'no'} onChange={() => setTankInstall('no')} className="form-radio text-brand" />
                  <span className="ml-2 text-sm font-medium text-slate-700">Solo Compra</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="tank-install" checked={tankInstall === 'si'} onChange={() => setTankInstall('si')} className="form-radio text-brand" />
                  <span className="ml-2 text-sm font-medium text-slate-700">Compra + Instalación</span>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="md:col-span-5 bg-gradient-to-br from-brand-dark to-slate-900 text-white p-6 rounded-2xl flex flex-col justify-between shadow-lg">
        <div className="space-y-4">
          <h3 className="text-sky-300 font-bold uppercase tracking-widest text-xs">Propuesta Recomendada</h3>
          <div className="border-b border-white/10 pb-4">
            <p className="text-sm text-slate-300">{result.label}</p>
            <p className="text-2xl sm:text-3xl font-black text-white mt-1">{result.headline}</p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs sm:text-sm"><span className="text-slate-300">Capacidad Estimada:</span><span className="font-bold text-white">{result.capacityText}</span></div>
            <div className="flex justify-between text-xs sm:text-sm"><span className="text-slate-300">Tipo de Sistema:</span><span className="font-bold text-white">{result.materialText}</span></div>
            <div className="flex justify-between text-xs sm:text-sm"><span className="text-slate-300">Durabilidad:</span><span className="font-bold text-sky-300">Excelente (+20 años)</span></div>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-xs text-slate-400 mb-3 italic">* Los precios finales dependen del terreno y la ubicación.</p>
          <button
            onClick={sendQuote}
            className="w-full bg-brand hover:bg-brand-light text-white py-3 px-4 rounded-xl transition font-black text-sm flex items-center justify-center gap-2 shadow-lg transform active:scale-95"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i> Cotizar por WhatsApp
          </button>
        </div>
      </div>
    </div>
  )
}
