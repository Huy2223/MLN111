import { useState } from 'react'
import Hero from './components/Hero'
import Intro from './components/Intro'
import ScrollPairs from './components/ScrollPairs'
import Modal from './components/Modal'
import './App.css'

export default function App() {
  const [activeId, setActiveId] = useState(null)

  return (
    <>
      <Hero />
      <Intro />
      <ScrollPairs />

      <footer className="site-footer">
        <p>Triết học Mác–Lênin · Phần III · Lý Luận Nhận Thức</p>
      </footer>

      <Modal activeId={activeId} onClose={() => setActiveId(null)} />
    </>
  )
}
