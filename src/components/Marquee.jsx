/**
 * Seamless horizontal ticker. Renders its children twice and translates
 * the track by -50%. `reverse` scrolls the other way, `pauseOnHover` stops it.
 */
export default function Marquee({
  children,
  duration = 34,
  reverse = false,
  pauseOnHover = true,
  gap = 'gap-4',
  className = '',
}) {
  return (
    <div className={`group w-full overflow-hidden ${className}`}>
      <div
        className={`flex w-max ${gap} ${reverse ? 'animate-marquee-rev' : 'animate-marquee'} ${
          pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''
        }`}
        style={{ '--marquee-duration': `${duration}s` }}
      >
        <div className={`flex shrink-0 ${gap}`} aria-hidden="false">
          {children}
        </div>
        <div className={`flex shrink-0 ${gap}`} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
