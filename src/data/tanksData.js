/**
 * tanksData.js — Sépticos Santa Bárbara
 * ============================================================
 * Catálogo de tanques de almacenamiento de agua.
 * Cada objeto controla tanto la tarjeta del catálogo como el
 * modal de detalle (ya no hace falta editar dos lugares distintos).
 *
 * Campos:
 *   id        → identificador único (usado por el modal)
 *   title     → nombre del tanque
 *   badge     → etiqueta superior de la tarjeta ("Popular", "Fincas", etc.)
 *   capacity  → texto de capacidad ("1,000 Litros")
 *   price     → precio de referencia en COP (ajústalo a tus precios reales)
 *   use       → uso recomendado
 *   material  → material de fabricación
 *   lifespan  → vida útil estimada
 *   desc      → descripción corta (tarjeta + modal)
 *   img       → imagen del tanque (tarjeta + modal). Si se deja vacío,
 *               se usa un color de respaldo.
 *   waText    → texto para el mensaje de WhatsApp al cotizar
 *
 * AGREGAR UN TANQUE NUEVO: copia un objeto, cambia el id y los datos,
 * agrega la imagen en /public/assets/images/servicios/tanques-almacenamiento/
 * ============================================================
 */

export const TANKS = [
  {
    id: '250L',
    title: 'Tanque 250 Litros',
    badge: 'Básico',
    badgeColor: 'bg-brand',
    capacity: '250 Litros',
    price: 180000,
    use: 'Apartamentos · Casas pequeñas',
    material: 'Polietileno HDPE',
    lifespan: '+20 años',
    desc: 'Tanque compacto ideal para reserva puntual o como complemento de otro sistema de almacenamiento.',
    img: '/assets/images/servicios/tanques-almacenamiento/tanque-01.jpg',
    waText: '250 litros',
  },
  {
    id: '500L',
    title: 'Tanque 500 Litros',
    badge: 'Estándar',
    badgeColor: 'bg-cyan-600',
    capacity: '500 Litros',
    price: 320000,
    use: 'Familias de 2–4 personas',
    material: 'Polietileno HDPE',
    lifespan: '+20 años',
    desc: 'Solución perfecta para casas pequeñas, con tapa hermética y protección UV.',
    img: '/assets/images/servicios/tanques-almacenamiento/tanque-02.jpg',
    waText: '500 litros',
  },
  {
    id: '1000L',
    title: 'Tanque 1,000 Litros',
    badge: '⭐ Popular',
    badgeColor: 'bg-blue-600',
    capacity: '1,000 Litros',
    price: 520000,
    use: 'Viviendas familiares · Casas de campo',
    material: 'Polietileno HDPE',
    lifespan: '+20 años',
    desc: 'El más vendido. Garantiza reserva para 1–2 días en una familia estándar.',
    img: '/assets/images/servicios/tanques-almacenamiento/tanque-03.jpg',
    waText: '1000 litros',
  },
  {
    id: '2000L',
    title: 'Tanque 2,000 Litros',
    badge: 'Fincas',
    badgeColor: 'bg-indigo-600',
    capacity: '2,000 Litros',
    price: 890000,
    use: 'Fincas · Ganadería · Riego',
    material: 'Polietileno HDPE',
    lifespan: '+20 años',
    desc: 'Gran capacidad para fincas medianas o proyectos con mayor demanda hídrica.',
    img: '/assets/images/servicios/tanques-almacenamiento/tanque-01.jpg',
    waText: '2000 litros',
  },
  {
    id: '5000L',
    title: 'Tanque 5,000 Litros',
    badge: 'Comercial',
    badgeColor: 'bg-brand-dark',
    capacity: '5,000 Litros',
    price: 1950000,
    use: 'Restaurantes · Fincas grandes',
    material: 'Polietileno HDPE reforzado',
    lifespan: '+20 años',
    desc: 'Alta capacidad para uso comercial, con conexiones de gran diámetro.',
    img: '/assets/images/servicios/tanques-almacenamiento/tanque-02.jpg',
    waText: '5000 litros',
  },
  {
    id: '10000L',
    title: 'Tanque 10,000 Litros',
    badge: 'Industrial',
    badgeColor: 'bg-slate-800',
    capacity: '10,000 Litros',
    price: 3500000,
    use: 'Industria · Agricultura · Hoteles',
    material: 'Polietileno HDPE reforzado',
    lifespan: '+20 años',
    desc: 'Máxima capacidad, construcción reforzada para condiciones exigentes.',
    img: '/assets/images/servicios/tanques-almacenamiento/tanque-03.jpg',
    waText: '10000 litros',
  },
]

export function formatCOP(value) {
  return value.toLocaleString('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 })
}
