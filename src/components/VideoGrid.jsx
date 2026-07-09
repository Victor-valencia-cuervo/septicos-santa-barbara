import React, { useEffect, useRef, useState } from 'react'
import Reveal from '../hooks/useReveal.jsx'

function VideoCard({ v, i, light, onPlay }) {
  const videoRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    const el = cardRef.current
    const video = videoRef.current
    if (!el || !video) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((entry) => (entry.isIntersecting ? video.play().catch(() => {}) : video.pause())),
      { threshold: 0.5 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Reveal delay={i * 90} className={`ssb-video-card ${light ? 'light' : ''}`} root={null}>
      <div ref={cardRef}>
        <div className="ssb-video-card__thumb" onClick={() => onPlay(v)}>
          <video ref={videoRef} className="ssb-video-card__video" muted loop playsInline preload="none" poster={v.thumb || ''} aria-label={v.title}>
            <source src={v.src} type="video/mp4" />
          </video>
          <button className="ssb-video-card__play" aria-label="Reproducir en grande" onClick={(e) => { e.stopPropagation(); onPlay(v) }}>
            <i className="fa-solid fa-play"></i>
          </button>
          {v.duration && <span className="ssb-video-card__duration">{v.duration}</span>}
        </div>
        <div className="ssb-video-card__info">
          <h4 className="ssb-video-card__title">{v.title}</h4>
          <p className="ssb-video-card__desc">{v.desc}</p>
        </div>
      </div>
    </Reveal>
  )
}

export default function VideoGrid({ videos, light = false }) {
  const [playing, setPlaying] = useState(null)
  const videoElRef = useRef(null)

  useEffect(() => {
    if (playing && videoElRef.current) {
      document.body.style.overflow = 'hidden'
      const t = setTimeout(() => videoElRef.current?.play().catch(() => {}), 200)
      return () => clearTimeout(t)
    }
    document.body.style.overflow = ''
  }, [playing])

  const close = () => setPlaying(null)

  return (
    <>
      <div className="ssb-videos-grid" aria-label="Videos del proceso">
        {videos.map((v, i) => (
          <VideoCard key={v.src + i} v={v} i={i} light={light} onPlay={setPlaying} />
        ))}
      </div>

      {playing && (
        <div className="ssb-lb ssb-lb--open" role="dialog" aria-modal="true" aria-label="Video">
          <div className="ssb-lb__bg" onClick={close}></div>
          <button className="ssb-lb__close" onClick={close} aria-label="Cerrar"><i className="fa-solid fa-xmark"></i></button>
          <div className="ssb-vlb__wrap">
            <video ref={videoElRef} className="ssb-vlb__video" src={playing.src} controls playsInline />
            <div className="ssb-lb__caption ssb-vlb__caption">
              <h3 className="ssb-lb__caption-title">{playing.title}</h3>
              <p className="ssb-lb__caption-desc">{playing.desc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
