import { useEffect } from 'react'
import { motion } from 'framer-motion'

type PostLoadLogoRevealProps = {
  onComplete: () => void
}

export function PostLoadLogoReveal({ onComplete }: PostLoadLogoRevealProps) {
  const logoSrc = `${import.meta.env.BASE_URL}raptor-logo.png`

  useEffect(() => {
    const timer = window.setTimeout(() => {
      onComplete()
    }, 2300)

    return () => window.clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[190] flex items-center justify-center bg-[#0A0F1C]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.55, ease: 'easeOut' } }}
    >
      <div className="relative flex items-center justify-center">
        <motion.div
          className="logo-reveal-drone absolute"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
        >
          <span className="logo-reveal-drone-arm left-[-12px]" />
          <span className="logo-reveal-drone-arm right-[-12px]" />
          <span className="logo-reveal-drone-core" />
        </motion.div>

        <motion.div
          className="logo-reveal-beam absolute"
          initial={{ opacity: 0, scaleY: 0.75 }}
          animate={{ opacity: [0, 0.75, 0.62], scaleY: [0.75, 1, 1] }}
          transition={{ duration: 0.7, delay: 0.22, ease: 'easeOut' }}
        />

        <motion.div
          className="logo-reveal-glow absolute h-36 w-36 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        />

        <motion.img
          src={logoSrc}
          alt="Raptor Dynamics Logo"
          className="relative z-10 h-24 w-24 object-contain sm:h-28 sm:w-28"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: [0.9, 1.04, 1.08] }}
          transition={{ duration: 1.2, ease: 'easeOut', times: [0, 0.62, 1] }}
        />
      </div>
    </motion.div>
  )
}