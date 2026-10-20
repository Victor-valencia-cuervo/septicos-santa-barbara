import React, { useEffect, useRef, useState } from 'react'
import Skeleton from 'react-loading-skeleton'

/**
 * <ImageWithSkeleton> — imagen con "cuadrito animado" (shimmer) mientras carga.
 * Usa react-loading-skeleton; al terminar de cargar la imagen aparece con un
 * fundido suave. Si falla la carga muestra un respaldo de marca.
 */
export default function ImageWithSkeleton({ src, alt = '', className = '', imgClassName = '', eager = false, onClick, style, fallback }) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    setLoaded(false)
    setFailed(false)
    // la imagen puede estar ya en caché antes de que React enganche onLoad
    if (ref.current?.complete && ref.current.naturalWidth > 0) setLoaded(true)
  }, [src])

  return (
    <div className={`media-box ${className}`} style={style} onClick={onClick}>
      {!loaded && (
        <div className="media-box__sk" aria-hidden="true">
          <Skeleton height="100%" containerClassName="block h-full" />
        </div>
      )}
      <img
        ref={ref}
        src={failed ? fallback || 'https://placehold.co/600x400/0284c7/ffffff?text=SSB' : src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`media-box__img ${loaded ? 'is-loaded' : ''} ${imgClassName}`}
        onLoad={() => setLoaded(true)}
        onError={() => { if (!failed) setFailed(true); else setLoaded(true) }}
      />
    </div>
  )
}
