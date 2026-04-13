import { useState } from 'react'
import type { FormEvent } from 'react'
import { SectionShell } from '../components/ui/SectionShell'
import { SectionTitle } from '../components/ui/SectionTitle'
import { GlowButton } from '../components/ui/GlowButton'

export function JoinSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <SectionShell id="join">
      <SectionTitle
        eyebrow="Join Us"
        title="Apply to the Mission"
        description="Collaborate on autonomous flight, embedded systems, and mission intelligence. Submit your profile and enter the Raptor pipeline."
      />

      <form onSubmit={handleSubmit} className="glass mx-auto max-w-4xl rounded-2xl p-6 sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
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
          <label className="block">
            <span className="mb-2 block text-sm uppercase tracking-[0.12em] text-cyan-200">Department</span>
            <input
              required
              name="department"
              type="text"
              className="w-full rounded-xl border border-cyan-300/35 bg-[#091126]/80 px-4 py-3 text-cyan-50 outline-none transition focus:border-cyan-200"
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm uppercase tracking-[0.12em] text-cyan-200">Interest</span>
            <input
              required
              name="interest"
              type="text"
              className="w-full rounded-xl border border-cyan-300/35 bg-[#091126]/80 px-4 py-3 text-cyan-50 outline-none transition focus:border-cyan-200"
            />
          </label>
        </div>

        <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <GlowButton type="submit">Transmit Application</GlowButton>
          {submitted && (
            <p className="font-display text-sm uppercase tracking-[0.2em] text-cyan-200">
              Application uplink successful
            </p>
          )}
        </div>
      </form>
    </SectionShell>
  )
}
