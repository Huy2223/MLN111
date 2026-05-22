import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import './Scene3D.css'

/* ── 3-D rise variant (default) ─────────────────────
   rotateX: 58° lay-flat → 0° facing viewer
   Card rises from below with perspective
   ─────────────────────────────────────────────────── */
function Scene3DRise({ roomRef, scrollYProgress, reduced, src, lines, eyebrow, sub }) {
  const rotateX     = useTransform(scrollYProgress, [0, 0.42, 0.80], reduced ? [0,0,0] : [58, 0, -4])
  const scale       = useTransform(scrollYProgress, [0, 0.42, 0.80], reduced ? [1,1,1] : [0.60, 1.0, 1.05])
  const cardY       = useTransform(scrollYProgress, [0, 0.42],        reduced ? ['0%','0%'] : ['32%', '0%'])
  const cardOpacity = useTransform(scrollYProgress, [0.06, 0.22, 0.72, 0.90], [0, 1, 1, 0])
  const capOpacity  = useTransform(scrollYProgress, [0.30, 0.50, 0.72, 0.90], [0, 1, 1, 0])
  const capY        = useTransform(scrollYProgress, [0.30, 0.54], reduced ? ['0px','0px'] : ['24px', '0px'])
  const scanX       = useTransform(scrollYProgress, [0.30, 0.55], ['-100%', '110%'])
  const scanOpacity = useTransform(scrollYProgress, [0.30, 0.38, 0.55, 0.60], [0, 0.6, 0.6, 0])

  return (
    <div ref={roomRef} className="s3d-room">
      <div className="s3d-sticky">
        <div className="s3d-ambient" />
        <div className="s3d-perspective">
          <motion.div className="s3d-card" style={{ rotateX, scale, opacity: cardOpacity, y: cardY }}>
            <img src={src} alt="" aria-hidden="true" draggable="false" />
            <div className="s3d-card-tint" />
            <motion.div className="s3d-scan" style={{ x: scanX, opacity: scanOpacity }} />
          </motion.div>
        </div>
        <Caption lines={lines} eyebrow={eyebrow} sub={sub} opacity={capOpacity} y={capY} />
        <div className="s3d-vignette" />
      </div>
    </div>
  )
}

/* ── Curtain reveal variant (flat) ───────────────────
   clip-path drops from top → full reveal
   Image zooms out slightly as curtain falls
   ─────────────────────────────────────────────────── */
function Scene3DCurtain({ roomRef, scrollYProgress, reduced, src, lines, eyebrow, sub }) {
  const clipPath   = useTransform(scrollYProgress, [0.05, 0.42], ['inset(0 0 100% 0)', 'inset(0 0 0% 0)'])
  const scale      = useTransform(scrollYProgress, [0.05, 0.42], reduced ? [1,1] : [1.10, 1.0])
  const imgOpacity = useTransform(scrollYProgress, [0.05, 0.20, 0.75, 0.92], [0, 1, 1, 0])
  const capOpacity = useTransform(scrollYProgress, [0.38, 0.55, 0.75, 0.92], [0, 1, 1, 0])
  const capY       = useTransform(scrollYProgress, [0.38, 0.58], reduced ? ['0px','0px'] : ['18px', '0px'])

  return (
    <div ref={roomRef} className="s3d-room s3d-room--flat">
      <div className="s3d-sticky">
        <div className="s3d-ambient" />
        <motion.div className="s3d-curtain-card" style={{ clipPath, opacity: imgOpacity }}>
          <motion.img src={src} alt="" aria-hidden="true" draggable="false" style={{ scale }} />
          <div className="s3d-card-tint" />
        </motion.div>
        <Caption lines={lines} eyebrow={eyebrow} sub={sub} opacity={capOpacity} y={capY} />
        <div className="s3d-vignette" />
      </div>
    </div>
  )
}

/* ── Door-swing variant (flip) ───────────────────────
   rotateY: -78° (thin edge from left) → 0° facing viewer
   Swings open like a panel/door from the left side
   Diagonal light streak appears as it opens
   ─────────────────────────────────────────────────── */
