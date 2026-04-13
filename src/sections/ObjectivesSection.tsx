import { CircuitBoard, Compass, Cpu, Flag, Handshake, Leaf, Radio, Trophy } from 'lucide-react'
import { SectionShell } from '../components/ui/SectionShell'
import { SectionTitle } from '../components/ui/SectionTitle'
import { pdfStructuredContent } from '../data/pdfExtracted'

const objectiveIcons = [CircuitBoard, Radio, Cpu, Compass, Trophy, Leaf, Handshake, Flag]

export function ObjectivesSection() {
  return (
    <SectionShell id="objectives">
      <SectionTitle
        eyebrow="Objectives"
        title="Operational Objectives Grid"
        description="Structured goals guiding technical depth, innovation culture, and real-world deployment impact."
      />

      <div className="objective-grid grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {pdfStructuredContent.objectives.map((objective, idx) => {
          const Icon = objectiveIcons[idx % objectiveIcons.length]
          return (
            <article
              key={objective}
              className="glass objective-card group relative overflow-hidden rounded-2xl border border-cyan-300/28 p-5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/0 via-transparent to-violet-300/0 transition duration-300 group-hover:from-cyan-300/15 group-hover:to-violet-300/12" />
              <div className="relative z-10">
                <div className="mb-3 inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 p-2">
                  <Icon className="objective-icon h-5 w-5 text-cyan-200" />
                </div>
                <p className="text-lg leading-7 text-cyan-100/90">{objective}</p>
              </div>
            </article>
          )
        })}
      </div>
    </SectionShell>
  )
}
