import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

type DroneFlybyProps = {
  compact?: boolean
}

export function DroneFlyby({ compact = false }: DroneFlybyProps) {
  return (
    <div className={`relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 ${compact ? 'py-6' : 'py-8'}`}>
      <div className="drone-trail relative overflow-hidden rounded-full border border-cyan-300/20 bg-[#080f21]/70 px-5 py-3">
        <motion.div
          className="drone-sweep inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.28em] text-cyan-200"
          initial={{ x: '-15%' }}
          whileInView={{ x: '108%' }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 4.8, ease: 'linear', repeat: Infinity }}
        >
          <Send className="h-4 w-4" />
          <span>Aerial Corridor Active</span>
        </motion.div>
      </div>
    </div>
  )
}
