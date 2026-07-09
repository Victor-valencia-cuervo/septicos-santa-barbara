/**
 * galleryData.js — Sépticos Santa Bárbara
 * ============================================================
 * Fuente única de datos para todas las galerías del sitio.
 *
 * AGREGAR UNA IMAGEN:
 *  1. Copia el archivo a la carpeta correspondiente en /public/assets/images/...
 *  2. Agrega un objeto {src, title, desc, category} al arreglo correspondiente.
 *  3. ¡Listo! El componente <Gallery /> lo renderiza automáticamente.
 *
 * Las rutas empiezan en "/assets/..." porque los archivos viven en /public
 * (Vite copia /public tal cual a la raíz del sitio publicado).
 *
 * category: 'instalacion' | 'mantenimiento' | 'tanques'
 * El campo `sensitive: true` marca imágenes que participan del sistema
 * de censura (mantenimiento). Ver src/context/CensorshipContext.jsx
 * ============================================================
 */

export const GALLERY_INICIO = [
  // Instalaciones
  { src: '/assets/images/inicio/galeria/instalacion-01.jpg', title: 'Excavación e Instalación Séptica', desc: 'Trabajos de excavación técnica para sistema séptico residencial en zona rural.', category: 'instalacion' },
  { src: '/assets/images/inicio/galeria/instalacion-02.jpg', title: 'Tuberías e Inspección de Drenaje', desc: 'Instalación y verificación de tuberías de conducción y ventilación del sistema.', category: 'instalacion' },
  { src: '/assets/images/inicio/galeria/instalacion-03.jpg', title: 'Filtro Anaerobio (FAFA)', desc: 'Instalación del FAFA para tratamiento secundario de aguas residuales.', category: 'instalacion' },
  { src: '/assets/images/inicio/galeria/instalacion-04.jpg', title: 'ejemplo n4', desc: 'Instalación del FAFA para tratamiento secundario de aguas residuales.', category: 'instalacion' },
  { src: '/assets/images/inicio/galeria/instalacion-05.jpg', title: 'ejemplo n5', desc: 'Instalación del FAFA para tratamiento secundario de aguas residuales.', category: 'instalacion' },
  { src: '/assets/images/inicio/galeria/instalacion-06.jpg', title: 'ejemplo n6', desc: 'Instalación del FAFA para tratamiento secundario de aguas residuales.', category: 'instalacion' },
  { src: '/assets/images/inicio/galeria/instalacion-07.jpg', title: 'ejemplo n7', desc: 'Instalación del FAFA para tratamiento secundario de aguas residuales.', category: 'instalacion' },
  { src: '/assets/images/inicio/galeria/instalacion-08.jpg', title: 'ejemplo n8', desc: 'Instalación del FAFA para tratamiento secundario de aguas residuales.', category: 'instalacion' },

  // Mantenimiento (censurables)
  { src: '/assets/images/inicio/galeria/mantenimiento-01.jpg', title: 'Succión de Lodos de Pozo', desc: 'Extracción total de lodos acumulados con equipo de vacío de alta potencia.', category: 'mantenimiento', sensitive: true },
  { src: '/assets/images/inicio/galeria/mantenimiento-02.jpg', title: 'Mantenimiento Preventivo en Finca', desc: 'Limpieza y revisión integral de sistema séptico en propiedad rural.', category: 'mantenimiento', sensitive: true },
  { src: '/assets/images/inicio/galeria/mantenimiento-03.jpg', title: 'ejemplo mantenimiento', desc: 'Limpieza y revisión integral de sistema séptico en propiedad rural.', category: 'mantenimiento', sensitive: true },
  { src: '/assets/images/inicio/galeria/mantenimiento-04.jpg', title: 'Mantenimiento + cal para eliminar malos olores', desc: 'Limpieza y revisión integral de sistema séptico en propiedad rural.', category: 'mantenimiento', sensitive: true },

  // Tanques
  { src: '/assets/images/inicio/galeria/tanques-01.jpg', title: 'Tanque 10,000 Litros', desc: 'Suministro e instalación de tanque de gran capacidad para uso industrial.', category: 'tanques' },
  { src: '/assets/images/inicio/galeria/tanques-02.jpg', title: 'Distribución de Tanques Certificados', desc: 'Variedad de capacidades disponibles de 250 hasta 10,000 litros.', category: 'tanques' },
  { src: '/assets/images/inicio/galeria/tanques-03.jpg', title: 'Sistemas de Abastecimiento de Agua', desc: 'Instalación de sistemas de almacenamiento para hogares y fincas.', category: 'tanques' },
  { src: '/assets/images/inicio/galeria/tanques-04.jpg', title: 'Distribucion de tanques para uso industrial', desc: 'Instalación de sistemas de almacenamiento para hogares y fincas.', category: 'tanques' },
  { src: '/assets/images/inicio/galeria/tanques-05.jpg', title: 'una muestra de la duracion de nuestros tanques', desc: 'Suministro e instalación de tanque de gran capacidad para uso industrial.', category: 'tanques' },
]

