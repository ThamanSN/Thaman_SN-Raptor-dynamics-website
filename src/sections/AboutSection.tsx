import { motion } from 'framer-motion'
import { Bot, Map, Sprout, ToyBrick } from 'lucide-react'
import { SectionShell } from '../components/ui/SectionShell'
import { SectionTitle } from '../components/ui/SectionTitle'
import { pdfStructuredContent } from '../data/pdfExtracted'

const areas = [
  {
    icon: ToyBrick,
    title: 'Drone Systems',
    text: 'Hands-on design, fabrication, and deployment of UAV platforms.',
  },
  {
    icon: Bot,
    title: 'AI Applications',
    text: 'Intelligent flight behavior, autonomy, and computer-vision powered missions.',
  },
  {
    icon: Map,
    title: 'Aerial Mapping',
    text: 'Real-time mapping and surveillance workflows for critical scenarios.',
  },
  {
    icon: Sprout,
    title: 'Agriculture & Relief',
    text: 'Field-ready solutions for precision agriculture and disaster response.',
  },
]

export function AboutSection() {
  return (
    <SectionShell id="about">
      <SectionTitle
        eyebrow="About The Club"
        title="RAPTOR DYNAMICS"
        description="Official club profile integrated from your uploaded document."
      />

      <motion.article
        initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="glass relative overflow-hidden rounded-3xl border border-cyan-300/30 p-6 sm:p-8"
      >
        <div className="pointer-events-none absolute -right-16 top-[-60px] h-52 w-52 rounded-full bg-violet-400/20 blur-3xl" />
        <p className="glitch-text text-lg leading-8 text-cyan-100/90 sm:text-xl">{pdfStructuredContent.about}</p>
      </motion.article>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {areas.map((area) => {
          const Icon = area.icon
          return (
            <motion.article
              key={area.title}
              whileHover={{ y: -7, scale: 1.02 }}
              className="glass group rounded-2xl border border-cyan-300/30 p-6 transition duration-300"
            >
              <Icon className="h-8 w-8 animate-pulse text-cyan-300 transition group-hover:text-violet-300" />
              <h3 className="mt-4 font-display text-xl text-white">{area.title}</h3>
              <p className="mt-3 text-lg text-cyan-100/80">{area.text}</p>
            </motion.article>
          )
        })}
      </div>
    </SectionShell>
  )
}
