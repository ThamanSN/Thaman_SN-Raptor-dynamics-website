import type { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

type SectionShellProps = PropsWithChildren<{
  id?: string
  className?: string
}>

export function SectionShell({ id, className = '', children }: SectionShellProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      className={`boot-reveal relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </motion.section>
  )
}
