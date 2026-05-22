import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const bgRef = useRef(null)

  useEffect(() => {
    let ticking = false

    const onMouseMove = (e) => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        if (!bgRef.current) return
        const x = (e.clientX / window.innerWidth  - 0.5) * 18
        const y = (e.clientY / window.innerHeight - 0.5) *  9
        bgRef.current.style.transform = `translate(${x}px, ${y}px)`
        ticking = false
      })
    }

    document.addEventListener('mousemove', onMouseMove)
    return () => document.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <section className="hero">
      <div className="hero-bg" ref={bgRef} />
      <div className="hero-grid" />

      <div className="hero-content">
        <p className="hero-eyebrow">Triết học Mác–Lênin · Phần III · Trang 257–283</p>
        <h1 className="hero-title">
          Lý Luận
          <em>Nhận Thức</em>
        </h1>
        <p className="hero-sub">Lý luận nhận thức của chủ nghĩa duy vật biện chứng</p>
        <div className="hero-question">Con người có thể biết thế giới không?</div>
      </div>

      <div className="scroll-hint">
        <span>Khám phá</span>
        <div className="scroll-bar" />
      </div>
    </section>
  )
}
