import { SectionShell } from '../components/ui/SectionShell'
import { SectionTitle } from '../components/ui/SectionTitle'
import {
  leadershipHierarchy,
  officeBearerRoles,
  pdfRawExtractedText,
  pdfStructuredContent,
} from '../data/pdfExtracted'

export function PdfInfoSection() {
  return (
    <SectionShell id="pdf-info">
      <SectionTitle
        eyebrow="Uploaded PDF Content"
        title="Raptor Dynamics PDF Information"
        description="Complete information extracted from the uploaded PDF, including a structured summary and the full raw extraction output."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="glass rounded-2xl p-6">
          <p className="font-display text-sm uppercase tracking-[0.2em] text-cyan-300">Source</p>
          <h3 className="mt-2 font-display text-2xl text-white">{pdfStructuredContent.sourceTitle}</h3>
          <p className="mt-2 text-cyan-100/85">{pdfStructuredContent.institute}</p>
          <p className="mt-1 text-violet-200">{pdfStructuredContent.clubName}</p>
          <p className="mt-1 text-cyan-100/75">{pdfStructuredContent.tagline}</p>

          <h4 className="mt-6 font-display text-lg text-white">About</h4>
          <p className="mt-2 text-cyan-100/85">{pdfStructuredContent.about}</p>

          <h4 className="mt-6 font-display text-lg text-white">Vision</h4>
          <p className="mt-2 text-cyan-100/85">{pdfStructuredContent.vision}</p>
        </article>

        <article className="glass rounded-2xl p-6">
          <h4 className="font-display text-lg text-white">Mission</h4>
          <ul className="mt-3 space-y-2 text-cyan-100/85">
            {pdfStructuredContent.mission.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>

          <h4 className="mt-6 font-display text-lg text-white">Objectives</h4>
          <ul className="mt-3 space-y-2 text-cyan-100/85">
            {pdfStructuredContent.objectives.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>

          <h4 className="mt-6 font-display text-lg text-white">Leadership and Faculty</h4>
          <div className="mt-3 space-y-3 text-cyan-100/85">
            {Object.entries(leadershipHierarchy).map(([group, members]) => (
              <div key={group}>
                <p className="font-display text-sm uppercase tracking-[0.12em] text-violet-200">{group}</p>
                {members.map((member) => (
                  <p key={member.name}>{member.name} - {member.role}</p>
                ))}
              </div>
            ))}

            <p className="pt-2 font-display text-sm uppercase tracking-[0.12em] text-violet-200">Student Team Roles</p>
            {officeBearerRoles.map((item) => (
              <p key={item.role}>{item.role}</p>
            ))}
          </div>
        </article>
      </div>

      <article className="glass mt-6 rounded-2xl p-6">
        <h4 className="font-display text-lg text-white">Full Raw Extracted Text</h4>
        <p className="mt-2 text-sm text-cyan-100/70">
          The block below is the full text output extracted from the uploaded PDF.
        </p>
        <pre className="mt-4 max-h-[28rem] overflow-auto whitespace-pre-wrap rounded-xl border border-cyan-300/25 bg-[#081124]/70 p-4 text-sm leading-6 text-cyan-100/85">
          {pdfRawExtractedText}
        </pre>
      </article>
    </SectionShell>
  )
}
