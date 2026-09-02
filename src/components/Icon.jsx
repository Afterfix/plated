// inline stroke icons — inherit currentColor
const P = {
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7M8 7h9v9" />,
  quote: <path d="M9 7H5v6h4l-2 4h3l2-4V7Zm10 0h-4v6h4l-2 4h3l2-4V7Z" />,
  spoon: (
    <>
      <path d="M12 12v9" />
      <ellipse cx="12" cy="7" rx="4" ry="5" />
    </>
  ),
  thumb: <path d="M7 22V11l5-8 1 1c.6.6.9 1.5.7 2.3L13 10h5a2 2 0 0 1 2 2.3l-1.2 7A2 2 0 0 1 16.8 22H7Zm0 0H4V11h3" />,
  hat: (
    <>
      <path d="M7 14a4 4 0 1 1 1.2-7.8A4 4 0 0 1 16 6a4 4 0 1 1 1 8" />
      <path d="M7.5 14v6h9v-6" />
    </>
  ),
  music: (
    <>
      <path d="M9 18V6l10-2v12" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="16" cy="16" r="3" />
    </>
  ),
  bowl: (
    <>
      <path d="M3 11h18a9 9 0 0 1-18 0Z" />
      <path d="M12 11c0-2.5 2-3.5 2-5.5M8.5 11c0-1.5 1-2.5 1-4" />
    </>
  ),
  cloche: (
    <>
      <path d="M3 19h18M5 19a7 7 0 0 1 14 0M12 12V9" />
      <circle cx="12" cy="8" r="1" />
    </>
  ),
}

export default function Icon({ name, className = 'h-5 w-5', strokeWidth = 1.7 }) {
  const p = P[name]
  if (!p) return null
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {p}
    </svg>
  )
}

export function Stars({ n = 5, className = 'h-4 w-4' }) {
  return (
    <span className="inline-flex text-sun">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
          <path d="m12 3 2.9 6 6.6.9-4.8 4.5 1.2 6.6L12 18l-5.9 3 1.2-6.6L2.5 9.9 9 9l3-6Z" />
        </svg>
      ))}
    </span>
  )
}
