type SectionTitleProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="font-display text-xs uppercase tracking-[0.35em] text-cyan-300">{eyebrow}</p>
      <h2 className="glitch-text mt-4 font-display text-3xl text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg text-cyan-100/80">{description}</p>
    </div>
  )
}
