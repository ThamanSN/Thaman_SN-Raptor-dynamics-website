import { motion } from 'framer-motion'
import { SectionShell } from '../components/ui/SectionShell'
import { SectionTitle } from '../components/ui/SectionTitle'
import { HoloCard } from '../components/ui/HoloCard'
import { officeBearerRoles } from '../data/pdfExtracted'

const mentors = [
  { name: 'Dr. Nagendra Parashar', role: 'Patron', file: 'nagendra parashar.jpg' },
  { name: 'Dr. Rohini Nagapadma', role: 'Patron', file: 'rohini nagapadman.avif' },
  { name: 'Dr. H N Divakar', role: 'Chief Advisor', file: 'divakar h n.avif' },
  { name: 'Dr. Rajalekshmi Kishore', role: 'Chief Advisor', file: 'rajalekshmi kishore.avif' },
  { name: 'Dr. Ashok K', role: 'Faculty Advisor', file: 'ashok k.avif' },
  { name: 'Dr. Anand A', role: 'Faculty Advisor', file: 'anand.avif' },
]

export function TeamSection() {
  return (
    <SectionShell id="team">
      <SectionTitle
        eyebrow="Student Team"
        title="People Behind Raptor Dynamics"
        description="Synced leadership photos from the sinch Raptor Dynamics website and role grid from the official hierarchy."
      />

      <div className="mb-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {mentors.map((member, idx) => (
          <HoloCard key={member.name} delay={idx * 0.06}>
            <article className="group relative overflow-hidden rounded-2xl border border-cyan-300/35 bg-[#0a1124]/80 p-5 transition hover:border-cyan-300/60">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-300/0 via-cyan-300/0 to-violet-300/0 transition group-hover:from-cyan-300/10 group-hover:to-violet-300/10" />
              <div className="relative z-10 flex items-center gap-4">
                <img
                  src={`${import.meta.env.BASE_URL}${encodeURIComponent(member.file)}`}
                  alt={member.name}
                  className="h-16 w-16 rounded-xl border border-cyan-300/35 object-cover object-top"
                />
                <div>
                  <p className="font-display text-lg text-white">{member.name}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">{member.role}</p>
                </div>
              </div>
            </article>
          </HoloCard>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {officeBearerRoles.map((member, idx) => (
          <HoloCard key={member.role} delay={idx * 0.08}>
            <motion.article
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-violet-300/35 bg-[#0a1124]/80 p-6 transition hover:border-cyan-300/60"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-300/0 via-cyan-300/0 to-violet-300/0 transition group-hover:from-cyan-300/10 group-hover:to-violet-300/10" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full border border-cyan-300/15 bg-cyan-300/10 opacity-0 blur-sm transition duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/45 bg-cyan-300/8 font-display text-sm text-cyan-200">
                  AV
                </div>
                <h3 className="font-display text-2xl text-white">{member.role}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.15em] text-cyan-200">
                  Avatar Placeholder {String(idx + 1).padStart(2, '0')}
                </p>
                <p className="mt-4 text-lg text-cyan-100/80 opacity-0 transition duration-300 group-hover:opacity-100">
                  Profile details will reveal here once member names are assigned.
                </p>
              </div>
            </motion.article>
          </HoloCard>
        ))}
      </div>
    </SectionShell>
  )
}
