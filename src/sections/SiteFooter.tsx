export function SiteFooter() {
  const clubLogoSrc = `${import.meta.env.BASE_URL}club-logo.jpeg.jpeg`
  const nieLogoSrc = `${import.meta.env.BASE_URL}nie-logo.svg`
  const quickLinks = [
    { href: '#about', label: 'About Us' },
    { href: '#vision', label: 'Vision & Mission' },
    { href: '#projects', label: 'Projects' },
    { href: '#join', label: 'Join Club' },
  ]
  const committeeLinks = [
    { href: '#team', label: 'Patrons' },
    { href: '#team', label: 'Chief Advisors' },
    { href: '#team', label: 'Faculty Advisors' },
    { href: '#team', label: 'Office Bearers' },
  ]
  const connectLinks = [
    { href: 'https://instagram.com', label: 'Instagram' },
    { href: 'https://linkedin.com', label: 'LinkedIn' },
    { href: 'https://youtube.com', label: 'YouTube' },
    { href: '#join', label: 'Contact Us' },
  ]

  return (
    <footer className="relative z-10 border-t border-cyan-300/20 bg-black/30 px-5 py-10 backdrop-blur-md sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <img
            src={clubLogoSrc}
            alt="Raptor Dynamics Club Logo"
            className="mb-2 h-10 w-10 rounded-md border border-cyan-300/35 bg-black/35 p-1"
          />
          <p className="font-display text-base uppercase tracking-[0.22em] text-cyan-200">Raptor Dynamics</p>
          <p className="text-sm text-cyan-100/70">The National Institute of Engineering, Mysore</p>
          <p className="mt-1 font-display text-[11px] uppercase tracking-[0.3em] text-amber-200/90">
            Innovate. Integrate. Elevate.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <img src={nieLogoSrc} alt="NIE Mysuru" className="h-8 w-auto rounded bg-white/95 p-1" />
            <p className="font-display text-[10px] uppercase tracking-[0.24em] text-cyan-100/75">
              Club Active · Recruiting Members
            </p>
          </div>
        </div>

        <div>
          <p className="mb-3 font-display text-xs uppercase tracking-[0.24em] text-cyan-200">Club</p>
          <div className="flex flex-col gap-2">
            {quickLinks.map((item) => (
              <a key={item.label} href={item.href} className="scan-link text-sm text-cyan-100/80 hover:text-cyan-100">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 font-display text-xs uppercase tracking-[0.24em] text-cyan-200">Committee</p>
          <div className="flex flex-col gap-2">
            {committeeLinks.map((item) => (
              <a key={item.label} href={item.href} className="scan-link text-sm text-cyan-100/80 hover:text-cyan-100">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 font-display text-xs uppercase tracking-[0.24em] text-cyan-200">Connect</p>
          <div className="flex flex-col gap-2">
            {connectLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="scan-link text-sm text-cyan-100/80 hover:text-cyan-100"
              >
                {item.label}
              </a>
            ))}
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
