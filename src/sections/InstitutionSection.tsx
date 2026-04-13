import { Building2, Mail, MapPinned, Phone } from 'lucide-react'
import { SectionShell } from '../components/ui/SectionShell'
import { SectionTitle } from '../components/ui/SectionTitle'
import { pdfStructuredContent } from '../data/pdfExtracted'

export function InstitutionSection() {
  return (
    <SectionShell id="institution">
      <SectionTitle
        eyebrow="Institution"
        title={pdfStructuredContent.instituteFormal}
        description="Official institutional identity and primary contact details."
      />

      <article className="glass institution-panel rounded-3xl border border-cyan-300/30 p-6 sm:p-8">
        <div className="mb-6 flex items-center gap-4 rounded-2xl border border-cyan-300/20 bg-[#081124]/70 p-4">
          <img
            src={`${import.meta.env.BASE_URL}nie-logo.svg`}
            alt="The National Institute of Engineering, Mysuru"
            className="h-16 w-16 rounded-xl border border-cyan-300/35 object-contain bg-white/90 p-1"
          />
          <div>
            <p className="font-display text-xs uppercase tracking-[0.24em] text-violet-200">Institutional Identity</p>
            <p className="mt-1 text-lg text-cyan-100/95">The National Institute of Engineering (Autonomous under VTU), Mysuru</p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-cyan-300/20 bg-[#081124]/70 p-5">
            <p className="mb-2 font-display text-xs uppercase tracking-[0.24em] text-violet-200">Address</p>
            <p className="flex items-start gap-3 text-lg text-cyan-100/90">
              <MapPinned className="mt-1 h-5 w-5 text-cyan-300" />
              {pdfStructuredContent.address}
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-300/20 bg-[#081124]/70 p-5">
            <p className="mb-2 font-display text-xs uppercase tracking-[0.24em] text-violet-200">Contact</p>
            <p className="mb-2 flex items-start gap-3 text-lg text-cyan-100/90">
              <Phone className="mt-1 h-5 w-5 text-cyan-300" />
              {pdfStructuredContent.contact.phone}
            </p>
            <p className="mb-2 flex items-start gap-3 text-lg text-cyan-100/90">
              <Mail className="mt-1 h-5 w-5 text-cyan-300" />
              {pdfStructuredContent.contact.email}
            </p>
            <p className="flex items-start gap-3 text-lg text-cyan-100/90">
              <Building2 className="mt-1 h-5 w-5 text-cyan-300" />
              {pdfStructuredContent.contact.website}
            </p>
          </div>
        </div>
      </article>
    </SectionShell>
  )
}
