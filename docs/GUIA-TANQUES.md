# 💧 Guía — Catálogo de Tanques

Todo el catálogo de tanques (tarjetas + modal de detalle) se controla desde **un solo archivo**: `src/data/tanksData.js`.

## Editar un tanque existente
Abre `src/data/tanksData.js` y modifica los campos que necesites, por ejemplo el precio o la imagen:

```js
{
  id: '1000L',
  title: 'Tanque 1,000 Litros',
  badge: '⭐ Popular',       // etiqueta que aparece arriba de la imagen (ej: "Fincas", "Popular", "Industrial")
  badgeColor: 'bg-blue-600', // color de fondo del badge (clases de Tailwind)
  capacity: '1,000 Litros',
  price: 520000,             // precio en pesos colombianos (COP), se formatea solo
  use: 'Viviendas familiares · Casas de campo',
  material: 'Polietileno HDPE',
  lifespan: '+20 años',
  desc: 'El más vendido. Garantiza reserva para 1–2 días en una familia estándar.',
  img: '/assets/images/servicios/tanques-almacenamiento/tanque-03.jpg',
  waText: '1000 litros',      // texto que se agrega automáticamente al mensaje de WhatsApp
}
```

## Agregar un tanque nuevo
1. Copia la imagen a `public/assets/images/servicios/tanques-almacenamiento/`.
2. Copia uno de los objetos del arreglo `TANKS` en `tanksData.js`, pégalo al final, y cambia todos los datos (¡no olvides cambiar el `id`!).
3. Guarda — la tarjeta y el modal se generan automáticamente, no hay que tocar ningún componente.

## Qué se ve en cada lugar

| Dato | Tarjeta del catálogo | Modal de detalle |
|---|---|---|
| Imagen (`img`) | ✅ (con zoom + oscurecido en hover) | ✅ |
| Badge (`badge`) | ✅ | ✅ |
| Capacidad (`capacity`) | ✅ (junto al título, ya no sobre la imagen) | ✅ |
| Precio (`price`) | — | ✅ |
| Uso recomendado (`use`) | ✅ | ✅ |
| Material (`material`) | — | ✅ |
| Vida útil (`lifespan`) | — | ✅ |
| Descripción (`desc`) | ✅ | ✅ |

> Nota: los precios en `price` son de referencia — ajústalos a tus precios reales antes de publicar.
