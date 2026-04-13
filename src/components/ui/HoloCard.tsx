import { useRef } from 'react'
import { motion } from 'framer-motion'
import type { MouseEvent, PropsWithChildren } from 'react'

type HoloCardProps = PropsWithChildren<{
  className?: string
  delay?: number
}>

export function HoloCard({ className = '', delay = 0, children }: HoloCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height
    const rotateY = (px - 0.5) * 10
    const rotateX = (0.5 - py) * 9
    ref.current.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
  }

  const onLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.6 }}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`transition-transform duration-200 [transform-style:preserve-3d] ${className}`}
    >
      {children}
    </motion.div>
  )
}
