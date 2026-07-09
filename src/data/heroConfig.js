/**
 * heroConfig.js — Sépticos Santa Bárbara
 * ============================================================
 * Configura el fondo del hero de cada página. El gradiente azul
 * (linear-gradient) se mantiene SIEMPRE encima, sin importar si el
 * fondo es una imagen o un video — solo cambia `type`.
 *
 * Para cambiar el hero de una página por un video:
 *   1. Copia el .mp4 a /public/assets/videos/hero/
 *   2. Cambia `type: 'video'` y `src` a la ruta del video.
 *   3. (opcional) agrega `poster` con una imagen de respaldo mientras carga.
 *
 * Para volver a usar una imagen: `type: 'image'`, `src` a la ruta de la imagen.
 * ============================================================
 */

export const HERO_INICIO = {
  type: 'image', // 'image' | 'video'
  src: '/assets/images/inicio/hero/hero-bg.jpg',
  poster: '/assets/images/inicio/hero/hero-bg.jpg',
  gradient: 'linear-gradient(to right, rgba(15,23,42,.9), rgba(15,23,42,.75))',
}

export const HERO_INSTALACION = {
  type: 'image',
  src: '/assets/images/servicios/instalacion-profesional/hero.jpg',
  poster: '/assets/images/servicios/instalacion-profesional/hero.jpg',
  gradient: 'linear-gradient(to right, rgba(15,23,42,.92), rgba(2,132,199,.55))',
}

export const HERO_LIMPIEZA = {
  type: 'image',
  src: '/assets/images/servicios/limpieza-mantenimiento/hero.jpg',
  poster: '/assets/images/servicios/limpieza-mantenimiento/hero.jpg',
  gradient: 'linear-gradient(to right, rgba(15,23,42,.92), rgba(3,105,161,.6))',
}

export const HERO_TANQUES = {
  type: 'image',
  src: '/assets/images/servicios/tanques-almacenamiento/hero.jpg',
  poster: '/assets/images/servicios/tanques-almacenamiento/hero.jpg',
  gradient: 'linear-gradient(to right, rgba(15,23,42,.92), rgba(7,89,133,.6))',
}
