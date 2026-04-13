import { motion } from 'framer-motion'

export function DroneCanvas() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="glass relative h-[340px] overflow-hidden rounded-3xl border border-cyan-300/35 sm:h-[420px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(69,193,255,0.18),transparent_42%),radial-gradient(circle_at_78%_20%,rgba(169,116,255,0.2),transparent_38%),radial-gradient(circle_at_50%_78%,rgba(62,249,255,0.16),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(70,200,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(70,200,255,0.12)_1px,transparent_1px)] bg-[size:34px_34px] opacity-40" />
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/40 shadow-[0_0_40px_rgba(88,242,255,0.3)]" />

      <motion.div
        className="absolute left-[14%] top-[46%] h-2 w-[72%] rounded-full bg-cyan-300/70 shadow-[0_0_24px_rgba(88,242,255,0.7)]"
        animate={{ rotate: [0, 2, 0, -2, 0] }}
        transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-1/2 top-[42%] h-[16%] w-2 -translate-x-1/2 rounded-full bg-violet-300/70 shadow-[0_0_20px_rgba(169,116,255,0.65)]"
        animate={{ height: ['16%', '19%', '16%'] }}
        transition={{ duration: 3.3, repeat: Infinity, ease: 'easeInOut' }}
      />

      <p className="absolute bottom-5 left-5 font-display text-xs uppercase tracking-[0.24em] text-cyan-100/90">
        Tactical Drone Visualization Layer
      </p>
    </motion.div>
  )
}
