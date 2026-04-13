import { useEffect, useRef, useState } from 'react'

export function CursorGlow() {
  const [point, setPoint] = useState({ x: -100, y: -100 })
  const [locked, setLocked] = useState(false)
  const [visible, setVisible] = useState(false)
  const targetRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY }
      if (!visible) setVisible(true)
    }

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      if (!target) return
      const interactive = Boolean(target.closest('button, a, input, textarea, [data-interactive="true"]'))
      setLocked(interactive)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)

    const tick = () => {
      setPoint((prev) => ({
        x: prev.x + (targetRef.current.x - prev.x) * 0.22,
        y: prev.y + (targetRef.current.y - prev.y) * 0.22,
      }))
      rafRef.current = window.requestAnimationFrame(tick)
    }

    rafRef.current = window.requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current)
      }
    }
  }, [visible])

  return (
    <>
      <div
        className={`pointer-events-none fixed z-[80] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl transition-all duration-200 ${
          locked ? 'h-36 w-36 bg-violet-300/20' : 'h-28 w-28 bg-cyan-300/15'
        }`}
        style={{ left: point.x, top: point.y, opacity: visible ? 1 : 0 }}
      />
      <div
        className={`pointer-events-none fixed z-[81] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-150 ${
          locked ? 'h-8 w-8 border-violet-200/90' : 'h-5 w-5 border-cyan-200/70'
        }`}
        style={{ left: point.x, top: point.y, opacity: visible ? 1 : 0 }}
      />
    </>
  )
}
