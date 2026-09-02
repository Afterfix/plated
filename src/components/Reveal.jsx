import { useReveal } from '../lib/useReveal.js'

/**
 * Fades / slides children in when they enter the viewport.
 * variant: 'up' (default) | 'left' | 'right'
 */
export default function Reveal({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const [ref, visible] = useReveal()
  const base = variant === 'left' ? 'reveal reveal-left' : variant === 'right' ? 'reveal reveal-right' : 'reveal'
  return (
    <Tag
      ref={ref}
      style={{ '--reveal-delay': `${delay}ms` }}
      className={`${base} ${visible ? 'is-visible' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
