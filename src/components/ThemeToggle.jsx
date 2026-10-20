import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext.jsx'

/** Botón sol/luna con rotación animada. `onDark` ajusta el contraste sobre el hero. */
export default function ThemeToggle({ onDark = false }) {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      title={isDark ? 'Modo claro' : 'Modo oscuro'}
      className={`relative w-10 h-10 rounded-full flex items-center justify-center border transition-colors overflow-hidden ${
        onDark ? 'border-white/25 text-white hover:bg-white/15' : 'border-[var(--line)] text-[var(--ink-2)] hover:bg-[var(--surface-2)]'
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          className={`flex ${isDark ? 'text-amber-300' : ''}`}
          initial={{ y: 18, rotate: -90, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          exit={{ y: -18, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {isDark ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2" fill="currentColor" /><path d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" /></svg>
          ) : (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 14.5A9 9 0 0 1 9.5 3a.6.6 0 0 0-.8-.7A10 10 0 1 0 21.7 15.3a.6.6 0 0 0-.7-.8z" /></svg>
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
