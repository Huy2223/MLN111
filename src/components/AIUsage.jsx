import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './AIUsage.css'

const EASE = [0.23, 1, 0.32, 1]

// Custom High-Quality SVG Icons for each tool
const ClaudeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2L15 8.5L22 9.5L17 14.5L18.5 21.5L12 18L5.5 21.5L7 14.5L2 9.5L9 8.5L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 7.5L13.5 11L17.5 11.5L14.5 14.5L15.3 18.5L12 16.5L8.7 18.5L9.5 14.5L6.5 11.5L10.5 11L12 7.5Z" fill="currentColor" opacity="0.3" />
    <circle cx="12" cy="13" r="2" fill="currentColor" />
  </svg>
)

const GeminiIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2C12 2 12.5 7.5 18 12C12.5 16.5 12 22 12 22C12 22 11.5 16.5 6 12C11.5 7.5 12 2 12 2Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 6C12 6 12.2 9.5 15.5 12C12.2 14.5 12 18 12 18C12 18 11.8 14.5 8.5 12C11.8 9.5 12 6 12 6Z" fill="currentColor" opacity="0.3" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
)

const NotebookLMIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 6h6M9 10h6M9 14h4" strokeLinecap="round" />
    <circle cx="17" cy="14" r="2" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.2" />
  </svg>
)

const TOOLS = [
  {
    id: 'claude',
    initial: 'C',
    name: 'Claude',
    by: 'Anthropic',
    accent: '#a060d0',
    icon: ClaudeIcon,
    purpose: 'Lập trình toàn bộ giao diện web landing page cho dự án MLN111.',
    prompt: 'Thiết kế component React + Framer Motion, animation scroll-driven 3D, layout xen kẽ triết gia, responsive mobile.',
    result: 'Code hoàn chỉnh: Hero, Intro, ScrollPairs, Scene3D (4 variants), NavBar, AIUsage, VideoPage với CSS và animation.',
    edit: 'Nhóm kiểm tra visual output, điều chỉnh nội dung, test trên nhiều thiết bị và trình duyệt.',
    log: 'system_log_v2.0.4.sh'
  },
  {
    id: 'gemini',
    initial: 'G',
    name: 'Gemini',
    by: 'Google',
    accent: '#4285f4',
    icon: GeminiIcon,
    purpose: 'Kiểm chứng nội dung triết học và xác minh nguồn gốc các trích dẫn trong trang.',
    prompt: 'Xác minh trích dẫn Marx, Lenin, Hegel, Kant trong giáo trình MLN111 Phần III.',
    result: 'Xác nhận và hiệu chỉnh trích dẫn, cung cấp ngữ cảnh bổ sung về từng trường phái.',
    edit: 'Nhóm đối chiếu với giáo trình gốc và tài liệu chính thống trước khi đưa lên trang.',
    log: 'philosophical_validator.py'
  },
  {
    id: 'notebooklm',
    initial: 'N',
    name: 'NotebookLM',
    by: 'Google',
    accent: '#34a853',
    icon: NotebookLMIcon,
    purpose: 'Tổng hợp và tra cứu tài liệu học tập từ giáo trình MLN111 Phần III.',
    prompt: 'Upload giáo trình, truy vấn: lý luận nhận thức, thực tiễn, chân lý tương đối/tuyệt đối.',
    result: 'Bản tóm tắt có trích dẫn kèm số trang cụ thể từ giáo trình.',
    edit: 'Kiểm tra từng đoạn so với PDF giáo trình. Không dùng nguyên văn khi chưa xác nhận nguồn.',
    log: 'epistemology_extractor.json'
  },
]

const PRINCIPLES = [
  { 
    title: 'Minh bạch',      
    desc: 'Nêu rõ công cụ, mục đích, prompt, kết quả AI và phần nhóm chỉnh sửa.',
    icon: (className) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.644 12.074 12.074 0 0118.998 0 1.012 1.012 0 010 .644 12.074 12.074 0 01-18.998 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  { 
    title: 'Có trách nhiệm', 
    desc: 'Thông tin AI được kiểm chứng bằng giáo trình MLN111 và văn bản chính thống.',
    icon: (className) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    )
  },
  { 
    title: 'Sáng tạo',       
    desc: 'AI hỗ trợ trải nghiệm học tập — nội dung cuối cùng do nhóm kiểm tra, chịu trách nhiệm.',
    icon: (className) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21L14.907 14.907M20.25 3.75L15.657 8.343M12.657 11.343L11.25 12.75M16.5 13.5l-2.25 2.25m-3 3L9 21M9.03 9.03l6.03-6.03m-3 6.03l3-3m-9 9l3-3m-6-6h1.5m6-3V3m-6 3l-1.5-1.5m9 9h1.5m-6 3V21M18 18l1.5 1.5m-15 0L3 18m15-15l1.5-1.5M3 3l1.5 1.5" />
      </svg>
    )
  },
]

