import React, { Suspense, lazy, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { SkeletonTheme } from 'react-loading-skeleton'
import Navbar from './components/Navbar.jsx'
import ConfirmModal from './components/ConfirmModal.jsx'
import { IntroProvider } from './components/IntroSplash.jsx'
import { useCensorship } from './context/CensorshipContext.jsx'
import Home from './pages/Home.jsx'

// Las páginas de servicio se descargan solo cuando se visitan (menos JS en la carga inicial)
const ServiceInstalacion = lazy(() => import('./pages/ServiceInstalacion.jsx'))
const ServiceLimpieza = lazy(() => import('./pages/ServiceLimpieza.jsx'))
const ServiceTanques = lazy(() => import('./pages/ServiceTanques.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

function ScrollToTop() {
  const { pathname, state } = useLocation()
  useEffect(() => {
    if (!(pathname === '/' && state?.scrollTo)) window.scrollTo(0, 0)
  }, [pathname, state])
  return null
}

const PageFallback = () => <div className="min-h-screen" aria-busy="true" />

export default function App() {
  const { confirmOpen, confirmReveal, cancelReveal } = useCensorship()

  return (
    <SkeletonTheme baseColor="var(--sk-base)" highlightColor="var(--sk-high)" borderRadius="0" duration={1.4}>
      <IntroProvider>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios/instalacion-profesional" element={<ServiceInstalacion />} />
            <Route path="/servicios/limpieza-mantenimiento" element={<ServiceLimpieza />} />
            <Route path="/servicios/tanques-almacenamiento" element={<ServiceTanques />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <ConfirmModal
          open={confirmOpen}
          title="¿Quitar la censura?"
          message="Esta acción mostrará todas las imágenes de mantenimiento sin difuminar, para todas las personas que visiten el sitio desde este navegador. ¿Estás seguro?"
          confirmLabel="Sí, quitar censura"
          cancelLabel="No, mantenerla"
          onConfirm={confirmReveal}
          onCancel={cancelReveal}
        />
      </IntroProvider>
    </SkeletonTheme>
  )
}
