import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { GlowButton } from '../components/ui/GlowButton'
import { HudOverlay } from '../components/effects/HudOverlay'
import { SkyLayer2D } from '../components/effects/SkyLayer2D'

type HeroSectionProps = {
  onLaunch: () => void
}

export function HeroSection({ onLaunch }: HeroSectionProps) {
  const clubLogoSrc = `${import.meta.env.BASE_URL}club-logo.jpeg.jpeg`
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [audioEnabled, setAudioEnabled] = useState(false)
  const audioContextRef = useRef<AudioContext | null>(null)
  const oscillatorRef = useRef<OscillatorNode | null>(null)
  const gainRef = useRef<GainNode | null>(null)

  const { scrollY } = useScroll()
  const heroContentY = useTransform(scrollY, [0, 420], [0, 110])
  const heroContentOpacity = useTransform(scrollY, [0, 520], [1, 0.45])

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 20
      const y = (event.clientY / window.innerHeight - 0.5) * 14
      setOffset({ x, y })
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useEffect(() => {
    return () => {
      oscillatorRef.current?.stop()
      audioContextRef.current?.close()
    }
  }, [])

  const toggleAmbient = async () => {
    if (audioEnabled) {
      oscillatorRef.current?.stop()
      oscillatorRef.current = null
      gainRef.current = null
      await audioContextRef.current?.close()
      audioContextRef.current = null
      setAudioEnabled(false)
      return
    }

    const ctx = new window.AudioContext()
    const oscillator = ctx.createOscillator()
    const gain = ctx.createGain()

    oscillator.type = 'sawtooth'
    oscillator.frequency.value = 48
    gain.gain.value = 0.012

    oscillator.connect(gain)
    gain.connect(ctx.destination)
    oscillator.start()

    audioContextRef.current = ctx
    oscillatorRef.current = oscillator
    gainRef.current = gain
    setAudioEnabled(true)
  }

  return (
    <section className="relative isolate min-h-screen overflow-hidden px-5 pb-20 pt-44 sm:px-8 sm:pt-32 lg:px-12">
      <SkyLayer2D />
      <div className="hud-grid-bg" />
      <div className="radar-orb left-[-10%] top-[10%]" />
      <div className="radar-orb right-[-8%] top-[35%]" />
      <HudOverlay />

      <motion.div
        className="absolute left-[8%] top-[18%] h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl"
        animate={{ x: offset.x * -1.1, y: offset.y * -0.8 }}
        transition={{ type: 'spring', stiffness: 40, damping: 16 }}
      />
      <motion.div
        className="absolute bottom-[15%] right-[10%] h-52 w-52 rounded-full bg-violet-500/15 blur-3xl"
        animate={{ x: offset.x * 0.85, y: offset.y * 0.9 }}
        transition={{ type: 'spring', stiffness: 40, damping: 16 }}
      />

      <motion.div
        style={{ y: heroContentY, opacity: heroContentOpacity }}
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center"
      >
        <motion.img
          initial={{ opacity: 0, y: 14, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: [0.88, 1.15, 1.05] }}
          transition={{ delay: 0.12, duration: 1.2, times: [0, 0.7, 1] }}
          src={clubLogoSrc}
          alt="Raptor Dynamics Club Logo"
          className="mb-6 h-28 w-28 rounded-xl border border-cyan-300/45 bg-black/35 p-1.5 shadow-neon sm:h-32 sm:w-32"
        />

        <motion.div
          className="pointer-events-none absolute top-0 h-32 w-32 rounded-xl border border-cyan-200/45"
          animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.12, 0.45] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-xs uppercase tracking-[0.36em] text-cyan-300"
        >
          Aerospace Innovation Node
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="hero-title-glow mt-5 max-w-4xl font-display text-5xl uppercase leading-[1.08] tracking-[0.08em] text-white sm:text-6xl lg:text-7xl"
        >
          RAPTOR DYNAMICS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-6 max-w-3xl text-xl text-cyan-100/85 sm:text-2xl"
        >
          Drone Innovation Lab | The National Institute of Engineering, Mysore
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.58, duration: 0.65 }}
          className="tagline-anim mt-4 font-display text-sm uppercase tracking-[0.35em] text-violet-200 glitch-text"
        >
          Innovate. Integrate. Elevate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.68, duration: 0.7 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <GlowButton>Explore Lab</GlowButton>
          <GlowButton variant="ghost" onClick={onLaunch}>
            Launch Drone
          </GlowButton>
          <GlowButton variant="ghost" onClick={toggleAmbient}>
            {audioEnabled ? 'Mute Ambience' : 'Enable Ambience'}
          </GlowButton>
        </motion.div>
      </motion.div>
    </section>
  )
}
