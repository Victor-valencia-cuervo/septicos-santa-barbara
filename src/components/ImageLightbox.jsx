import React, { useEffect, useRef, useState } from 'react'

export default function ImageLightbox({ images, index, onClose }) {
  const [idx, setIdx] = useState(index)
  const [uiOn, setUiOn] = useState(true)
  const touchX = useRef(null)

  useEffect(() => setIdx(index), [index])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') navigate(-1)
      if (e.key === 'ArrowRight') navigate(1)
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx])

  const navigate = (dir) => setIdx((i) => (i + dir + images.length) % images.length)

  const img = images[idx]
  if (!img) return null

  return (
    <div className="ssb-lb ssb-lb--open" role="dialog" aria-modal="true" aria-label="Galería">
      <div className="ssb-lb__bg" onClick={onClose}></div>

      <div className={`ssb-lb__ui ${!uiOn ? 'ssb-lb__ui--hidden' : ''}`} onMouseMove={() => setUiOn(true)}>
        <button className="ssb-lb__close" onClick={onClose} aria-label="Cerrar"><i className="fa-solid fa-xmark"></i></button>
        <div className="ssb-lb__counter">{idx + 1} / {images.length}</div>
        {images.length > 1 && (
          <>
            <button className="ssb-lb__arrow ssb-lb__arrow--prev" onClick={() => navigate(-1)} aria-label="Anterior"><i className="fa-solid fa-chevron-left"></i></button>
            <button className="ssb-lb__arrow ssb-lb__arrow--next" onClick={() => navigate(1)} aria-label="Siguiente"><i className="fa-solid fa-chevron-right"></i></button>
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
          if (Math.abs(diff) > 50) navigate(diff > 0 ? 1 : -1)
          touchX.current = null
        }}
      >
        <img
          src={img.src}
          alt={img.title || ''}
          className="ssb-lb__img"
          onError={(e) => { e.currentTarget.src = 'https://placehold.co/900x600/0284c7/ffffff?text=SSB' }}
        />
      </div>

      <div className={`ssb-lb__caption ${!uiOn ? 'ssb-lb__caption--hidden' : ''}`}>
        <h3 className="ssb-lb__caption-title">{img.title}</h3>
        <p className="ssb-lb__caption-desc">{img.desc}</p>
      </div>
    </div>
  )
}
