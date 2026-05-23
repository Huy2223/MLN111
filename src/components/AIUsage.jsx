import './AIUsage.css'

const ROWS = [
  { tool: '', purpose: '', prompt: '', result: '', edit: '' },
  { tool: '', purpose: '', prompt: '', result: '', edit: '' },
  { tool: '', purpose: '', prompt: '', result: '', edit: '' },
  { tool: '', purpose: '', prompt: '', result: '', edit: '' },
  { tool: '', purpose: '', prompt: '', result: '', edit: '' },
]

const PRINCIPLES = [
  {
    title: 'Minh bạch',
    desc: 'Nêu rõ công cụ, mục đích, prompt/yêu cầu, kết quả AI và phần nhóm chỉnh sửa.',
  },
  {
    title: 'Có trách nhiệm',
    desc: 'Thông tin AI được kiểm chứng bằng giáo trình MLN111, nghị quyết hoặc văn bản chính thống khi cần.',
  },
  {
    title: 'Sáng tạo',
    desc: 'AI hỗ trợ xây dựng trải nghiệm học tập — nội dung cuối cùng do nhóm kiểm tra và chịu trách nhiệm.',
  },
]

export default function AIUsage() {
  return (
    <main className="ai-page">
      {/* ── Header ── */}
      <header className="ai-header">
        <p className="ai-header-eyebrow">Tính minh bạch trong học thuật</p>
        <h1 className="ai-header-title">AI Usage</h1>
        <p className="ai-header-desc">
          Nhóm dùng AI như công cụ hỗ trợ kỹ thuật, tóm tắt, truy xuất và trình bày sáng tạo.
          Mọi nội dung cuối cùng được nhóm chọn lọc, kiểm chứng và chịu trách nhiệm.
        </p>
      </header>

      {/* ── Table ── */}
      <section className="ai-section">
        <h2 className="ai-section-title">Bảng tổng hợp sử dụng AI</h2>
        <div className="ai-table-wrap">
          <table className="ai-table">
            <thead>
              <tr>
                <th>Công cụ</th>
                <th>Mục đích</th>
                <th>Prompt / Yêu cầu chính</th>
                <th>Kết quả AI</th>
                <th>Phần nhóm chỉnh sửa</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={i}>
                  <td className="ai-td-tool">{row.tool || <span className="ai-empty">—</span>}</td>
                  <td>{row.purpose || <span className="ai-empty">—</span>}</td>
                  <td>{row.prompt  || <span className="ai-empty">—</span>}</td>
                  <td>{row.result  || <span className="ai-empty">—</span>}</td>
                  <td>{row.edit    || <span className="ai-empty">—</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="ai-section">
        <div className="ai-cards">
          {PRINCIPLES.map((p) => (
            <div key={p.title} className="ai-card">
              <h3 className="ai-card-title">{p.title}</h3>
              <p className="ai-card-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Integrity note ── */}
      <section className="ai-section">
        <div className="ai-note">
          <strong>Liêm chính học thuật:</strong> Không để AI làm thay hoàn toàn.
          AI output và phần sinh viên biên soạn được phân định rõ.
          Nội dung cuối cùng do nhóm kiểm tra, chỉnh sửa và chịu trách nhiệm.
        </div>
      </section>
    </main>
  )
}
