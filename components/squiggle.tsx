function rng(seed: number) {
  let value = seed >>> 0 || 1
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0
    return value / 4294967296
  }
}

function seedFrom(text: string) {
  let hash = 2166136261
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }
  return hash >>> 0
}

function squigglePath(seed: string) {
  const rand = rng(seedFrom(seed))
  const width = 900
  const mid = 18
  const steps = 8
  const points: Array<[number, number]> = []

  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps
    const x = t * width + (rand() - 0.5) * 2
    const sag = Math.sin(t * Math.PI) * 1.4
    const jitter = (rand() - 0.5) * 2.4
    points.push([x, mid + sag + jitter])
  }

  let d = `M ${points[0][0].toFixed(1)} ${points[0][1].toFixed(1)}`
  for (let i = 1; i < points.length; i += 1) {
    const [x, y] = points[i]
    const [px, py] = points[i - 1]
    const cpx = (px + x) / 2 + (rand() - 0.5) * 6
    const cpy = (py + y) / 2 + (rand() - 0.5) * 2.2
    d += ` Q ${cpx.toFixed(1)} ${cpy.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`
  }
  return d
}

export function Squiggle({ seed }: { seed: string }) {
  const path = squigglePath(seed)

  return (
    <div className="squiggle-wrap" aria-hidden="true">
      <svg className="squiggle" viewBox="0 0 900 36" preserveAspectRatio="none">
        <path
          d={path}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  )
}
