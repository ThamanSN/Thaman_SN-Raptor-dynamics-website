import { useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LoadingScreen } from './components/effects/LoadingScreen'
import { CursorGlow } from './components/effects/CursorGlow'
import { ParticleField } from './components/effects/ParticleField'
import { HeroSection } from './sections/HeroSection'
import { AboutSection } from './sections/AboutSection'
import { VisionSection } from './sections/VisionSection'
import { MissionSection } from './sections/MissionSection'
import { ObjectivesSection } from './sections/ObjectivesSection'
import { TeamSection } from './sections/TeamSection'
import { InstitutionSection } from './sections/InstitutionSection'
import { JoinSection } from './sections/JoinSection'
import { SiteFooter } from './sections/SiteFooter'
gsap.registerPlugin(ScrollTrigger)

function App() {
  const [loading, setLoading] = useState(true)
  const [launchPulse, setLaunchPulse] = useState(false)
  const [raptorMode, setRaptorMode] = useState(false)
  const keyBufferRef = useRef('')

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.15,
      smoothWheel: true,
    })

    return () => {
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.boot-reveal')
    cards.forEach((node) => {
      gsap.fromTo(
        node,
        { opacity: 0, y: 30, filter: 'blur(6px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: node,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        },
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((item) => item.kill())
    }
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      keyBufferRef.current = (keyBufferRef.current + event.key.toLowerCase()).slice(-12)
      if (keyBufferRef.current.includes('raptor')) {
        setRaptorMode((prev) => !prev)
        keyBufferRef.current = ''
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const handleLaunch = () => {
    setLaunchPulse(true)
    window.setTimeout(() => setLaunchPulse(false), 520)
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className={`relative overflow-x-hidden bg-night text-white ${launchPulse ? 'launch-pulse' : ''} ${raptorMode ? 'raptor-mode' : ''}`}>
      {/* Cinematic boot splash for command-center feel */}
      <AnimatePresence>{loading && <LoadingScreen onComplete={() => setLoading(false)} />}</AnimatePresence>
      <CursorGlow />
      <ParticleField />

      {raptorMode && (
        <div className="fixed bottom-5 right-5 z-[120] rounded-full border border-violet-200/60 bg-violet-300/15 px-4 py-2 text-xs font-display uppercase tracking-[0.24em] text-violet-100">
          Raptor Mode Engaged
        </div>
      )}

      <main className="relative z-10">
        <HeroSection onLaunch={handleLaunch} />
        <AboutSection />
        <VisionSection />
        <MissionSection />
        <ObjectivesSection />
        <TeamSection />
        <InstitutionSection />
        <JoinSection />
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
