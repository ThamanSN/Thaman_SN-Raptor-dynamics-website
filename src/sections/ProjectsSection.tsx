import { motion } from 'framer-motion'
import { SectionShell } from '../components/ui/SectionShell'
import { SectionTitle } from '../components/ui/SectionTitle'
import { HoloCard } from '../components/ui/HoloCard'
import { projectItems } from '../data/labData'

export function ProjectsSection() {
  return (
    <SectionShell id="projects">
      <SectionTitle
        eyebrow="Projects"
        title="Live Mission Systems Under Development"
        description="From GPS-denied navigation to swarm intelligence operations, each platform is engineered as a deployable aerospace mission stack."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {projectItems.map((project, index) => (
          <HoloCard key={project.title} delay={index * 0.1}>
            <motion.article
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-cyan-300/40 bg-slate-950/65 p-6"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-300/20 blur-2xl" />
                <div className="absolute -bottom-10 -left-5 h-32 w-32 rounded-full bg-violet-400/20 blur-2xl" />
              </div>

              <p className="font-display text-xs uppercase tracking-[0.25em] text-cyan-300">Project {index + 1}</p>
              <h3 className="mt-3 font-display text-2xl text-white">{project.title}</h3>
              <p className="mt-4 text-lg text-cyan-100/80">{project.mission}</p>
              <p className="mt-4 text-sm uppercase tracking-[0.15em] text-violet-200">{project.stack}</p>
            </motion.article>
          </HoloCard>
        ))}
      </div>
    </SectionShell>
  )
}
