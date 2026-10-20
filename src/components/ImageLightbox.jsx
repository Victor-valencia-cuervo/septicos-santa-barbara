import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Skeleton from 'react-loading-skeleton'

export default function ImageLightbox({ images, index, onClose }) {
  const [idx, setIdx] = useState(index)
  const [dir, setDir] = useState(0)
  const [uiOn, setUiOn] = useState(true)
  const [loaded, setLoaded] = useState(false)
  const touchX = useRef(null)

  const go = (d) => { setDir(d); setLoaded(false); setIdx((i) => (i + d + images.length) % images.length) }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // precarga la siguiente y la anterior para que el cambio sea instantáneo
  useEffect(() => {
    ;[1, -1].forEach((d) => { const im = new Image(); im.src = images[(idx + d + images.length) % images.length].src })
  }, [idx, images])

  const img = images[idx]
  if (!img) return null

  return (
    <motion.div className="ssb-lb" role="dialog" aria-modal="true" aria-label="Galería" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <div className="ssb-lb__bg" onClick={onClose}></div>

      <div className={uiOn ? '' : 'ssb-lb__ui--hidden'} style={{ transition: 'opacity .3s' }} onMouseMove={() => setUiOn(true)}>
        <button className="ssb-lb__close" onClick={onClose} aria-label="Cerrar"><i className="fa-solid fa-xmark"></i></button>
        <div className="ssb-lb__counter">{idx + 1} / {images.length}</div>
        {images.length > 1 && (
          <>
            <button className="ssb-lb__arrow ssb-lb__arrow--prev" onClick={() => go(-1)} aria-label="Anterior"><i className="fa-solid fa-chevron-left"></i></button>
            <button className="ssb-lb__arrow ssb-lb__arrow--next" onClick={() => go(1)} aria-label="Siguiente"><i className="fa-solid fa-chevron-right"></i></button>
          </>
        )}
      </div>

      <div
        className="ssb-lb__img-wrap"
        onClick={() => setUiOn((v) => !v)}
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return
          const diff = touchX.current - e.changedTouches[0].clientX
          if (Math.abs(diff) > 50) go(diff > 0 ? 1 : -1)
          touchX.current = null
        }}
      >
        {!loaded && (
          <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden pointer-events-none">
            <Skeleton height="100%" containerClassName="block h-full" baseColor="#16253f" highlightColor="#27406b" />
          </div>
        )}
        <AnimatePresence mode="popLayout" initial={false} custom={dir}>
          <motion.img
            key={img.src}
            src={img.src}
            alt={img.title || ''}
            className="ssb-lb__img"
            custom={dir}
            initial={{ opacity: 0, x: dir * 50, scale: 0.98 }}
            animate={{ opacity: loaded ? 1 : 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: dir * -50 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            onLoad={() => setLoaded(true)}
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/900x600/0284c7/ffffff?text=SSB'; setLoaded(true) }}
          />
        </AnimatePresence>
      </div>

      <div className={`ssb-lb__caption ${!uiOn ? 'ssb-lb__caption--hidden' : ''}`}>
        <h3 className="ssb-lb__caption-title">{img.title}</h3>
        <p className="ssb-lb__caption-desc">{img.desc}</p>
      </div>
    </motion.div>
  )
}