// Galería · Instalación Profesional
export const GALLERY_INSTALACION = [
  { src: '/assets/images/servicios/instalacion-profesional/instalacion-01.jpg', title: 'Excavación Técnica', desc: 'Proceso de excavación con maquinaria especializada según el diseño aprobado.' },
  { src: '/assets/images/servicios/instalacion-profesional/instalacion-02.jpg', title: 'Montaje del Sistema', desc: 'Montaje e interconexión de todos los componentes del sistema séptico.' },
  { src: '/assets/images/servicios/instalacion-profesional/instalacion-03.jpg', title: 'Instalación del Filtro FAFA', desc: 'Colocación del filtro anaerobio de flujo ascendente para tratamiento secundario.' },
]

// Galería · Limpieza y Mantenimiento (todas censurables, excepto el hero de la página)
export const GALLERY_LIMPIEZA = [
  { src: '/assets/images/servicios/limpieza-mantenimiento/mantenimiento-01.jpg', title: 'Succión de Lodos', desc: 'Extracción técnica de lodos con camión de vacío de alta potencia.', sensitive: true },
  { src: '/assets/images/servicios/limpieza-mantenimiento/mantenimiento-02.jpg', title: 'Hidrolavado Interno', desc: 'Lavado a presión de paredes y fondo del pozo para remover incrustaciones.', sensitive: true },
  { src: '/assets/images/servicios/instalacion-profesional/instalacion-01.jpg', title: 'Revisión Final del Sistema', desc: 'Inspección completa tras el servicio para garantizar el correcto funcionamiento.' },
]

// Galería · Tanques de Almacenamiento (fotos generales del catálogo, no confundir con tanksData.js)
export const GALLERY_TANQUES = [
  { src: '/assets/images/servicios/tanques-almacenamiento/tanque-01.jpg', title: 'Tanque de Gran Capacidad', desc: 'Suministro e instalación de tanques certificados para uso residencial e industrial.' },
  { src: '/assets/images/servicios/tanques-almacenamiento/tanque-02.jpg', title: 'Distribución de Tanques', desc: 'Variedad de capacidades disponibles de 250 hasta 10,000 litros.' },
  { src: '/assets/images/servicios/tanques-almacenamiento/tanque-03.jpg', title: 'Instalación Hidráulica', desc: 'Conexión completa de tuberías de llenado y distribución del agua.' },
]

// Fotos "antes / después" del comparador (ambas censurables)
export const ANTES_DESPUES = {
  antes: { src: '/assets/images/inicio/comparacion/antes.jpg', title: 'Antes — Pozo con Lodos', sensitive: true },
  despues: { src: '/assets/images/inicio/comparacion/despues.jpg', title: 'Después — Pozo Limpio', sensitive: true },
}
