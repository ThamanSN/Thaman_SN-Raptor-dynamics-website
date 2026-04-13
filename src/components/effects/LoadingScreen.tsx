import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

type LoadingScreenProps = {
  onComplete: () => void
}

type LaunchPhase = 'countdown' | 'takeoff'

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [countdown, setCountdown] = useState(3)
  const [phase, setPhase] = useState<LaunchPhase>('countdown')

  const takeoffParticles = useMemo(
    () =>
      Array.from({ length: 24 }).map(() => ({
        left: `${12 + Math.random() * 76}%`,
        duration: `${0.55 + Math.random() * 0.35}s`,
        delay: `${Math.random() * 0.25}s`,
      })),
    [],
  )

  useEffect(() => {
    const countdownInterval = window.setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.clearInterval(countdownInterval)
          window.setTimeout(() => setPhase('takeoff'), 520)
          return 1
        }
        return prev - 1
      })
    }, 920)

    const doneTimer = window.setTimeout(() => {
      onComplete()
    }, 4800)

    return () => {
      window.clearInterval(countdownInterval)
      window.clearTimeout(doneTimer)
    }
  }, [onComplete])

  const progress = phase === 'countdown' ? (4 - countdown) * 23 : 100

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[#030511]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="glass relative flex w-[min(94vw,620px)] flex-col items-center gap-6 rounded-3xl border border-cyan-300/30 px-6 py-9 sm:px-10">
        <div className="relative h-[150px] w-full max-w-[440px] overflow-hidden rounded-2xl border border-cyan-300/30 bg-[#091126]/80">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(88,242,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(88,242,255,0.12)_1px,transparent_1px)] bg-[size:26px_26px]" />

          {phase === 'takeoff' && (
            <>
              {takeoffParticles.map((particle, index) => (
                <span
                  key={index}
                  className="takeoff-particle"
                  style={{
                    left: particle.left,
                    animationDuration: particle.duration,
                    animationDelay: particle.delay,
                  }}
                />
              ))}
            </>
          )}

          <motion.div
            className={`absolute left-1/2 top-[58%] h-[24px] w-[74px] -translate-x-1/2 rounded-full border border-cyan-200/60 bg-gradient-to-r from-cyan-300/55 via-cyan-100/75 to-amber-300/55 ${phase === 'takeoff' ? 'drone-takeoff-blur' : ''}`}
            animate={
              phase === 'countdown'
                ? { y: [0, -1.5, 0], scale: [1, 1.03, 1] }
                : { y: [-6, -95], scale: [1, 0.94], opacity: [1, 0.84] }
            }
            transition={
              phase === 'countdown'
                ? { duration: 0.32, repeat: Infinity, ease: 'easeInOut' }
                : { duration: 1.35, ease: [0.15, 0.78, 0.22, 1] }
            }
          >
            <span className="absolute -left-3 top-[2px] h-5 w-5 rounded-full border border-cyan-100/60" />
            <span className="absolute -right-3 top-[2px] h-5 w-5 rounded-full border border-cyan-100/60" />
            <span className="absolute left-1/2 top-1/2 h-[8px] w-[32px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-50/80" />
          </motion.div>

          <div className="absolute bottom-3 left-3 right-3 h-2 overflow-hidden rounded-full border border-cyan-300/30 bg-black/40">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-300/80 to-amber-300/80"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            />
          </div>

          <motion.div
            className="absolute right-3 top-3 rounded-md border border-cyan-200/45 bg-[#07101f]/75 px-2.5 py-1 font-display text-[11px] uppercase tracking-[0.22em] text-cyan-100"
            key={phase === 'countdown' ? `t-${countdown}` : 'liftoff'}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {phase === 'countdown' ? `T-${countdown}` : 'Takeoff'}
          </motion.div>
        </div>

        <p className="font-display text-xs uppercase tracking-[0.35em] text-cyan-200">
          {phase === 'countdown' ? 'Launch Sequence Initiated' : 'Drone Ascending To Patrol Altitude'}
        </p>
        <p className="font-display text-[11px] uppercase tracking-[0.3em] text-amber-200">{Math.round(progress)}%</p>
      </div>
    </motion.div>
  )
}
