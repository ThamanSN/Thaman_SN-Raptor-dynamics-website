export function SiteFooter() {
  const clubLogoSrc = `${import.meta.env.BASE_URL}club-logo.jpeg.jpeg`
  const nieLogoSrc = `${import.meta.env.BASE_URL}nie-logo.svg`
  const quickLinks = [
    { href: '#', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#vision', label: 'Vision & Mission' },
    { href: '#mission', label: 'Projects' },
    { href: '#objectives', label: 'Applications' },
    { href: '#team', label: 'Events' },
  ]
  const getInvolvedLinks = [
    { href: '#join', label: 'Join the Club' },
    { href: '#team', label: 'Upcoming Events' },
    { href: '#mission', label: 'Competitions' },
    { href: '#team', label: 'Meet the Team' },
  ]

  return (
    <footer className="relative z-10 border-t border-cyan-300/20 bg-black/30 px-5 py-10 backdrop-blur-md sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.35fr_1.15fr_2fr]">
        <div>
          <img
            src={clubLogoSrc}
            alt="Raptor Dynamics Club Logo"
            className="mb-2 h-10 w-10 rounded-md border border-cyan-300/35 bg-black/35 p-1"
          />
          <p className="font-display text-base uppercase tracking-[0.22em] text-cyan-200">Raptor Dynamics</p>
          <p className="mt-1 font-display text-[11px] uppercase tracking-[0.3em] text-cyan-100/90">
            Innovate. Integrate. Elevate.
          </p>
          <p className="mt-3 text-sm text-cyan-100/75">
            Pioneering the future of drone innovation, one flight at a time.
          </p>
        </div>

        <div>
          <img src={nieLogoSrc} alt="NIE Mysuru" className="mb-3 h-12 w-auto rounded bg-white/95 p-1" />
          <p className="font-display text-base uppercase tracking-[0.2em] text-cyan-200">NIE Mysuru</p>
          <p className="mt-2 text-sm text-cyan-100/75">The National Institute of Engineering, Mysuru</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="mb-3 font-display text-xs uppercase tracking-[0.24em] text-cyan-200">Quick Links</p>
            <div className="flex flex-col gap-2">
              {quickLinks.map((item) => (
                <a key={item.label} href={item.href} className="scan-link text-sm text-cyan-100/80 hover:text-cyan-100">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 font-display text-xs uppercase tracking-[0.24em] text-cyan-200">Get Involved</p>
            <div className="flex flex-col gap-2">
              {getInvolvedLinks.map((item) => (
                <a key={item.label} href={item.href} className="scan-link text-sm text-cyan-100/80 hover:text-cyan-100">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 w-full max-w-7xl border-t border-cyan-300/20 pt-4">
        <p className="font-display text-[11px] uppercase tracking-[0.22em] text-cyan-100/60">
          © 2026 Raptor Dynamics - The National Institute of Engineering, Mysuru. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
