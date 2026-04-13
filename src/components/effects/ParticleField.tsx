import { useMemo } from 'react'

type Particle = {
  left: string
  top: string
  delay: string
  duration: string
}

export function ParticleField() {
  // Precompute static particles once to avoid rerender churn.
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 45 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${3 + Math.random() * 5}s`,
      })),
    [],
  )

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      {particles.map((particle, index) => (
        <span
          key={index}
          className="absolute h-[3px] w-[3px] rounded-full bg-cyan-200/75 animate-pulse"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  )
}
