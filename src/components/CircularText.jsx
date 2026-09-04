import { useId } from 'react'

export default function CircularText({
  text = 'FRESH INGREDIENTS • BIG FLAVOURS • MADE WITH LOVE •',
  className = '',
}) {
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '')

  return (
    <div className={`circular-text ${className}`} aria-label={text} role="img">
      <div className="circular-text-spin">
        <svg viewBox="0 0 240 240" aria-hidden="true">
          <defs>
            <path id={`circular-text-path-${id}`} d="M 120, 120 m -91, 0 a 91,91 0 1,1 182,0 a 91,91 0 1,1 -182,0" />
          </defs>
          <text>
            <textPath href={`#circular-text-path-${id}`} startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>
      </div>
      <span className="circular-text-arrow" aria-hidden="true">↓</span>
    </div>
  )
}