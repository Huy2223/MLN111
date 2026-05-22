import { PAIRS } from '../data/pairs'
import PairCard from './PairCard'
import './PairsGrid.css'

export default function PairsGrid({ onOpen }) {
  return (
    <section className="pairs">
      <div className="pairs-header">
        <p className="pairs-eyebrow">Các trường phái triết học</p>
        <h2 className="pairs-title">Những nhà tư tưởng</h2>
      </div>

      <div className="pairs-grid">
        {PAIRS.map((pair, i) => (
          <PairCard key={pair.id} pair={pair} index={i} onOpen={onOpen} />
        ))}
      </div>
    </section>
  )
}
