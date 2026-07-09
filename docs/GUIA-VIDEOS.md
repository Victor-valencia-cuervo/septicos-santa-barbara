# 🎬 Guía — Cómo Agregar Videos

Los videos viven en `public/assets/videos/...` (formato **.mp4**, ligero y comprimido para web) y se registran en `src/data/videosData.js`.

## Agregar un video nuevo
1. Copia el archivo `.mp4` a la carpeta de la página correspondiente.
2. Abre `src/data/videosData.js` y agrega un objeto al arreglo de esa página:

```js
{
  src: '/assets/videos/instalacion-profesional/video-04.mp4',
  thumb: '/assets/images/servicios/instalacion-profesional/instalacion-01.jpg', // miniatura mientras carga
  title: 'Título del video',
  desc: 'Descripción breve de lo que se ve.',
  duration: '0:45', // opcional, se muestra como etiqueta
}
```
3. Guarda y listo — la tarjeta de video se genera sola, con reproducción en miniatura al pasar el mouse/hacer scroll, y en grande al hacer clic.

## Carpetas por página

| Página | Carpeta | Arreglo |
|---|---|---|
| Inicio | `public/assets/videos/instalacion-profesional/`, `.../limpieza-mantenimiento/`, `.../tanques-almacenamiento/` | `VIDEOS_INICIO` (puede mezclar videos de las 3 carpetas) |
| Instalación Profesional | `public/assets/videos/instalacion-profesional/` | `VIDEOS_INSTALACION` |
| Limpieza & Mantenimiento | `public/assets/videos/limpieza-mantenimiento/` | `VIDEOS_LIMPIEZA` |
| Tanques de Almacenamiento | `public/assets/videos/tanques-almacenamiento/` | `VIDEOS_TANQUES` |

## Usar un video como fondo del Hero (en vez de una imagen)
Abre `src/data/heroConfig.js` y cambia el `type` a `'video'`:

```js
export const HERO_LIMPIEZA = {
  type: 'video',
  src: '/assets/videos/limpieza-mantenimiento/hero.mp4',
  poster: '/assets/images/servicios/limpieza-mantenimiento/hero.jpg', // se ve mientras carga el video
  gradient: 'linear-gradient(to right, rgba(15,23,42,.92), rgba(3,105,161,.6))', // no lo cambies: es el degradado azul de marca
}
```

El degradado azul se mantiene **siempre** encima, sea imagen o video, para que el texto del hero siga siendo legible.

## Especificaciones recomendadas
- Formato: **MP4 (H.264)**, sin audio si es solo decorativo (pesa menos).
- Resolución: 1280×720 (720p) es suficiente para tarjetas y hero; no subas 4K.
- Duración: videos cortos (20–90 segundos) cargan más rápido y se ven mejor en las tarjetas.
- Los videos de las tarjetas se reproducen automáticamente en bucle (sin sonido) cuando están visibles en pantalla, y se pausan al salir de la vista para ahorrar datos.
