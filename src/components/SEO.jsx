import { useEffect } from 'react'

function setMeta(selector, attr, value) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

/**
 * SEO — componente sin dependencias externas que actualiza el
 * <title> y las metaetiquetas principales de cada página.
 * Se llama una vez por página (dentro de cada componente de página).
 */
export default function SEO({ title, description, canonical }) {
  useEffect(() => {
    if (title) document.title = title
    if (description) setMeta('meta[name="description"]', 'content', description)
    if (canonical) {
      setMeta('#seo-canonical', 'href', canonical)
      setMeta('#seo-og-url', 'content', canonical)
    }
    if (title) {
      setMeta('#seo-og-title', 'content', title)
      setMeta('#seo-twitter-title', 'content', title)
    }
    if (description) {
      setMeta('#seo-og-desc', 'content', description)
      setMeta('#seo-twitter-desc', 'content', description)
    }
  }, [title, description, canonical])

  return null
}
