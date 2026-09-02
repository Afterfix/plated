import { useEffect, useState } from 'react'

/**
 * Restaurant photos that swap on a timer with a perspective rotateX flip —
 * the new image drops in from a wide-top / narrow-bottom trapezoid and
 * unfolds flat. Pauses while the tab is hidden or motion is reduced.
 */
export default function FlipCarousel({ images = [], interval = 1600, className = '', imgClassName = '' }) {
  const [i, setI] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const id = setInterval(() => {
      if (!document.hidden) setI((n) => (n + 1) % images.length)
    }, interval)
    return () => clearInterval(id)
  }, [images.length, interval])

  return (
    <div className={`relative overflow-hidden rounded-[26px] [perspective:1400px] ${className}`}>
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt="Inside the dining room"
          loading={idx === 0 ? 'eager' : 'lazy'}
          className={`h-full w-full object-cover ${imgClassName} ${
            idx === i ? 'flip-in relative' : 'absolute inset-0 opacity-0'
          }`}
        />
      ))}
    </div>
  )
}
