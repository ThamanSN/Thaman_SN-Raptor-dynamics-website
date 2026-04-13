import { SectionShell } from '../components/ui/SectionShell'
import { SectionTitle } from '../components/ui/SectionTitle'
import { milestones } from '../data/labData'

export function AchievementsSection() {
  return (
    <SectionShell id="achievements">
      <SectionTitle
        eyebrow="Achievements and Events"
        title="Competition Timeline and Mission Milestones"
        description="A snapshot of recent breakthroughs in national drone competitions, hackathons, and aerospace innovation events."
      />

      <div className="relative ml-2 border-l border-cyan-300/35 pl-8">
        {milestones.map((milestone) => (
          <div key={milestone.event} className="relative mb-10 last:mb-0">
            <span className="absolute -left-[2.23rem] top-2 h-3 w-3 rounded-full bg-cyan-300 shadow-neon" />
            <p className="font-display text-sm uppercase tracking-[0.25em] text-violet-200">{milestone.year}</p>
            <h3 className="mt-1 font-display text-2xl text-white">{milestone.event}</h3>
            <p className="mt-2 text-lg text-cyan-100/80">{milestone.detail}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}
