import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import ScrollPairs from './components/ScrollPairs'
import VideoPage from './components/VideoPage'
import AIUsage from './components/AIUsage'
import './App.css'

export default function App() {
  const [view, setView] = useState('home')

  return (
    <>
      <NavBar view={view} setView={setView} />

      {view === 'home' && (
        <>
          <Hero />
          <Intro />
          <ScrollPairs />
          <footer className="site-footer">
            <div className="site-footer-ornament">
              <div className="site-footer-line" />
              <div className="site-footer-gem" />
              <div className="site-footer-line" />
            </div>
            <p className="site-footer-label">Triết học Mác–Lênin · Phần III · Lý Luận Nhận Thức</p>
            <p className="site-footer-sub">FPT University · MLN111 · Summer 2026</p>
          </footer>
        </>
      )}

      {view === 'video'    && <VideoPage />}
      {view === 'ai-usage' && <AIUsage />}
    </>
  )
}
