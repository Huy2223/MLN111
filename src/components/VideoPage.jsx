import './VideoPage.css'

const VIDEO_ID    = 'aEjxFdbjk_c'
const VIDEO_TITLE = 'Video thuyết trình — Lý Luận Nhận Thức'
const VIDEO_SUB   = 'FPT University · MLN111 · Summer 2026'

export default function VideoPage() {
  return (
    <main className="video-page">
      <header className="video-header">
        <p className="video-eyebrow">Thuyết trình nhóm</p>
        <h1 className="video-title">{VIDEO_TITLE}</h1>
        <p className="video-sub">{VIDEO_SUB}</p>
      </header>

      <div className="video-stage">
        <iframe
          className="video-player"
          src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
          title={VIDEO_TITLE}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </main>
  )
}
