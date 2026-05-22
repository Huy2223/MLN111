import { useEffect, useRef } from 'react'
import { PAIRS } from '../data/pairs'
import './Modal.css'

function ModalFig({ fig }) {
  return (
    <div className="m-fig">
      <div className="m-fig-img">
        <img
          src={fig.src}
          alt={fig.name}
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
        <div className="m-fig-ph" aria-hidden="true">{fig.ph}</div>
      </div>
      <div className="m-fig-name">{fig.name}</div>
    </div>
  )
}

export default function Modal({ activeId, onClose }) {
  const overlayRef = useRef(null)
  const modalRef   = useRef(null)
  const pair = PAIRS.find((p) => p.id === activeId)
  const isOpen = Boolean(pair)

  /* close with fade-out (faster than open — Emil asymmetric timing) */
  const handleClose = () => {
    const overlay = overlayRef.current
    if (!overlay) return
    overlay.classList.add('modal-overlay--closing')
    setTimeout(() => {
      overlay.classList.remove('modal-overlay--closing')
      onClose()
    }, 180)
  }

  /* keyboard & scroll lock */
  useEffect(() => {
    if (!isOpen) return

    const onKey = (e) => { if (e.key === 'Escape') handleClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    modalRef.current?.scrollTo(0, 0)

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  const { Body } = pair

  return (
    <div
      ref={overlayRef}
      className="modal-overlay modal-overlay--open"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => { if (e.target === overlayRef.current) handleClose() }}
    >
      <div ref={modalRef} className="modal" role="document">
        <button className="modal-close" onClick={handleClose} aria-label="Đóng">
          ✕
        </button>

        <p className="m-school">{pair.school}</p>
        <h2 id="modal-title" className="m-title">{pair.title}</h2>
        <p className="m-names">{pair.names}</p>

        <div className="m-tags">
          {pair.tags.map((t) => (
            <span key={t} className="m-tag">{t}</span>
          ))}
        </div>

        <div className="m-rule" />

        <div className="m-portraits">
          {pair.figs.map((f) => (
            <ModalFig key={f.name} fig={f} />
          ))}
        </div>

        <div className="m-body">
          <Body />
        </div>
      </div>
    </div>
  )
}
