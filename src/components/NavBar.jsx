import './NavBar.css'

export default function NavBar({ view, setView }) {
  return (
    <nav className="site-nav">
      <button
        className="site-nav-brand"
        onClick={() => setView('home')}
        aria-label="Về trang chính"
      >
        <span className="site-nav-brand-label">MLN111</span>
        <span className="site-nav-brand-sub">Lý Luận Nhận Thức</span>
      </button>

      <div className="site-nav-tabs">
        <button
          className={`site-nav-tab ${view === 'video' ? 'site-nav-tab--active' : ''}`}
          onClick={() => setView('video')}
        >
          Video
        </button>
        <button
          className={`site-nav-tab ${view === 'ai-usage' ? 'site-nav-tab--active' : ''}`}
          onClick={() => setView('ai-usage')}
        >
          AI Usage
        </button>
      </div>
    </nav>
  )
}
