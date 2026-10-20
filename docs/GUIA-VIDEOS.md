# Cómo agregar videos

Los videos se definen en `src/data/videosData.js` (un objeto por video) y las tarjetas se generan solas.

## 1. Comprime el video (importante para que cargue rápido)
Los videos de WhatsApp/celular pueden venir en HEVC (no se ve en muchos navegadores) o muy pesados. Conviértelos así:

```bash
ffmpeg -i original.mp4 -c:v libx264 -preset slow -crf 27 -pix_fmt yuv420p \
  -movflags +faststart -c:a aac -b:a 80k salida.mp4
# videos verticales de celular: agrega  -vf "scale=720:1280"
```

## 2. Copia los archivos
- Video → `public/assets/videos/<servicio>/nombre.mp4`
- Póster (miniatura) → `public/assets/images/videos/nombre.webp`
  ```bash
  ffmpeg -ss 5 -i salida.mp4 -frames:v 1 -vf "scale=640:-2" -c:v libwebp -quality 72 nombre.webp
  ```

## 3. Regístralo en `videosData.js`
```js
miVideo: {
  src: '/assets/videos/instalacion-profesional/nombre.mp4',
  poster: '/assets/images/videos/nombre.webp',
  title: 'Título', desc: 'Descripción corta', duration: '0:40',
  orientation: 'portrait',   // o 'landscape'
  sensitive: false,          // true si muestra el interior de pozos (usa la censura)
},
```
y agrégalo a la lista de la página (`VIDEOS_INICIO`, `VIDEOS_INSTALACION`, `VIDEOS_LIMPIEZA` o `VIDEOS_TANQUES`).

## Cómo cargan
- Se ve el póster con un skeleton animado (react-loading-skeleton) hasta que carga.
- El video solo se descarga cuando la tarjeta está cerca de la pantalla.
- Si el video se detiene a cargar, vuelve a aparecer el efecto de skeleton.
