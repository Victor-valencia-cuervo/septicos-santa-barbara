/**
 * videosData.js — Sépticos Santa Bárbara
 * ============================================================
 * Fuente única de datos para todas las secciones de video.
 *
 * AGREGAR UN VIDEO:
 *  1. Comprímelo a H.264 (mp4) y cópialo a /public/assets/videos/<carpeta>/
 *     (ver docs/GUIA-VIDEOS.md — incluye el comando ffmpeg).
 *  2. Crea su póster .webp en /public/assets/images/videos/
 *  3. Agrega un objeto al arreglo correspondiente.
 *
 * Campos:
 *   src         → ruta al .mp4
 *   poster      → imagen de miniatura (se muestra mientras carga)
 *   title/desc  → textos de la tarjeta
 *   duration    → '0:40'
 *   orientation → 'landscape' | 'portrait'  (define la forma de la tarjeta)
 *   sensitive   → true si muestra el interior de pozos (usa el sistema de censura)
 * ============================================================
 */

const V = {
  mantenimiento: {
    src: '/assets/videos/limpieza-mantenimiento/mantenimiento-pozos.mp4',
    poster: '/assets/images/videos/mantenimiento-pozos.webp',
    title: 'Mantenimiento de Pozos Sépticos',
    desc: 'Limpieza y tratamiento de pozos sépticos en finca, paso a paso.',
    duration: '0:40',
    orientation: 'portrait',
    sensitive: true,
  },
  instalacion: {
    src: '/assets/videos/instalacion-profesional/instalacion-ladera.mp4',
    poster: '/assets/images/videos/instalacion-ladera.webp',
    title: 'Instalación de Sistema Séptico en Ladera',
    desc: 'Del transporte del tanque al terreno hasta su excavación e instalación.',
    duration: '0:47',
    orientation: 'landscape',
  },
  tanques: {
    src: '/assets/videos/tanques-almacenamiento/tanques-septicos.mp4',
    poster: '/assets/images/videos/tanques-septicos.webp',
    title: 'Tanques Sépticos en Detalle',
    desc: 'Acabados, tapas de inspección y conexiones de nuestros tanques.',
    duration: '0:46',
    orientation: 'portrait',
  },
  pozo3000: {
    src: '/assets/videos/tanques-almacenamiento/pozo-3000l.mp4',
    poster: '/assets/images/videos/pozo-3000l.webp',
    title: 'Pozo Séptico de 3,000 Litros',
    desc: 'Fibra de vidrio reforzada, garantía de 8 años, ideal para vivienda campestre.',
    duration: '0:13',
    orientation: 'portrait',
  },
}

export const VIDEOS_INICIO = [V.instalacion, V.pozo3000, V.tanques, V.mantenimiento]
export const VIDEOS_INSTALACION = [V.instalacion]
export const VIDEOS_LIMPIEZA = [V.mantenimiento]
export const VIDEOS_TANQUES = [V.pozo3000, V.tanques]
