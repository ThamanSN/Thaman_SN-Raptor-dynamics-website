import { motion } from 'framer-motion'
import { Rocket } from 'lucide-react'
import { SectionShell } from '../components/ui/SectionShell'
import { SectionTitle } from '../components/ui/SectionTitle'
import { HoloCard } from '../components/ui/HoloCard'
import { pdfStructuredContent } from '../data/pdfExtracted'

export function MissionSection() {
  return (
    <SectionShell id="mission">
      <SectionTitle
        eyebrow="Mission"
        title="Execution Doctrine"
        description="Mission priorities that guide innovation, execution, and impact."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {pdfStructuredContent.mission.map((item, idx) => (
          <HoloCard key={item} delay={idx * 0.08}>
            <motion.article
              whileHover={{ y: -8, scale: 1.01 }}
              className="glass group mission-card rounded-2xl border border-violet-300/35 p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/50 bg-cyan-300/10">
                <Rocket className="h-5 w-5 text-cyan-200" />
              </div>
              <p className="text-xl leading-8 text-cyan-100/90">{item}</p>
            </motion.article>
          </HoloCard>
        ))}
      </div>
    </SectionShell>
  )
}
