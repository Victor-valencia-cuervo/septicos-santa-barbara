import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({ theme: 'light', toggle: () => {} })
const KEY = 'ssb-theme'

const systemPrefersDark = () => window.matchMedia?.('(prefers-color-scheme: dark)').matches

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => (document.documentElement.classList.contains('dark') ? 'dark' : 'light'))

  // Aplica la clase y el color de la barra del navegador
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0b1220' : '#0284c7')
  }, [theme])

  // Si el usuario nunca eligió, sigue el cambio del sistema
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-color-scheme: dark)')
    if (!mq) return
    const onChange = (e) => { try { if (!localStorage.getItem(KEY)) setTheme(e.matches ? 'dark' : 'light') } catch { /* noop */ } }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const toggle = useCallback(() => {
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark'
      try { localStorage.setItem(KEY, next) } catch { /* noop */ }
      return next
    })
  }, [])

  return <ThemeContext.Provider value={{ theme, toggle, systemPrefersDark }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
