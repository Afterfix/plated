import { useReveal } from '../lib/useReveal.js'

/**
 * House entrance for card grids (chefs + feature tiles): each tile rises and
 * rotates from a slight tilt, settling to `settle` degrees (0 = square).
 * Plays once when it enters the viewport.
 */
export default function RiseTilt({ from = -9, settle = 0, delay = 0, className = '', children }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? `rotate(${settle}deg)` : `translateY(64px) rotate(${from}deg)`,
        transition:
          'opacity .7s ease, transform .8s cubic-bezier(.16,1,.3,1)',
      }}
      className={className}
    >
      {children}
    </div>
  )
}
