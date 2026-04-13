export function SiteFooter() {
  const links = ['IG', 'IN', 'YT']

  return (
    <footer className="relative z-10 border-t border-cyan-300/20 bg-black/30 px-5 py-10 backdrop-blur-md sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        <div>
          <img
            src="/club-logo.jpeg.jpeg"
            alt="Raptor Dynamics Club Logo"
            className="mb-2 h-10 w-10 rounded-md border border-cyan-300/35 bg-black/35 p-1"
          />
          <p className="font-display text-base uppercase tracking-[0.22em] text-cyan-200">Raptor Dynamics</p>
          <p className="text-sm text-cyan-100/70">The National Institute of Engineering, Mysore</p>
          <p className="mt-1 font-display text-[11px] uppercase tracking-[0.3em] text-violet-200/90">
            Innovate. Integrate. Elevate.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {links.map((label) => (
            <a
              key={label}
              href="#"
              className="scan-link rounded-full border border-cyan-300/40 p-2 text-cyan-100 transition hover:border-violet-300 hover:text-violet-200"
              aria-label="Social"
            >
              <span className="font-display text-xs tracking-[0.15em]">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
