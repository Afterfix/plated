/** Text set on a circular path — the spinning yellow "SCROLL DOWN" disc. */
export default function CircleText({ text, size = 150, className = '', color = '#121111', fontSize = 13, children }) {
  const id = `cp-${text.replace(/[^a-z]/gi, '').slice(0, 6)}-${size}`
  const r = 38
  return (
    <div className={`relative grid place-items-center ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-disc" aria-hidden="true">
        <defs>
          <path id={id} d={`M 50 50 m -${r} 0 a ${r} ${r} 0 1 1 ${r * 2} 0 a ${r} ${r} 0 1 1 -${r * 2} 0`} />
        </defs>
        <text fill={color} style={{ fontFamily: 'Roboto, Inter, sans-serif', fontSize, fontWeight: 700, letterSpacing: '0.08em' }}>
          <textPath href={`#${id}`} startOffset="0">{text}</textPath>
        </text>
      </svg>
      {children ? <div className="absolute inset-0 grid place-items-center">{children}</div> : null}
    </div>
  )
}
