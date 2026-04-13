import { motion } from 'framer-motion'
import { SectionShell } from '../components/ui/SectionShell'
import { SectionTitle } from '../components/ui/SectionTitle'
import { pdfStructuredContent } from '../data/pdfExtracted'

export function VisionSection() {
  return (
    <SectionShell id="vision">
      <SectionTitle
        eyebrow="Vision"
        title="Student-Driven UAV Innovation"
        description="A mission-led direction focused on autonomous flight systems, real deployments, and interdisciplinary engineering excellence."
      />

      <article className="vision-grid-wrap glass relative overflow-hidden rounded-3xl border border-cyan-300/35 p-10 text-center">
        <div className="vision-moving-grid" />
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-4xl font-display text-2xl leading-relaxed text-cyan-100 sm:text-3xl"
        >
          {pdfStructuredContent.vision}
        </motion.p>
        <span className="vision-underline" />
      </article>
    </SectionShell>
  )
}
