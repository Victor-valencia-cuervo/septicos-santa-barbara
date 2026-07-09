# Sépticos Santa Bárbara — Sitio Web (React + Vite)

Migración del sitio original en HTML/CSS/Tailwind/JS a **React + Vite**, manteniendo el mismo diseño, textos e imágenes, con varias mejoras nuevas. Sitio de: **Didier Cuervo · 313 381 5853**.

---

## 🚀 Cómo correr el proyecto

Necesitas [Node.js](https://nodejs.org) 18 o superior instalado.

```bash
npm install       # instala las dependencias (solo la primera vez)
npm run dev       # abre el sitio en modo desarrollo (http://localhost:5173)
npm run build     # genera la versión de producción en /dist
npm run preview   # sirve /dist localmente para probar el build de producción
```

No necesitas tocar nada más para empezar a ver el sitio corriendo.

---

## 📁 Estructura del proyecto

```
ssb-web/
├─ public/                     ← Todo lo que se copia tal cual a la raíz del sitio
│  ├─ assets/images/...        ← TODAS las imágenes (ver docs/GUIA-IMAGENES.md)
│  ├─ assets/videos/...        ← TODOS los videos (ver docs/GUIA-VIDEOS.md)
│  ├─ favicon.ico, manifest.json, robots.txt, sitemap.xml, _redirects
├─ src/
│  ├─ main.jsx                 ← Punto de entrada de React
│  ├─ App.jsx                  ← Rutas de la aplicación (React Router)
│  ├─ index.css                ← Estilos globales + Tailwind
│  ├─ data/                    ← 🔑 Aquí se agregan imágenes, videos y tanques (arreglos JS)
│  │   ├─ galleryData.js       ← Galerías de todas las páginas
│  │   ├─ videosData.js        ← Videos de todas las páginas
│  │   ├─ tanksData.js         ← Catálogo de tanques (con precio, uso, material, etc.)
│  │   └─ heroConfig.js        ← Fondo del hero de cada página (imagen o video)
│  ├─ context/CensorshipContext.jsx  ← Lógica del aviso/censura de mantenimiento
│  ├─ components/              ← Piezas reutilizables (Navbar, Galería, Modal, etc.)
│  └─ pages/                   ← Las 4 páginas del sitio (Home + 3 de servicios + 404)
├─ docs/                       ← Guías paso a paso para subir contenido
├─ vite.config.js, tailwind.config.js, wrangler.jsonc
```

---

## 🧭 Rutas del sitio

| Ruta | Página |
|---|---|
| `/` | Inicio (todas las secciones con scroll-snap) |
| `/servicios/instalacion-profesional` | Instalación Profesional |
| `/servicios/limpieza-mantenimiento` | Limpieza & Mantenimiento |
| `/servicios/tanques-almacenamiento` | Tanques de Almacenamiento |
| Cualquier otra ruta | Página 404 |

> Nota: como pediste, las rutas de servicios ya **no** llevan el prefijo `/pages/` — ahora son directamente `/servicios/...`.

---

## ✨ Qué cambió respecto al sitio original

1. **Migración completa a React + Vite** — mismo diseño y contenido, código componetizado y mantenible.
2. **Aviso de contenido sensible (censura de mantenimiento)** — ver `docs/GUIA-CENSURA.md`.
3. **Navbar con indicador de sección/página activa** (subrayado), y la barra lateral de puntos (dots) de la home corregida.
4. **Botón de WhatsApp flotante nuevo** (efecto "burbuja que crece"), en todas las páginas.
5. **Catálogo de tanques mejorado**: cada tanque tiene imagen, badge, precio, uso recomendado, material y vida útil — editable desde un solo archivo (`src/data/tanksData.js`). Se quitó el número de capacidad sobrepuesto en la imagen y se añadió zoom + oscurecido en hover.
6. **El hero de cada página admite imagen o video de fondo** manteniendo siempre el degradado azul (`src/data/heroConfig.js`).
7. **Se reemplazó la barra de "Inicio > Servicios > ..." por una barra interactiva** que muestra el servicio que estás viendo, debajo del navbar.
8. **Rutas limpias** (`/servicios/...` sin `/pages/`) + página 404 + redirecciones SPA para Cloudflare Pages.

Ver el detalle de cada función en `docs/`.

---

## ☁️ Cómo publicar en Cloudflare Pages

El proyecto ya está configurado con `wrangler.jsonc` y `public/_redirects`.

**Opción A — Conectando el repositorio de Git (recomendado):**
1. En Cloudflare Pages, conecta este repositorio.
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Guarda y despliega. Cloudflare detectará automáticamente `public/_redirects` para que las rutas internas (`/servicios/...`) funcionen al recargar la página.

**Opción B — Con Wrangler CLI:**
```bash
npm run build
npx wrangler pages deploy dist
```

El sitio seguirá disponible en `https://septicossantabarbara.pages.dev/` (sigue siendo gratuito, sin dominio propio).

### Sobre el logo en los resultados de Google / vista previa de Cloudflare
Ya se configuraron las etiquetas `og:image`, `twitter:image`, `favicon` y el `manifest.json` apuntando al logo (`/assets/images/app/logo.png`). Cuando Google vuelva a rastrear el sitio (puedes forzarlo desde Google Search Console → "Inspeccionar URL" → "Solicitar indexación"), debería reemplazar la vista previa vacía/genérica de Cloudflare por el logo. La verificación de Search Console (`google-site-verification`) ya está incluida en `index.html`.

---

## 📚 Guías de contenido

- [`docs/GUIA-IMAGENES.md`](docs/GUIA-IMAGENES.md) — cómo agregar/reemplazar imágenes en cada página.
- [`docs/GUIA-VIDEOS.md`](docs/GUIA-VIDEOS.md) — cómo agregar videos en cada página.
- [`docs/GUIA-TANQUES.md`](docs/GUIA-TANQUES.md) — cómo agregar/editar tanques del catálogo.
- [`docs/GUIA-CENSURA.md`](docs/GUIA-CENSURA.md) — cómo funciona el aviso y la censura de imágenes de mantenimiento.

---

*Última actualización: Julio 2026 — Sépticos Santa Bárbara*
