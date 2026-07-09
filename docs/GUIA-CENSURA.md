# 🔒 Guía — Aviso y Censura de Imágenes de Mantenimiento

Algunas imágenes de mantenimiento/limpieza de pozos sépticos muestran lodos y residuos, lo que puede resultar desagradable para algunas personas. Por eso se agregó un sistema de aviso + censura opcional.

## Cómo funciona

1. **Al entrar a la página de inicio**, aparece una notificación abajo a la derecha (sigue la pantalla al hacer scroll) con dos botones:
   - **"Continuar con censura"** → las imágenes sensibles se muestran difuminadas (efecto glassmorfismo azul/blanco) con un texto explicando por qué.
   - **"Continuar sin censura"** → se ve todo el contenido sin difuminar.
   - Una **X** en la esquina para cerrar el aviso sin elegir — por seguridad, cerrar con la X **no** revela el contenido (usa la opción segura/censurada), pensado para que si alguien cierra por accidente sin leer, no quede expuesto contenido sensible sin querer.
2. Si no se elige nada, el aviso **desaparece solo después de unos segundos** (tiempo suficiente para leerlo).
3. Al hacer clic sobre una imagen censurada, se pide una **confirmación** ("¿Seguro que quieres quitar la censura?"). Si se confirma, la censura se quita de **forma permanente y global** para todas las imágenes de mantenimiento del sitio (se guarda en este navegador).

## Qué se censura y qué no

| Contenido | ¿Se censura? |
|---|---|
| Galería "Mantenimiento" en la home | ✅ Sí |
| Fotos "Antes" y "Después" del comparador | ✅ Sí (como una sola pieza) |
| Galería de la página Limpieza & Mantenimiento | ✅ Sí |
| **Hero** de la página Limpieza & Mantenimiento | ❌ No — nunca se censura |
| Galerías de Instalación y Tanques | ❌ No — no tienen contenido sensible |

## Marcar una imagen como sensible

En `src/data/galleryData.js`, agrega `sensitive: true` al objeto de la imagen:

```js
{ src: '/assets/images/inicio/galeria/mantenimiento-05.jpg', title: '...', desc: '...', category: 'mantenimiento', sensitive: true }
```

Cualquier imagen con `sensitive: true` queda automáticamente cubierta por el overlay de censura mientras el modo censurado esté activo.

## Dónde vive la lógica

Todo el comportamiento está centralizado en `src/context/CensorshipContext.jsx` (estado guardado en `localStorage`) y se aplica visualmente con el componente `src/components/CensorWrapper.jsx`. No necesitas tocar estos archivos para agregar o quitar imágenes — solo el campo `sensitive` en `galleryData.js`.
