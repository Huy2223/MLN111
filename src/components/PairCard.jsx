import { useInView } from '../hooks/useInView'
import './PairCard.css'

function Figure({ fig }) {
  return (
    <div className="fig">
      <div className="fig-img">
        {/* Replace placeholder with real image when ready */}
        <img
          src={fig.src}
          alt={fig.name}
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
        <div className="fig-ph" aria-hidden="true">{fig.ph}</div>
      </div>
      <div className="fig-name">{fig.name}</div>
      <div className="fig-years">{fig.years}</div>
    </div>
  )
}

export default function PairCard({ pair, index, onOpen }) {
  const [ref, inView] = useInView()

  const handleKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onOpen(pair.id)
    }
  }

  return (
    <div
      ref={ref}
      className={`card ${pair.isHero ? 'card--hero' : ''} ${inView ? 'card--visible' : ''}`}
      style={{ transitionDelay: inView ? `${index * 60}ms` : '0ms' }}
      onClick={() => onOpen(pair.id)}
      onKeyDown={handleKey}
      tabIndex={0}
      role="button"
      aria-label={`Xem nội dung ${pair.title}`}
    >
      <div className="card-glow" aria-hidden="true" />

      <div className="card-inner">
        {/* Portrait column */}
        <div className="card-left">
          <p className="card-school">{pair.school}</p>
          <div className="portraits">
            <Figure fig={pair.figs[0]} />
            <span className="amp" aria-hidden="true">&amp;</span>
            <Figure fig={pair.figs[1]} />
          </div>
        </div>

        {/* Text column (always shown; in hero it sits beside portraits) */}
        <div className="card-right">
          <p className="card-name">{pair.title}</p>
          <p className="card-tagline">{pair.tagline}</p>
          <div className="card-cta" aria-hidden="true">
            <span className="cta-line" />
            Xem chi tiết
          </div>
        </div>
      </div>
    </div>
  )
}
