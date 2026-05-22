import { Fragment } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { PAIRS } from '../data/pairs'
import Scene3D from './Scene3D'
import './ScrollPairs.css'

const EASE = [0.23, 1, 0.32, 1]

/* Per-pair accent for art panels */
const VIS = {
  'marx-lenin':        { accent: 'rgba(201,168,76,0.75)',  bg: null },
  'berkeley-mach':     { accent: 'rgba(150,70,210,0.72)',  bg: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(95,35,155,0.28) 0%, transparent 70%)' },
  'plato-hegel':       { accent: 'rgba(60,120,210,0.72)',  bg: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(18,52,125,0.32) 0%, transparent 70%)' },
  'descartes-hume':    { accent: 'rgba(200,122,52,0.72)',  bg: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(115,52,16,0.32) 0%, transparent 70%)' },
  'kant':              { accent: 'rgba(130,155,195,0.75)', bg: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(40,65,115,0.32) 0%, transparent 70%)' },
  'feuerbach-holbach': { accent: 'rgba(170,125,72,0.75)',  bg: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(100,60,20,0.34) 0%, transparent 70%)' },
}

/* staggered item variant helper */
const item = (i) => ({
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0,
    transition: { duration: 0.58, ease: EASE, delay: 0.18 + i * 0.09 } },
})

/* ── Photo stack ───────────────────────────────── */
function PhotoStack({ pair }) {
  return (
    <div
      className="pr-photo-stack"
      style={{ gridTemplateRows: `repeat(${pair.figs.length}, 1fr)` }}
    >
      {pair.figs.map((fig) => (
        <motion.div
          key={fig.name}
          className="pr-photo-slot"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ originX: 0.5, originY: 0.5 }}
        >
          <img src={fig.src} alt={fig.name} draggable="false" />
          <div className="pr-photo-plate">
            <span className="pr-photo-plate-name">{fig.name}</span>
            <span className="pr-photo-plate-years">{fig.years}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

/* ── Art stack (no real photos) ────────────────── */
function ArtStack({ pair }) {
  const { accent, bg } = VIS[pair.id]
  return (
    <div
      className="pr-art-stack"
      style={{
        background: `${bg}, #07070e`,
        gridTemplateRows: `repeat(${pair.figs.length}, 1fr)`,
      }}
    >
      {pair.figs.map((fig) => (
        <div key={fig.name} className="pr-art-slot">
          <div className="pr-art-portrait" style={{ borderColor: accent, color: accent }}>
            <span className="pr-art-initial">{fig.ph}</span>
            <span className="pr-art-label">{fig.name}</span>
            <span className="pr-art-years">{fig.years}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ── Pair row ──────────────────────────────────── */
function PairRow({ pair, index }) {
  const reduced = useReducedMotion()
  const isEven  = index % 2 === 1
  const xOffset = isEven ? 48 : -48
  const Body    = pair.Body

  const visualV = {
    hidden:  reduced ? { opacity: 0 } : { opacity: 0, x: xOffset },
    visible: { opacity: 1, x: 0,
      transition: { duration: 0.78, ease: EASE } },
  }

  const hasPhotos = pair.figs.every((f) => f.src)

  return (
    <motion.article
      className={`pr ${isEven ? 'pr--even' : 'pr--odd'}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {/* ── Visual column — IS the grid cell ── */}
      <motion.div
        className={`pr-vis ${isEven ? 'pr-vis--right' : 'pr-vis--left'}`}
        variants={visualV}
      >
        {hasPhotos ? <PhotoStack pair={pair} /> : <ArtStack pair={pair} />}
        <div className={`pr-vis-fade ${isEven ? 'pr-vis-fade--left' : 'pr-vis-fade--right'}`} />
      </motion.div>

      {/* ── Content column — IS the grid cell ── */}
      <div className="pr-content">
        <motion.span className="pr-school" variants={item(0)}>{pair.school}</motion.span>

        <motion.h2 className="pr-title" variants={item(1)}>{pair.title}</motion.h2>

        <motion.div className="pr-figs" variants={item(2)}>
          {pair.figs.map((fig) => (
            <div key={fig.name} className="pr-fig-row">
              <span className="pr-fig-name">{fig.name}</span>
              <span className="pr-fig-years">{fig.years}</span>
            </div>
          ))}
        </motion.div>

        <motion.p className="pr-tagline" variants={item(3)}>{pair.tagline}</motion.p>

        <motion.div className="pr-body" variants={item(4)}>
          <Body />
        </motion.div>
      </div>
    </motion.article>
  )
}

/* ── Container ─────────────────────────────────── */
export default function ScrollPairs() {
  return (
    <section className="scroll-pairs" aria-label="Các trường phái triết học">
      <Scene3D />
      {PAIRS.map((pair, i) => (
        <Fragment key={pair.id}>
          <PairRow pair={pair} index={i} />
          {pair.id === 'berkeley-mach' && (
            <Scene3D
              flat
              src="/images/CNDTKQ.jpg"
              eyebrow="Chủ nghĩa duy tâm khách quan"
              heading={"Ý niệm tuyệt đối\nvà thế giới hiện tượng"}
              sub="Plato & Hegel"
            />
          )}
          {pair.id === 'descartes-hume' && (
            <Scene3D
              variant="zoom"
              src="/images/TKTB.jpg"
              eyebrow="Thuyết không thể biết"
              heading={"Vật tự nó —\nmãi ngoài tầm với"}
              sub="Immanuel Kant"
            />
          )}
          {pair.id === 'plato-hegel' && (
            <Scene3D
              variant="flip"
              src="/images/Skepticism.jpg"
              eyebrow="Thuyết hoài nghi"
              heading={"Hoài nghi như\nphương pháp"}
              sub="Descartes & Hume"
            />
          )}
        </Fragment>
      ))}
    </section>
  )
}
