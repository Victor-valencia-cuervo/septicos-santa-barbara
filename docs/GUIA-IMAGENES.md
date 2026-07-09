# 📸 Guía — Cómo Agregar / Reemplazar Imágenes

> **Regla de oro:** las imágenes viven en `public/assets/images/...` y se **registran** en `src/data/galleryData.js`. Si copias un archivo pero no lo agregas al arreglo, no aparecerá en el sitio (y viceversa).

## Reemplazar una imagen que ya existe
Copia el nuevo archivo con el **mismo nombre** dentro de la misma carpeta en `public/assets/images/...`, reemplazando el anterior. No necesitas tocar ningún código.

## Agregar una imagen nueva
1. Copia el archivo a la carpeta correspondiente (tabla abajo).
2. Abre `src/data/galleryData.js` y agrega un objeto al arreglo indicado.
3. Guarda — Vite recarga el sitio automáticamente en modo desarrollo.

```js
{ src: '/assets/images/inicio/galeria/instalacion-09.jpg', title: 'Título de la foto', desc: 'Descripción breve.', category: 'instalacion' }
```

---

## 📁 Por página

### 🏠 Inicio (`/`)

| Carpeta | Arreglo en `galleryData.js` | Notas |
|---|---|---|
| `public/assets/images/app/` | — | `logo.png` (navbar, footer, favicon) y `apple-touch-icon.png` (180×180 px) |
| `public/assets/images/inicio/hero/` | `HERO_INICIO` en `src/data/heroConfig.js` | `hero-bg.jpg`, fondo del hero principal. También puede ser un video (ver `GUIA-VIDEOS.md`) |
| `public/assets/images/inicio/comparacion/` | `ANTES_DESPUES` | `antes.jpg` / `despues.jpg` — deben tener el mismo encuadre. **Ambas se censuran** por defecto (ver `GUIA-CENSURA.md`) |
| `public/assets/images/inicio/galeria/` | `GALLERY_INICIO` | Galería con filtros. Usa `category: 'instalacion' \| 'mantenimiento' \| 'tanques'`. Las de `mantenimiento` deben llevar `sensitive: true` |

### 🔧 Instalación Profesional

| Carpeta | Arreglo | Notas |
|---|---|---|
| `public/assets/images/servicios/instalacion-profesional/` | `GALLERY_INSTALACION` | `hero.jpg` es el fondo del hero (nunca se censura, este servicio no tiene contenido sensible) |

### 🧽 Limpieza & Mantenimiento

| Carpeta | Arreglo | Notas |
|---|---|---|
| `public/assets/images/servicios/limpieza-mantenimiento/` | `GALLERY_LIMPIEZA` | `hero.jpg` **nunca se censura**. Todas las demás fotos de esta galería llevan `sensitive: true` y sí se censuran según el aviso de la home |

### 💧 Tanques de Almacenamiento

| Carpeta | Se usa en | Notas |
|---|---|---|
| `public/assets/images/servicios/tanques-almacenamiento/` | `GALLERY_TANQUES` (galería general) y `TANKS` en `src/data/tanksData.js` (catálogo con modal) | Para la foto de cada tarjeta/modal de tanque, edita el campo `img` del tanque correspondiente en `tanksData.js`. Ver `GUIA-TANQUES.md` |

---

## 🖼️ Especificaciones recomendadas

| Tipo | Formato | Ancho máx. | Calidad |
|---|---|---|---|
| Hero de página | JPG | 1920 px | 80% |
| Galería / masonry | JPG | 1200 px | 75% |
| Logo / ícono | PNG | 512 px | Sin pérdida |
| Comparador antes/después | JPG | 800 px | 80% |
| Tarjetas de tanques | JPG | 900 px | 75% |

Si una imagen no carga (ruta mal escrita, archivo faltante), el sitio automáticamente muestra un marcador de posición (`placehold.co`) en vez de romperse — así siempre notarás si falta subir algo.
