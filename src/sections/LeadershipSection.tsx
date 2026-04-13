import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'
import { SectionShell } from '../components/ui/SectionShell'
import { SectionTitle } from '../components/ui/SectionTitle'
import { leadershipHierarchy } from '../data/pdfExtracted'

export function LeadershipSection() {
  return (
    <SectionShell id="leadership">
      <SectionTitle
        eyebrow="Leadership"
        title="Patron and Faculty Command"
        description="Structured advisory hierarchy integrated from the official club record."
      />

      <div className="space-y-7">
        {Object.entries(leadershipHierarchy).map(([group, members], idx) => (
          <div key={group}>
            <h3 className="mb-4 font-display text-xs uppercase tracking-[0.32em] text-violet-200">{group}</h3>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {members.map((member) => (
                <motion.article
                  key={member.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: idx * 0.07, duration: 0.55 }}
                  whileHover={{ y: -6 }}
                  className="glass rounded-2xl border border-violet-300/30 p-6 shadow-neon transition hover:border-cyan-300/50"
                >
                  <div className="mb-4 inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 p-2">
                    <BadgeCheck className="h-5 w-5 text-cyan-200" />
                  </div>
                  <h4 className="font-display text-2xl text-white">{member.name}</h4>
                  <p className="mt-2 text-lg text-cyan-100/85">{member.role}</p>
                </motion.article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
