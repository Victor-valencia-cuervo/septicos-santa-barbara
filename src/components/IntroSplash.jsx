import React, { createContext, useContext, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const IntroContext = createContext(true)
/** `true` cuando la animación de entrada terminó (o no se mostró). El hero espera esta señal. */
export const useIntroDone = () => useContext(IntroContext)

const KEY = 'ssb-intro-seen'
const NAME = 'SÉPTICOS'

/**
 * Animación de entrada: el logo aparece dentro de una "gota" que se llena de
 * agua, el nombre se escribe letra por letra y la cortina se abre hacia arriba
 * revelando la web. Solo se muestra una vez por sesión, se puede omitir con un
 * clic y se desactiva con "reducir movimiento".
 */
export function IntroProvider({ children }) {
  const reduce = useReducedMotion()
  const [show, setShow] = useState(() => {
    try { return !sessionStorage.getItem(KEY) } catch { return true }
  })
  const [done, setDone] = useState(!show)

  useEffect(() => {
    if (reduce && show) finish()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce])

  useEffect(() => {
    if (!show) return
    document.documentElement.style.overflow = 'hidden'
    document.documentElement.dataset.intro = 'run'
    const t = setTimeout(finish, 2700)
    return () => { clearTimeout(t); document.documentElement.style.overflow = ''; delete document.documentElement.dataset.intro }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show])

  function finish() {
    try { sessionStorage.setItem(KEY, '1') } catch { /* noop */ }
    document.documentElement.style.overflow = ''
    delete document.documentElement.dataset.intro
    setShow(false)
  }

  return (
    <IntroContext.Provider value={done}>
      {children}
      <AnimatePresence onExitComplete={() => setDone(true)}>
        {show && !reduce && (
          <motion.div
            key="intro"
            className="fixed inset-0 z-[2000] flex items-center justify-center overflow-hidden cursor-pointer"
            onClick={finish}
            role="presentation"
            exit={{ clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
            initial={{ clipPath: 'inset(0 0 0% 0)' }}
            style={{ background: 'radial-gradient(120% 90% at 50% 40%, #0b3a63 0%, #07182c 55%, #050d1a 100%)' }}
          >
            {/* burbujas de fondo */}
            {Array.from({ length: 14 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute rounded-full border border-sky-300/20 bg-sky-200/5"
                style={{ width: 10 + ((i * 7) % 26), height: 10 + ((i * 7) % 26), left: `${(i * 37) % 100}%`, bottom: -40 }}
                animate={{ y: [0, -window.innerHeight - 80], opacity: [0, 0.8, 0] }}
                transition={{ duration: 2.6 + (i % 4) * 0.5, delay: (i % 6) * 0.2, ease: 'easeOut', repeat: Infinity }}
              />
            ))}

            <div className="relative flex flex-col items-center px-6">
              {/* logo dentro de la gota que se llena */}
              <motion.div
                className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-sky-300/30 bg-white/[0.04] backdrop-blur-md flex items-center justify-center"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 160, damping: 16 }}
              >
                <motion.div
                  className="absolute left-[-10%] right-[-10%] bottom-0 bg-gradient-to-t from-sky-500/70 to-cyan-300/40"
                  initial={{ height: '0%' }}
                  animate={{ height: '100%' }}
                  transition={{ duration: 1.7, ease: 'easeInOut', delay: 0.2 }}
                  style={{ borderTopLeftRadius: '50% 14px', borderTopRightRadius: '50% 14px' }}
                />
                <motion.img
                  src="/assets/images/app/logo.png"
                  alt=""
                  className="relative z-10 w-16 sm:w-20 h-16 sm:h-20 object-contain drop-shadow-lg"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                />
              </motion.div>

              {/* nombre letra por letra */}
              <div className="mt-7 flex" aria-label="Sépticos Santa Bárbara">
                {NAME.split('').map((ch, i) => (
                  <motion.span
                    key={i}
                    className="text-white font-extrabold text-3xl sm:text-4xl tracking-[.18em]"
                    initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ delay: 0.7 + i * 0.06, duration: 0.45 }}
                  >
                    {ch}
                  </motion.span>
                ))}
              </div>
              <motion.p
                className="mt-2 text-sky-200/80 text-[11px] sm:text-xs font-semibold tracking-[.42em] uppercase"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.35, duration: 0.6 }}
              >
                Santa Bárbara
              </motion.p>

              {/* barra de progreso */}
              <div className="mt-8 h-[2px] w-44 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-sky-400 to-cyan-300"
                  initial={{ width: '0%' }} animate={{ width: '100%' }}
                  transition={{ duration: 2.2, ease: 'easeInOut', delay: 0.15 }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </IntroContext.Provider>
  )
}
