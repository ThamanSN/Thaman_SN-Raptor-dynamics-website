export function SkyLayer2D() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      <div className="sky-gradient-shift" />
      <div className="sky-haze sky-haze-1" />
      <div className="sky-haze sky-haze-2" />
      <div className="sky-haze sky-haze-3" />
      <div className="sky-stars" />
      <div className="sky-streak sky-streak-a" />
      <div className="sky-streak sky-streak-b" />
      <div className="sky-cloud cloud-a" />
      <div className="sky-cloud cloud-b" />
      <div className="sky-cloud cloud-c" />
    </div>
  )
}
