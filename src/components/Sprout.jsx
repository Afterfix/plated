/** Little green sprig doodle that flanks every red script eyebrow. */
export default function Sprout({ flip = false, className = 'h-5 w-8' }) {
  return (
    <svg
      viewBox="0 0 40 24"
      className={className}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
      fill="none"
      stroke="#00942A"
      strokeWidth="3"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 20C14 20 24 15 34 4" />
      <path d="M12 21C18 19 24 14 27 7" />
      <path d="M4 12c6 1 10 4 12 9" />
    </svg>
  )
}
