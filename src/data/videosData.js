/**
 * videosData.js — Sépticos Santa Bárbara
 * ============================================================
 * Fuente única de datos para todas las secciones de video.
 *
 * AGREGAR UN VIDEO:
 *  1. Copia el archivo .mp4 a /public/assets/videos/<carpeta>/
 *  2. Agrega un objeto al arreglo correspondiente.
 *  3. La tarjeta se genera automáticamente.
 *
 * Campos:
 *   src      → ruta al archivo .mp4
 *   thumb    → imagen de miniatura (poster del video)
 *   title    → título de la tarjeta
 *   desc     → descripción breve
 *   duration → duración formateada ('1:30')
 * ============================================================
 */

export const VIDEOS_INICIO = [
  { src: '/assets/videos/instalacion-profesional/video-01.mp4', thumb: '/assets/images/servicios/instalacion-profesional/instalacion-01.jpg', title: 'Proceso de Instalación Séptica', desc: 'Desde la excavación hasta la entrega del sistema séptico completo.', duration: '1:20' },
  { src: '/assets/videos/limpieza-mantenimiento/video-01.mp4', thumb: '/assets/images/servicios/limpieza-mantenimiento/mantenimiento-01.jpg', title: 'Limpieza Profesional de Pozo Séptico', desc: 'Succión de lodos y lavado a presión del interior del tanque.', duration: '0:45' },
  { src: '/assets/videos/tanques-almacenamiento/video-01.mp4', thumb: '/assets/images/servicios/tanques-almacenamiento/tanque-01.jpg', title: 'Instalación de Tanque de Agua', desc: 'Distribución e instalación de tanque de agua de gran capacidad en finca.', duration: '0:55' },
]

export const VIDEOS_INSTALACION = [
  { src: '/assets/videos/instalacion-profesional/video-01.mp4', thumb: '/assets/images/servicios/instalacion-profesional/instalacion-01.jpg', title: 'Proceso Completo de Instalación', desc: 'Desde la visita técnica hasta la entrega final del sistema séptico.', duration: '1:20' },
  { src: '/assets/videos/instalacion-profesional/video-02.mp4', thumb: '/assets/images/servicios/instalacion-profesional/instalacion-02.jpg', title: 'Instalación de Filtro FAFA', desc: 'Proceso de montaje y conexión del filtro anaerobio de flujo ascendente.', duration: '0:50' },
  { src: '/assets/videos/instalacion-profesional/video-03.mp4', thumb: '/assets/images/servicios/instalacion-profesional/instalacion-03.jpg', title: 'Pruebas de Funcionamiento', desc: 'Verificación hidráulica del sistema antes de la entrega oficial.', duration: '0:35' },
]

export const VIDEOS_LIMPIEZA = [
  { src: '/assets/videos/limpieza-mantenimiento/video-01.mp4', thumb: '/assets/images/servicios/limpieza-mantenimiento/mantenimiento-01.jpg', title: 'Succión de Lodos con Vacío', desc: 'Proceso de extracción de lodos acumulados con camión cisterna de vacío.', duration: '0:45' },
  { src: '/assets/videos/limpieza-mantenimiento/video-02.mp4', thumb: '/assets/images/servicios/limpieza-mantenimiento/mantenimiento-02.jpg', title: 'Hidrolavado a Presión', desc: 'Lavado interno de las paredes y fondo del pozo con agua a alta presión.', duration: '0:40' },
  { src: '/assets/videos/limpieza-mantenimiento/video-03.mp4', thumb: '/assets/images/servicios/limpieza-mantenimiento/mantenimiento-01.jpg', title: 'Aplicación de Bacterias', desc: 'Inoculación de bacterias digestivas para reactivar el proceso biológico.', duration: '0:25' },
]

export const VIDEOS_TANQUES = [
  { src: '/assets/videos/tanques-almacenamiento/video-01.mp4', thumb: '/assets/images/servicios/tanques-almacenamiento/tanque-01.jpg', title: 'Instalación de Tanque 5,000 L', desc: 'Proceso de instalación y conexión de tanque de gran capacidad en finca.', duration: '0:55' },
  { src: '/assets/videos/tanques-almacenamiento/video-02.mp4', thumb: '/assets/images/servicios/tanques-almacenamiento/tanque-02.jpg', title: 'Conexión Hidráulica de Tanque', desc: 'Instalación de tuberías y conexiones de llenado y distribución del agua.', duration: '0:38' },
  { src: '/assets/videos/tanques-almacenamiento/video-03.mp4', thumb: '/assets/images/servicios/tanques-almacenamiento/tanque-03.jpg', title: 'Tanque Elevado sobre Torre', desc: 'Montaje de estructura metálica y tanque elevado para distribución por gravedad.', duration: '0:42' },
]
