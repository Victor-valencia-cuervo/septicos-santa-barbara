import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Skeleton from 'react-loading-skeleton'
import Reveal from '../hooks/useReveal.jsx'
import ImageWithSkeleton from './SkeletonMedia.jsx'
import CensorWrapper from './CensorWrapper.jsx'
import { useCensorship } from '../context/CensorshipContext.jsx'

/**
 * Tarjeta de video:
 *  · Muestra el póster (con skeleton) de inmediato.
 *  · El video solo se descarga cuando la tarjeta entra en pantalla (lazy).
 *  · Mientras el video carga o se detiene a "bufferizar" aparece el shimmer animado.
 *  · Los videos portrait usan un fondo difuminado en vez de recortarse.
 */
function VideoCard({ v, i, onPlay, wide }) {
  const { isCensored } = useCensorship()
  const blocked = v.sensitive && isCensored
  const cardRef = useRef(null)
  const videoRef = useRef(null)
  const [near, setNear] = useState(false)      // ya cerca de la pantalla → empieza a cargar
  const [playing, setPlaying] = useState(false)
  const [buffering, setBuffering] = useState(false)
  const land = wide // solo un video horizontal único se muestra en formato ancho 16:9

  useEffect(() => {
    const el = cardRef.current
    if (!el || blocked) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setNear(true)
        const vid = videoRef.current
        if (vid) (e.isIntersecting && e.intersectionRatio > 0.5 ? vid.play().catch(() => {}) : vid.pause())
      },
      { threshold: [0, 0.5], rootMargin: '200px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [blocked, near])

  return (
    <Reveal delay={i * 90} className={`ssb-vcard ${wide ? 'ssb-vcard--wide' : ''}`}>
      <div ref={cardRef} onClick={() => !blocked && onPlay(v)}>
        <CensorWrapper sensitive={v.sensitive} className="ssb-vcard__thumb" >
          <div className="relative w-full" style={{ aspectRatio: land ? '16 / 9' : '4 / 5' }}>
            {!land && <img src={v.poster} alt="" aria-hidden="true" className="ssb-vcard__bg" loading="lazy" />}
            <ImageWithSkeleton
              src={v.poster}
              alt={v.title}
              className="!absolute inset-0 !bg-transparent ssb-vcard__media ssb-vcard__poster"
              imgClassName={`!h-full ${land ? 'object-cover' : 'object-contain'}`}
            />
            {near && !blocked && (
              <video
                ref={videoRef}
                className={`ssb-vcard__media ssb-vcard__video ${playing ? 'is-playing' : ''} ${land ? 'object-cover' : 'object-contain'}`}
                src={v.src}
                muted loop playsInline preload="metadata"
                onPlaying={() => { setPlaying(true); setBuffering(false) }}
                onWaiting={() => setBuffering(true)}
                onCanPlay={() => setBuffering(false)}
                aria-label={v.title}
              />
            )}
            {near && !playing && !blocked && (
              <div className="ssb-vcard__buffer" aria-hidden="true"><Skeleton height="100%" containerClassName="block h-full" /></div>
            )}
            {buffering && playing && (
              <div className="ssb-vcard__buffer" aria-hidden="true"><Skeleton height="100%" containerClassName="block h-full" /></div>
            )}
            <div className="ssb-vcard__shade" />
            <button className="ssb-vcard__play" aria-label={`Reproducir: ${v.title}`} onClick={(e) => { e.stopPropagation(); if (!blocked) onPlay(v) }}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11-6.86a1 1 0 0 0 0-1.7l-11-6.86A1 1 0 0 0 8 5.14z"/></svg>
            </button>
            {v.duration && <span className="ssb-vcard__duration">{v.duration}</span>}
          </div>
        </CensorWrapper>
        <h4 className="ssb-vcard__title">{v.title}</h4>
        <p className="ssb-vcard__desc">{v.desc}</p>
      </div>
    </Reveal>
  )
}

function VideoLightbox({ v, onClose }) {
  const [ready, setReady] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', onKey) }
  }, [onClose])

  return (
    <motion.div className="ssb-lb" role="dialog" aria-modal="true" aria-label={v.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <div className="ssb-lb__bg" onClick={onClose}></div>
      <button className="ssb-lb__close" onClick={onClose} aria-label="Cerrar"><i className="fa-solid fa-xmark"></i></button>
      <motion.div className="ssb-vlb__wrap" initial={{ scale: 0.94, y: 16 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, opacity: 0 }} transition={{ type: 'spring', stiffness: 260, damping: 26 }}>
        <div className="ssb-vlb__box" style={{ minHeight: v.orientation === 'landscape' ? 220 : 380 }}>
          {!ready && <div className="absolute inset-0 z-[2] pointer-events-none"><Skeleton height="100%" containerClassName="block h-full" baseColor="#16253f" highlightColor="#27406b" /></div>}
          <video ref={ref} className="ssb-vlb__video" src={v.src} poster={v.poster} controls autoPlay playsInline onCanPlay={() => setReady(true)} onLoadedData={() => setReady(true)} onPlaying={() => setReady(true)} onError={() => setReady(true)} />
        </div>
        <div className="ssb-lb__caption ssb-vlb__caption">
          <h3 className="ssb-lb__caption-title">{v.title}</h3>
          <p className="ssb-lb__caption-desc">{v.desc}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function VideoGrid({ videos }) {
  const [playing, setPlaying] = useState(null)
  return (
    <>
      <div className="ssb-videos" aria-label="Videos del proceso">
        {videos.map((v, i) => <VideoCard key={v.src} v={v} i={i} onPlay={setPlaying} wide={videos.length === 1 && v.orientation === 'landscape'} />)}
      </div>
      <AnimatePresence>{playing && <VideoLightbox key="vlb" v={playing} onClose={() => setPlaying(null)} />}</AnimatePresence>
    </>
  )
}
