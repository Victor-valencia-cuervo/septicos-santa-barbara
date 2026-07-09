import React, { useMemo, useState } from 'react'
import Reveal from '../hooks/useReveal.jsx'
import CensorWrapper from './CensorWrapper.jsx'
import ImageLightbox from './ImageLightbox.jsx'
import { useCensorship } from '../context/CensorshipContext.jsx'

const FILTERS = [
  { key: 'todo', label: 'Todo' },
  { key: 'instalacion', label: 'Instalaciones' },
  { key: 'mantenimiento', label: 'Mantenimiento' },
  { key: 'tanques', label: 'Tanques de Agua' },
]

/**
 * <Gallery images={[...]} mode="grid|masonry" filters batchSize root />
 *  - images: [{src,title,desc,category?,sensitive?}]
 *  - filters: true para mostrar los botones de filtro por categoría (home)
 *  - batchSize: si se define, muestra un botón "Ver más" tras N elementos
 */
export default function Gallery({ images, mode = 'grid', filters = false, batchSize = null, root = null }) {
  const [activeFilter, setActiveFilter] = useState('todo')
  const [showAll, setShowAll] = useState(false)
  const [lightbox, setLightbox] = useState(null) // { list, index }
  const { isCensored } = useCensorship()

  const filtered = useMemo(() => {
    if (!filters || activeFilter === 'todo') return images
    return images.filter((img) => img.category === activeFilter)
  }, [images, filters, activeFilter])

  const visible = batchSize && !showAll ? filtered.slice(0, batchSize) : filtered
  const hasMore = batchSize && filtered.length > batchSize

  const openLightbox = (img, i) => {
    if (img.sensitive && isCensored) return // el overlay maneja su propio click
    setLightbox({ list: filtered, index: i })
  }

  return (
    <div>
      {filters && (
        <div className="flex flex-wrap justify-center gap-2 mb-5">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => { setActiveFilter(f.key); setShowAll(false) }}
              className={`ssb-filter-btn ${activeFilter === f.key ? 'ssb-filter--active' : 'ssb-filter--inactive'}`}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="ssb-gallery__empty text-center text-slate-400 py-8">Sin imágenes en esta categoría.</p>
      ) : (
        <div className={mode === 'masonry' ? 'ssb-masonry' : 'ssb-grid'}>
          {visible.map((img, i) => (
            <Reveal key={img.src + i} delay={(i % 4) * 70} className={mode === 'masonry' ? 'ssb-masonry__item' : ''} root={root}>
              <CensorWrapper sensitive={img.sensitive} className="ssb-gallery__card group" >
                <div
                  role="button"
                  tabIndex={0}
                  aria-label={`Ver ${img.title}`}
                  onClick={() => openLightbox(img, i)}
                  onKeyDown={(e) => { if (e.key === 'Enter') openLightbox(img, i) }}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    loading="lazy"
                    className="ssb-gallery__img"
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/0284c7/ffffff?text=SSB' }}
                  />
                  <div className="ssb-gallery__overlay">
                    <div>
                      <p className="ssb-gallery__item-title">{img.title}</p>
                      <p className="ssb-gallery__item-desc">{img.desc}</p>
                    </div>
                    <div className="ssb-gallery__zoom"><i className="fa-solid fa-magnifying-glass-plus"></i></div>
                  </div>
                </div>
              </CensorWrapper>
            </Reveal>
          ))}
        </div>
      )}

      {hasMore && (
        <div className="flex flex-col items-center mt-6 pb-2">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="group flex items-center gap-3 bg-white border-2 border-brand/60 text-brand px-8 py-3.5 rounded-full font-bold text-sm hover:bg-brand hover:text-white hover:border-brand transition-all duration-300 shadow-sm"
          >
            <span>{showAll ? 'Ocultar proyectos' : 'Ver más proyectos'}</span>
            <i className={`fa-solid ${showAll ? 'fa-chevron-up' : 'fa-chevron-down'} group-hover:translate-y-0.5 transition-transform duration-200`}></i>
          </button>
        </div>
      )}

      {lightbox && (
        <ImageLightbox images={lightbox.list} index={lightbox.index} onClose={() => setLightbox(null)} />
      )}
    </div>
  )
}
