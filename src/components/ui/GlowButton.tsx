import { useState } from 'react'
import type { ButtonHTMLAttributes, MouseEvent, PropsWithChildren } from 'react'

type GlowButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'ghost'
  }
>

export function GlowButton({
  children,
  className = '',
  variant = 'primary',
  onClick,
  ...rest
}: GlowButtonProps) {
  const [ripple, setRipple] = useState({ x: 0, y: 0, active: false })

  const base =
    'relative overflow-hidden rounded-full px-7 py-3 font-display text-sm uppercase tracking-[0.22em] transition duration-300 active:scale-[0.98]'

  const style =
    variant === 'primary'
      ? 'bg-cyan-300/15 text-cyan-100 border border-cyan-300/50 shadow-neon hover:bg-cyan-200/20'
      : 'bg-violet-400/10 text-violet-100 border border-violet-300/50 shadow-violet hover:bg-violet-300/20'

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    setRipple({ x: event.clientX - bounds.left, y: event.clientY - bounds.top, active: true })
    window.setTimeout(() => setRipple((prev) => ({ ...prev, active: false })), 460)
    onClick?.(event)
  }

  return (
    <button className={`${base} ${style} ${className}`} onClick={handleClick} {...rest}>
      {ripple.active && (
        <span
          className="pointer-events-none absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100/60 animate-[ping_0.45s_ease-out_forwards]"
          style={{ left: ripple.x, top: ripple.y }}
        />
      )}
      {children}
    </button>
  )
}
