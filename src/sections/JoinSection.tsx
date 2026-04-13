import { useState } from 'react'
import type { FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { SectionShell } from '../components/ui/SectionShell'
import { SectionTitle } from '../components/ui/SectionTitle'
import { GlowButton } from '../components/ui/GlowButton'

export function JoinSection() {
  const [submitted, setSubmitted] = useState(false)
  const clubLogoSrc = `${import.meta.env.BASE_URL}club-logo.jpeg.jpeg`
  const nieLogoSrc = `${import.meta.env.BASE_URL}nie-logo.svg`
  const joinHighlights = [
    'Hands-on build and flight testing experience',
    'Mentorship from faculty and senior project teams',
    'Opportunities in competitions and field missions',
  ]

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <SectionShell id="join">
      <SectionTitle
        eyebrow="Join Us"
        title="Join Raptor Dynamics"
        description="Interested in drone systems, AI vision, flight electronics, or field operations? Join us to build, test, and deploy real UAV solutions at NIE Mysuru."
      />

      <div className="grid gap-6 lg:grid-cols-[1.05fr_1.15fr]">
        <article className="glass rounded-2xl border border-cyan-300/30 p-6 sm:p-8">
          <p className="font-display text-xs uppercase tracking-[0.24em] text-cyan-300">Mission Focus</p>
          <h3 className="mt-3 font-display text-2xl text-white sm:text-3xl">Built for deployment, not just demonstration.</h3>
          <p className="mt-4 text-lg text-cyan-100/80">
            Our UAV systems are engineered to solve practical field problems with measurable outcomes.
          </p>

          <div className="mt-6 space-y-4">
            {joinHighlights.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-cyan-300/20 bg-[#0a1526]/65 px-4 py-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-cyan-300" />
                <p className="text-cyan-100/85">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex items-center gap-4 rounded-xl border border-cyan-300/25 bg-[#091326]/70 p-4">
            <img src={clubLogoSrc} alt="Raptor Dynamics" className="h-11 w-11 rounded-md border border-cyan-300/40 bg-black/35 p-1" />
            <img src={nieLogoSrc} alt="NIE Mysuru" className="h-10 w-auto rounded bg-white/95 p-1" />
          </div>
        </article>

        <form onSubmit={handleSubmit} className="glass rounded-2xl border border-cyan-300/30 p-6 sm:p-8">
          <p className="font-display text-xs uppercase tracking-[0.24em] text-cyan-300">Send Your Interest</p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm uppercase tracking-[0.12em] text-cyan-200">Name</span>
              <input
                required
                name="name"
                type="text"
                className="w-full rounded-xl border border-cyan-300/35 bg-[#091126]/80 px-4 py-3 text-cyan-50 outline-none transition focus:border-cyan-200"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm uppercase tracking-[0.12em] text-cyan-200">Email</span>
              <input
                required
                name="email"
                type="email"
                className="w-full rounded-xl border border-cyan-300/35 bg-[#091126]/80 px-4 py-3 text-cyan-50 outline-none transition focus:border-cyan-200"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm uppercase tracking-[0.12em] text-cyan-200">Area of Interest</span>
              <input
                required
                name="interest"
                type="text"
                className="w-full rounded-xl border border-cyan-300/35 bg-[#091126]/80 px-4 py-3 text-cyan-50 outline-none transition focus:border-cyan-200"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm uppercase tracking-[0.12em] text-cyan-200">Message</span>
              <textarea
                required
                name="message"
                rows={4}
                className="w-full resize-none rounded-xl border border-cyan-300/35 bg-[#091126]/80 px-4 py-3 text-cyan-50 outline-none transition focus:border-cyan-200"
              />
            </label>
          </div>

          <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <GlowButton type="submit">Send Message</GlowButton>
            {submitted && (
              <p className="font-display text-sm uppercase tracking-[0.2em] text-cyan-200">Application uplink successful</p>
            )}
          </div>
        </form>
        </div>
    </SectionShell>
  )
}