function Scene3DFlip({ roomRef, scrollYProgress, reduced, src, lines, eyebrow, sub }) {
  const rotateY     = useTransform(scrollYProgress, [0.02, 0.46, 0.82], reduced ? [0,0,0] : [-78, 0, 3])
  const scale       = useTransform(scrollYProgress, [0.02, 0.46, 0.82], reduced ? [1,1,1] : [0.80, 1.0, 1.03])
  const cardX       = useTransform(scrollYProgress, [0.02, 0.46],        reduced ? ['0%','0%'] : ['-18%', '0%'])
  const cardOpacity = useTransform(scrollYProgress, [0.04, 0.18, 0.74, 0.90], [0, 1, 1, 0])

  /* Diagonal light streak: visible mid-swing */
  const streakOpacity = useTransform(scrollYProgress, [0.08, 0.22, 0.40, 0.50], [0, 0.55, 0.55, 0])
  const streakX       = useTransform(scrollYProgress, [0.08, 0.46], ['-60%', '120%'])

  const capOpacity  = useTransform(scrollYProgress, [0.36, 0.54, 0.74, 0.90], [0, 1, 1, 0])
  const capY        = useTransform(scrollYProgress, [0.36, 0.56], reduced ? ['0px','0px'] : ['22px', '0px'])

  return (
    <div ref={roomRef} className="s3d-room s3d-room--flip">
      <div className="s3d-sticky">
        <div className="s3d-ambient s3d-ambient--left" />
        <div className="s3d-perspective s3d-perspective--flip">
          <motion.div
            className="s3d-card s3d-card--flip"
            style={{ rotateY, scale, opacity: cardOpacity, x: cardX }}
          >
            <img src={src} alt="" aria-hidden="true" draggable="false" />
            <div className="s3d-card-tint" />
            {/* diagonal streak instead of horizontal scan */}
            <motion.div className="s3d-streak" style={{ x: streakX, opacity: streakOpacity }} />
          </motion.div>
        </div>
        <Caption lines={lines} eyebrow={eyebrow} sub={sub} opacity={capOpacity} y={capY} />
        <div className="s3d-vignette" />
      </div>
    </div>
  )
}

/* ── Rack-focus variant ──────────────────────────────
   Starts blurred + oversized (like an out-of-focus lens),
   scrolling "pulls focus": blur clears, scale rushes back.
   Slight rotateX tilt adds 3-D depth during the pull.
   ─────────────────────────────────────────────────── */
function Scene3DFocus({ roomRef, scrollYProgress, reduced, src, lines, eyebrow, sub }) {
  const scale        = useTransform(scrollYProgress, [0.04, 0.46, 0.82], reduced ? [1,1,1] : [1.88, 1.0, 1.04])
  const rotateX      = useTransform(scrollYProgress, [0.04, 0.46],        reduced ? [0,0]   : [12, 0])
  const cardOpacity  = useTransform(scrollYProgress, [0.04, 0.20, 0.74, 0.90], [0, 1, 1, 0])
  /* Blur veil: static backdrop-filter, only opacity changes → compositor-only, no repaint */
  const veilOpacity  = useTransform(scrollYProgress, [0.04, 0.46], reduced ? [0,0] : [1, 0])
  const capOpacity   = useTransform(scrollYProgress, [0.38, 0.56, 0.74, 0.90], [0, 1, 1, 0])
  const capY         = useTransform(scrollYProgress, [0.38, 0.58], reduced ? ['0px','0px'] : ['20px', '0px'])

  return (
    <div ref={roomRef} className="s3d-room s3d-room--focus">
      <div className="s3d-sticky">
        <div className="s3d-ambient s3d-ambient--center" />
        <div className="s3d-perspective s3d-perspective--focus">
          <motion.div
            className="s3d-focus-card"
            style={{ scale, rotateX, opacity: cardOpacity }}
          >
            <img src={src} alt="" aria-hidden="true" draggable="false" />
            <div className="s3d-card-tint" />
            {/* backdrop-filter stays constant — only opacity animates (GPU compositor) */}
            {!reduced && <motion.div className="s3d-blur-veil" style={{ opacity: veilOpacity }} />}
          </motion.div>
        </div>
        <Caption lines={lines} eyebrow={eyebrow} sub={sub} opacity={capOpacity} y={capY} />
        <div className="s3d-vignette" />
      </div>
    </div>
  )
}

/* ── Shared caption ──────────────────────────────── */
function Caption({ lines, eyebrow, sub, opacity, y }) {
  return (
    <motion.div className="s3d-caption" style={{ opacity, y }} aria-hidden="true">
      <span className="s3d-eyebrow">{eyebrow}</span>
      <p className="s3d-heading">
        {lines.map((line, i) => (
          <span key={i}>{line}{i < lines.length - 1 && <br />}</span>
        ))}
      </p>
      <span className="s3d-sub">{sub}</span>
    </motion.div>
  )
}

/* ── Public component ────────────────────────────── */
export default function Scene3D({
  src     = '/images/CNDV.webp',
  eyebrow = 'Bước ngoặt của triết học',
  heading = 'Từ tư biện\nđến thực tiễn',
  sub     = 'Chủ nghĩa duy vật biện chứng',
  variant = 'rise',   /* 'rise' | 'curtain' | 'flip' */
  flat    = false,    /* shorthand: flat=true → variant='curtain' */
}) {
  const roomRef = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: roomRef, offset: ['start end', 'end start'] })
  const lines = heading.split('\n')
  const shared = { roomRef, scrollYProgress, reduced, src, lines, eyebrow, sub }

  const resolved = flat ? 'curtain' : variant
  if (resolved === 'curtain') return <Scene3DCurtain {...shared} />
  if (resolved === 'flip')    return <Scene3DFlip    {...shared} />
  if (resolved === 'zoom')    return <Scene3DFocus   {...shared} />
  if (resolved === 'focus')   return <Scene3DFocus   {...shared} />
  return <Scene3DRise {...shared} />
}
