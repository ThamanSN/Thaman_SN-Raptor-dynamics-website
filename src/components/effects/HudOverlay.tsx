import { useEffect, useState } from 'react'

type Telemetry = {
  altitude: number
  speed: number
  signal: number
  gps: string
}

export function HudOverlay() {
  const [telemetry, setTelemetry] = useState<Telemetry>({
    altitude: 182,
    speed: 63,
    signal: 94,
    gps: 'LOCKED',
  })

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTelemetry((prev) => ({
        altitude: Math.max(160, Math.min(280, prev.altitude + (Math.random() - 0.5) * 8)),
        speed: Math.max(45, Math.min(92, prev.speed + (Math.random() - 0.5) * 6)),
        signal: Math.max(66, Math.min(99, prev.signal + (Math.random() - 0.5) * 4)),
        gps: Math.random() > 0.96 ? 'REACQUIRE' : 'LOCKED',
      }))
    }, 900)

    return () => window.clearInterval(timer)
  }, [])

  const items = [
    { label: 'Altitude', value: `${telemetry.altitude.toFixed(0)} m` },
    { label: 'Speed', value: `${telemetry.speed.toFixed(0)} km/h` },
    { label: 'Signal', value: `${telemetry.signal.toFixed(0)} %` },
    { label: 'GPS', value: telemetry.gps },
  ]

  return (
    <div className="pointer-events-none absolute inset-x-4 top-4 z-[14] grid grid-cols-2 gap-3 sm:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="rounded-lg border border-cyan-300/35 bg-[#071126]/55 px-3 py-2 backdrop-blur-sm">
          <p className="text-[10px] font-display uppercase tracking-[0.2em] text-cyan-300/90">{item.label}</p>
          <p className="text-sm font-semibold text-cyan-100">{item.value}</p>
        </div>
      ))}
    </div>
  )
}
