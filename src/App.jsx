import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import ConfirmModal from './components/ConfirmModal.jsx'
import { useCensorship } from './context/CensorshipContext.jsx'
import Home from './pages/Home.jsx'
import ServiceInstalacion from './pages/ServiceInstalacion.jsx'
import ServiceLimpieza from './pages/ServiceLimpieza.jsx'
import ServiceTanques from './pages/ServiceTanques.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (pathname !== '/') window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const { confirmOpen, confirmReveal, cancelReveal } = useCensorship()
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className={isHome ? '' : 'bg-slate-50 text-slate-800'}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios/instalacion-profesional" element={<ServiceInstalacion />} />
        <Route path="/servicios/limpieza-mantenimiento" element={<ServiceLimpieza />} />
        <Route path="/servicios/tanques-almacenamiento" element={<ServiceTanques />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ConfirmModal
        open={confirmOpen}
        title="¿Quitar la censura?"
        message="Esta acción mostrará todas las imágenes de mantenimiento sin difuminar, para todas las personas que visiten el sitio desde este navegador. ¿Estás seguro?"
        confirmLabel="Sí, quitar censura"
        cancelLabel="No, mantenerla"
        onConfirm={confirmReveal}
        onCancel={cancelReveal}
      />
    </div>
  )
}
