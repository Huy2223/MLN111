import { motion, useReducedMotion } from 'framer-motion'
import './Intro.css'

const EASE = [0.23, 1, 0.32, 1]

/* ── Variants ──────────────────────────────────── */
const sectionV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.06 } },
}

/* Eyebrow: clip-path wipe left → right */
const eyebrowV = {
  hidden:  { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
  visible: { opacity: 1, clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 0.50, ease: EASE } },
}

/* Headline: blur dissolve + slight rise */
const headlineV = (reduced) => ({
  hidden:  reduced
    ? { opacity: 0 }
    : { opacity: 0, filter: 'blur(14px)', y: 12 },
  visible: { opacity: 1, filter: 'blur(0px)', y: 0,
    transition: { duration: 0.90, ease: EASE } },
})

/* Body: clean fade-up */
const bodyV = (reduced) => ({
  hidden:  reduced ? { opacity: 0 } : { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0,
    transition: { duration: 0.68, ease: EASE } },
})

/* Ornament: children stagger */
const ornamentV = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

/* Lines grow from center outward */
const lineLeftV = {
  hidden:  { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.58, ease: EASE } },
}
const lineRightV = {
  hidden:  { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.58, ease: EASE } },
}

/* Gem pops in with spring */
const gemV = {
  hidden:  { opacity: 0, scale: 0.4 },
  visible: { opacity: 1, scale: 1,
    transition: { type: 'spring', duration: 0.55, bounce: 0.35 } },
}

/* ── Component ─────────────────────────────────── */
export default function Intro() {
  const reduced = useReducedMotion()

  return (
    <>
      <motion.section
        className="intro"
        variants={sectionV}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.p className="eyebrow" variants={eyebrowV}>
          Câu hỏi trung tâm
        </motion.p>

        <motion.p className="intro-headline" variants={headlineV(reduced)}>
          Đây không phải câu hỏi vô dụng.
          <br />
          Nếu câu trả lời là <strong>"không biết được"</strong> — khoa học chỉ mô tả hiện tượng
          bề ngoài, không bao giờ chạm được bản chất thực của thế giới.
        </motion.p>

        <motion.p className="intro-body" variants={bodyV(reduced)}>
          Phần III giải quyết câu hỏi này không bằng triết lý thuần túy — mà bằng cách đặt{' '}
          <strong>thực tiễn làm trung tâm</strong>. Bốn trường phái. Bốn câu trả lời khác nhau.
        </motion.p>
      </motion.section>

      {/* Ornament draw: lines extend from gem outward */}
      <motion.div
        className="ornament"
        variants={ornamentV}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        <motion.div
          className="ornament-line"
          variants={lineLeftV}
          style={{ transformOrigin: 'right center' }}
        />
        <motion.div className="ornament-gem" variants={gemV} />
        <motion.div
          className="ornament-line"
          variants={lineRightV}
          style={{ transformOrigin: 'left center' }}
        />
      </motion.div>
    </>
  )
}
