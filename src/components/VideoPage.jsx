import './VideoPage.css'

/* Đặt file video vào public/videos/demo.mp4
   rồi cập nhật VIDEO_SRC bên dưới */
const VIDEO_SRC = '/videos/demo.mp4'
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
        <video
          className="video-player"
          controls
          preload="metadata"
          poster=""
        >
          <source src={VIDEO_SRC} type="video/mp4" />
          Trình duyệt của bạn không hỗ trợ phát video.
        </video>
      </div>
    </main>
  )
}
