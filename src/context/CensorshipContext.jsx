import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'

/**
 * CensorshipContext
 * ============================================================
 * Controla el "censurado" (blur/glass) de las imágenes de
 * mantenimiento y limpieza en todo el sitio (galería de inicio,
 * comparador antes/después, y galería de la página de
 * Limpieza & Mantenimiento). El hero de esa página NUNCA se censura.
 *
 * Estados guardados en localStorage:
 *  - ssb_censura_choice: 'open' | 'censored' | null
 *      'open'      -> el usuario eligió ver todo sin censura desde el aviso
 *      'censored'  -> el usuario eligió ver con censura (o cerró el aviso con la X)
 *      null        -> aún no ha decidido -> se muestra el aviso y por defecto
 *                     las imágenes se muestran CENSURADAS (opción segura)
 *  - ssb_censura_revealed: 'true' | null
 *      Cuando el usuario confirma "Sí, quitar censura" al hacer clic sobre
 *      una imagen censurada, se quita la censura de forma permanente y
 *      global (para todas las imágenes de mantenimiento del sitio).
 * ============================================================
 */

const CHOICE_KEY = 'ssb_censura_choice'
const REVEALED_KEY = 'ssb_censura_revealed'

const CensorshipContext = createContext(null)

export function CensorshipProvider({ children }) {
  const [choice, setChoice] = useState(() => {
    try { return localStorage.getItem(CHOICE_KEY) } catch { return null }
  })
  const [revealed, setRevealed] = useState(() => {
    try { return localStorage.getItem(REVEALED_KEY) === 'true' } catch { return false }
  })
  const [confirmOpen, setConfirmOpen] = useState(false)

  useEffect(() => {
    try {
      if (choice) localStorage.setItem(CHOICE_KEY, choice)
    } catch { /* localStorage no disponible */ }
  }, [choice])

  useEffect(() => {
    try {
      if (revealed) localStorage.setItem(REVEALED_KEY, 'true')
    } catch { /* localStorage no disponible */ }
  }, [revealed])

  const showNotice = choice === null && !revealed

  const chooseOpen = useCallback(() => setChoice('open'), [])
  const chooseCensored = useCallback(() => setChoice('censored'), [])
  const dismissNotice = useCallback(() => setChoice('censored'), []) // la X = opción segura, sin exponer nada por accidente

  // Todas las imágenes "sensibles" están censuradas salvo que:
  //  - ya se hayan revelado permanentemente, o
  //  - el usuario haya elegido explícitamente "continuar sin censura"
  const isCensored = choice !== 'open' && !revealed

  const requestReveal = useCallback(() => setConfirmOpen(true), [])
  const confirmReveal = useCallback(() => {
    setRevealed(true)
    setConfirmOpen(false)
  }, [])
  const cancelReveal = useCallback(() => setConfirmOpen(false), [])

  const value = {
    choice, revealed, showNotice, isCensored,
    chooseOpen, chooseCensored, dismissNotice,
    confirmOpen, requestReveal, confirmReveal, cancelReveal,
  }

  return (
    <CensorshipContext.Provider value={value}>
      {children}
    </CensorshipContext.Provider>
  )
}

export function useCensorship() {
  const ctx = useContext(CensorshipContext)
  if (!ctx) throw new Error('useCensorship debe usarse dentro de <CensorshipProvider>')
  return ctx
}