export default function AIUsage() {
  const [activeToolId, setActiveToolId] = useState('claude')
  const activeTool = TOOLS.find(t => t.id === activeToolId) || TOOLS[0]

  return (
    <main className="aic-page">

      {/* ── Glowing decorative elements ── */}
      <div className="aic-glow-sphere aic-glow-sphere-1" />
      <div className="aic-glow-sphere aic-glow-sphere-2" />

      {/* ── Header — premium editorial ── */}
      <header className="aic-header">
        <div className="aic-header-left">
          <p className="aic-eyebrow">Tính minh bạch trong học thuật</p>
          <h1 className="aic-title">AI Usage</h1>
        </div>
        <div className="aic-header-right">
          <p className="aic-desc">
            Nhóm sử dụng trí tuệ nhân tạo như một trợ lý kỹ thuật đắc lực nhằm hiện thực hóa các ý tưởng trình bày và tóm lược thông tin một cách trực quan, sinh động nhất.
          </p>
          <div className="aic-header-divider" />
        </div>
      </header>

      {/* ── Interactive Console Section ── */}
      <section className="aic-console-section">
        <div className="aic-console-container">
          
          {/* Left panel: Selector cards */}
          <div className="aic-console-selector">
            <div className="aic-selector-header">
              <span className="aic-sel-title">Công cụ được dùng</span>
              <span className="aic-sel-count">{TOOLS.length} active</span>
            </div>
            
            <div className="aic-selector-list">
              {TOOLS.map((tool) => {
                const ToolIconComponent = tool.icon
                const isActive = tool.id === activeToolId
                return (
                  <button
                    key={tool.id}
                    onClick={() => setActiveToolId(tool.id)}
                    className={`aic-selector-card ${isActive ? 'aic-selector-card--active' : ''}`}
                    style={{ '--accent-color': tool.accent }}
                  >
                    <div className="aic-sel-card-glow" />
                    <div className="aic-sel-card-inner">
                      <div className="aic-sel-card-logo">
                        <ToolIconComponent className="aic-sel-svg" />
                      </div>
                      <div className="aic-sel-card-meta">
                        <div className="aic-sel-card-name">{tool.name}</div>
                        <div className="aic-sel-card-by">{tool.by}</div>
                      </div>
                      <div className="aic-sel-card-arrow">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                    {isActive && (
                      <motion.div 
                        className="aic-selector-indicator" 
                        layoutId="activeIndicator"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right panel: Active Workspace */}
          <div className="aic-console-workspace">
            
            {/* Terminal Header */}
            <div className="aic-workspace-header">
              <div className="aic-mac-dots">
                <span className="aic-dot aic-dot-red" />
                <span className="aic-dot aic-dot-yellow" />
                <span className="aic-dot aic-dot-green" />
              </div>
              <div className="aic-workspace-tab">
                <span className="aic-tab-icon">📄</span>
                <span className="aic-tab-label">{activeTool.log}</span>
              </div>
              <div className="aic-workspace-status">
                <span className="aic-status-dot" style={{ backgroundColor: activeTool.accent }} />
                <span className="aic-status-text">Connected</span>
              </div>
            </div>

            {/* Dynamic workspace content with transition */}
            <div className="aic-workspace-body">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTool.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="aic-workspace-inner"
                  style={{ '--accent-color': activeTool.accent }}
                >
                  
                  {/* Objective (Mục đích) */}
                  <div className="aic-work-block aic-work-block--full">
                    <div className="aic-block-header">
                      <span className="aic-block-badge">GOAL</span>
                      <h4 className="aic-block-title">Mục Đích Sử Dụng</h4>
                    </div>
                    <p className="aic-block-content aic-purpose-text">
                      {activeTool.purpose}
                    </p>
                  </div>

                  {/* Prompt Console (Prompt/Yêu cầu) */}
                  <div className="aic-work-block aic-work-block--full">
                    <div className="aic-block-header">
                      <span className="aic-block-badge aic-badge-blue">PROMPT</span>
                      <h4 className="aic-block-title">Yêu Cầu & Kỹ Thuật Truy Vấn</h4>
                    </div>
                    <div className="aic-prompt-console">
                      <div className="aic-console-line">
                        <span className="aic-console-prompt">&gt; initiate_query --tool={activeTool.id.toUpperCase()}</span>
                      </div>
                      <div className="aic-console-line">
                        <span className="aic-console-prompt-label">prompt_payload:</span>
                        <span className="aic-console-prompt-text">"{activeTool.prompt}"</span>
                      </div>
                      <div className="aic-console-cursor" />
                    </div>
                  </div>

                  {/* Co-Creation Flow (AI output vs Human Refinement) */}
                  <div className="aic-cocreation-flow">
                    
                    {/* Left node: AI Generated */}
                    <div className="aic-flow-node aic-flow-node--ai">
                      <div className="aic-node-header">
                        <div className="aic-node-icon-wrap">🤖</div>
                        <div className="aic-node-meta">
                          <span className="aic-node-label">AI Output</span>
                          <span className="aic-node-sub">Generated Draft</span>
                        </div>
                      </div>
                      <div className="aic-node-content">
                        <p>{activeTool.result}</p>
                      </div>
                    </div>

                    {/* Central separator / arrow */}
                    <div className="aic-flow-connector">
                      <div className="aic-connector-line" />
                      <div className="aic-connector-arrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" className="plus-icon" />
                        </svg>
                      </div>
                      <span className="aic-connector-text">Refinement</span>
                      <div className="aic-connector-line" />
                    </div>

                    {/* Right node: Human Refinement */}
                    <div className="aic-flow-node aic-flow-node--human">
                      <div className="aic-node-header">
                        <div className="aic-node-icon-wrap">✍️</div>
                        <div className="aic-node-meta">
                          <span className="aic-node-label">Nhóm Hiệu Chỉnh</span>
                          <span className="aic-node-sub">Human-Verified</span>
                        </div>
                      </div>
                      <div className="aic-node-content">
                        <p>{activeTool.edit}</p>
                      </div>
                    </div>

                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* ── Principles Section ── */}
      <section className="aic-principles-section">
        <div className="aic-principles-header">
          <p className="aic-prin-eyebrow">Cam kết bền vững</p>
          <h2 className="aic-prin-title">Nguyên Tắc Ứng Dụng AI</h2>
        </div>

        <div className="aic-principles-grid">
          {PRINCIPLES.map((p, i) => {
            const PrincipleIcon = p.icon
            return (
              <motion.div
                key={p.title}
                className="aic-principle-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div className="aic-prin-card-glow" />
                <div className="aic-prin-card-inner">
                  <div className="aic-prin-icon-container">
                    {PrincipleIcon('aic-prin-svg')}
                  </div>
                  <h3 className="aic-prin-card-title">{p.title}</h3>
                  <p className="aic-prin-card-desc">{p.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── Academic Integrity Seal ── */}
      <section className="aic-integrity-section">
        <motion.div 
          className="aic-integrity-banner"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="aic-integrity-border-decor" />
          <div className="aic-integrity-inner">
            <div className="aic-integrity-seal">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="50" cy="50" r="44" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="38" />
                <path d="M35 48h30M35 54h30M45 42h10M48 60l2 2l4-4" strokeLinecap="round" />
                <path d="M50 22v6M50 72v6M22 50h6M72 50h6" strokeLinecap="round" />
              </svg>
            </div>
            <div className="aic-integrity-meta">
              <h3 className="aic-integrity-title">Cam Kết Liêm Chính Học Thuật</h3>
              <p className="aic-integrity-desc">
                Chúng tôi tuyệt đối tuân thủ các quy tắc liêm chính trong môi trường đào tạo đại học. Không lạm dụng AI để làm thay hoàn toàn hay che giấu nguồn gốc sản phẩm. AI được phân định rõ ràng như một trợ lý và mọi nội dung cuối cùng đều do thành viên trong nhóm trực tiếp nghiên cứu, đối chiếu giáo trình gốc và chịu trách nhiệm cao nhất về học thuật.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  )
}
