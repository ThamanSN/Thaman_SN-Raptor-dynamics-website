import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          window.clearInterval(timer)
          return 100
        }
        return prev + Math.max(1, Math.round((100 - prev) * 0.12))
      })
    }, 95)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#030511]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="glass relative flex w-[min(90vw,540px)] flex-col items-center gap-6 rounded-3xl border border-cyan-300/30 px-6 py-10 sm:px-10">
        <div className="relative h-24 w-full max-w-[320px] overflow-hidden rounded-2xl border border-cyan-300/30 bg-[#091126]/80">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(88,242,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(88,242,255,0.12)_1px,transparent_1px)] bg-[size:26px_26px]" />
          <motion.div
            className="absolute left-0 top-0 h-full w-[35%] bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent"
            animate={{ x: ['-60%', '250%'] }}
            transition={{ duration: 2, ease: 'linear', repeat: Infinity }}
          />

          <div className="absolute bottom-3 left-3 right-3 h-2 overflow-hidden rounded-full border border-cyan-300/30 bg-black/40">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-300/70 to-violet-300/70"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            />
          </div>

          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-2">
            {[0, 1, 2].map((idx) => (
              <motion.span
                key={idx}
                className="h-6 w-1.5 rounded-full bg-cyan-200/85"
                animate={{ opacity: [0.2, 1, 0.2], scaleY: [0.6, 1.2, 0.6] }}
                transition={{ duration: 0.9, repeat: Infinity, delay: idx * 0.12 }}
              />
            ))}
          </div>
        </div>

        <p className="font-display text-xs uppercase tracking-[0.35em] text-cyan-200">
          Initializing Raptor Dynamics System...
        </p>
        <p className="font-display text-[11px] uppercase tracking-[0.3em] text-violet-200">{progress}%</p>
      </div>
    </motion.div>
  )
}
