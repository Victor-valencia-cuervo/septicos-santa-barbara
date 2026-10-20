import React, { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../hooks/useReveal.jsx'
import CensorWrapper from './CensorWrapper.jsx'
import ImageLightbox from './ImageLightbox.jsx'
import ImageWithSkeleton from './SkeletonMedia.jsx'
import { useCensorship } from '../context/CensorshipContext.jsx'

const FILTERS = [
  { key: 'todo', label: 'Todo' },
  { key: 'instalacion', label: 'Instalaciones' },
  { key: 'mantenimiento', label: 'Mantenimiento' },
  { key: 'tanques', label: 'Tanques de Agua' },
]

/**
 * <Gallery images={[...]} mode="grid|masonry" filters batchSize />
 *  - images: [{src,title,desc,category?,sensitive?}]
 *  - filters: botones de filtro por categoría (home)
 *  - batchSize: muestra "Ver más" tras N elementos
 * Cada imagen muestra un skeleton animado hasta que termina de cargar.
 */
export default function Gallery({ images, mode = 'grid', filters = false, batchSize = null }) {
  const [activeFilter, setActiveFilter] = useState('todo')
  const [showAll, setShowAll] = useState(false)
  const [lightbox, setLightbox] = useState(null)
  const { isCensored } = useCensorship()

  const filtered = useMemo(() => (!filters || activeFilter === 'todo' ? images : images.filter((i) => i.category === activeFilter)), [images, filters, activeFilter])
  const visible = batchSize && !showAll ? filtered.slice(0, batchSize) : filtered
  const hasMore = batchSize && filtered.length > batchSize

  const open = (img, i) => {
    if (img.sensitive && isCensored) return
    setLightbox({ list: filtered, index: i })
  }

  return (
    <div>
      {filters && (
        <div className="flex flex-wrap justify-center gap-2 mb-8" role="tablist" aria-label="Filtrar galería">
          {FILTERS.map((f) => {
            const active = activeFilter === f.key
            return (
              <button
                key={f.key}
                role="tab"
                aria-selected={active}
                onClick={() => { setActiveFilter(f.key); setShowAll(false) }}
                className={`ssb-filter-btn ${active ? 'ssb-filter--active' : ''}`}
              >
                {active && <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500 to-brand shadow-[0_6px_16px_-4px_rgba(2,132,199,.55)]" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
                <span className="relative">{f.label}</span>
              </button>
            )
          })}
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="text-center text-[var(--ink-3)] py-8 text-sm">Sin imágenes en esta categoría.</p>
      ) : (
        <motion.div key={activeFilter} className={mode === 'masonry' ? 'ssb-masonry' : 'ssb-grid'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
          {visible.map((img, i) => (
            <Reveal key={img.src + i} delay={(i % 4) * 70} className={mode === 'masonry' ? 'ssb-masonry__item' : ''}>
              <CensorWrapper sensitive={img.sensitive} className="ssb-gallery__card group">
                <div role="button" tabIndex={0} aria-label={`Ver ${img.title}`} onClick={() => open(img, i)} onKeyDown={(e) => e.key === 'Enter' && open(img, i)}>
                  <ImageWithSkeleton src={img.src} alt={img.title} />
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
        </motion.div>
      )}

      {hasMore && (
        <div className="flex justify-center mt-10">
          <button onClick={() => setShowAll((v) => !v)} className="btn btn--outline">
            <span>{showAll ? 'Ocultar proyectos' : `Ver más proyectos (${filtered.length - batchSize})`}</span>
            <i className={`fa-solid ${showAll ? 'fa-chevron-up' : 'fa-chevron-down'} text-xs`}></i>
          </button>
        </div>
      )}

      <AnimatePresence>
        {lightbox && <ImageLightbox key="lb" images={lightbox.list} index={lightbox.index} onClose={() => setLightbox(null)} />}
      </AnimatePresence>
    </div>
  )
}
