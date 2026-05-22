import { useState, useRef, useEffect, useCallback } from 'react'
import { PAIRS } from '../data/pairs'
import './FullscreenPair.css'

export default function FullscreenPair({ onOpen }) {
  const pair = PAIRS.find((p) => p.id === 'marx-lenin')

  // Phase controls entry animation vs ready-for-hover transitions
  // 'hidden' → 'entering' → 'ready'
  const [phase, setPhase] = useState('hidden')
  const [hovered, setHovered] = useState(null) // 'left' | 'right' | null

  const leftSideRef  = useRef(null)
  const rightSideRef = useRef(null)
  const leftInnerRef  = useRef(null)  // parallax target
  const rightInnerRef = useRef(null)

  useEffect(() => {
    // Short delay so browser paints before transition fires
    const t1 = setTimeout(() => setPhase('entering'), 60)
    // After entry animation completes, switch to fast-transition mode
    const t2 = setTimeout(() => setPhase('ready'), 60 + 900)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  // Parallax: direct style.transform on inner element (Emil: avoid CSS vars on parent)
  const makeHandlers = useCallback((sideRef, innerRef, side) => ({
    onMouseMove(e) {
      const rect = sideRef.current?.getBoundingClientRect()
      if (!rect || !innerRef.current) return
      const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 22
      const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 14
      innerRef.current.style.transform = `translate(${x}px, ${y}px)`
    },
    onMouseEnter() { setHovered(side) },
    onMouseLeave() {
      if (innerRef.current) innerRef.current.style.transform = 'translate(0, 0)'
      setHovered(null)
    },
    onClick()       { onOpen('marx-lenin') },
    onKeyDown(e)    { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen('marx-lenin') } },
  }), [onOpen])

  const leftHandlers  = makeHandlers(leftSideRef,  leftInnerRef,  'left')
  const rightHandlers = makeHandlers(rightSideRef, rightInnerRef, 'right')

  const [marxFig, leninFig] = pair.figs

  return (
    <section className={`fs fs--${phase}`} aria-label={pair.title}>

      {/* ── Top meta ─────────────────────────────── */}
      <header className="fs-header" aria-hidden="true">
        <span className="fs-school">{pair.school}</span>
        <h2 className="fs-pairtitle">{pair.title}</h2>
      </header>

      {/* ── LEFT: Marx ───────────────────────────── */}
      <div
        ref={leftSideRef}
        className={`fs-side fs-side--left${hovered === 'right' ? ' fs-side--dim' : ''}`}
        role="button"
        tabIndex={0}
        aria-label={`${marxFig.name} — nhấn để xem chi tiết`}
        {...leftHandlers}
      >
        {/* Image layer */}
        <div className="fs-img-outer">
          <div ref={leftInnerRef} className="fs-img-inner">
            <img src="/images/Marx.jpg" alt={marxFig.name} draggable="false" />
          </div>
        </div>

        {/* Gradient vignette */}
        <div className="fs-vignette" />

        {/* Info */}
        <div className="fs-info fs-info--left">
          <p className="fs-name">{marxFig.name}</p>
          <p className="fs-years">{marxFig.years}</p>
          <span className="fs-cta">Khám phá &rarr;</span>
        </div>
      </div>

      {/* ── Divider ──────────────────────────────── */}
      <div className="fs-divider" aria-hidden="true" />

      {/* ── RIGHT: Lenin ─────────────────────────── */}
      <div
        ref={rightSideRef}
        className={`fs-side fs-side--right${hovered === 'left' ? ' fs-side--dim' : ''}`}
        role="button"
        tabIndex={0}
        aria-label={`${leninFig.name} — nhấn để xem chi tiết`}
        {...rightHandlers}
      >
        <div className="fs-img-outer">
          <div ref={rightInnerRef} className="fs-img-inner">
            <img src="/images/Lenin.jpg" alt={leninFig.name} draggable="false" />
          </div>
        </div>

        <div className="fs-vignette" />

        <div className="fs-info fs-info--right">
          <p className="fs-name">{leninFig.name}</p>
          <p className="fs-years">{leninFig.years}</p>
          <span className="fs-cta">&larr; Khám phá</span>
        </div>
      </div>

      {/* ── Bottom CTA ───────────────────────────── */}
      <div className="fs-bottom" aria-hidden="true">
        <span className="fs-hint">Nhấn để khám phá triết học của họ</span>
      </div>

    </section>
  )
}
