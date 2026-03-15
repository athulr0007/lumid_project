import { team } from "../data";

export default function TeamSection() {
  return (
    <div className="team">
      <div className="team-header">
        <h2 className="team-title">Global Talent, Unified Vision.</h2>
        <div className="team-desc">From London to Tokyo, our specialists collaborate seamlessly to design smarter, faster, and more human AI systems.</div>
      </div>
      <div className="team-grid">
        {team.map((m, i) => (
          <div key={i} className="team-card">
            <div className="team-img-wrap"><img className="team-img" src={m.img} alt={m.name} /></div>
            <div className="team-info">
              <div className="team-card-header">
                <div className={`team-dept ${m.color === "blue" ? "team-dept-dark" : ""}`}>
                  <div className="dept-dot" style={{ background: m.color === "green" ? "var(--green)" : "var(--blue)" }} /> {m.dept}
                </div>
                <div className="team-lightning">⚡</div>
              </div>
              <div className="team-name">{m.name} <span style={{ color: "var(--green)" }}>✓</span></div>
              <div className="team-role">{m.role}</div>
              <div className="team-bar-row">
                <div className="team-bars">
                  {m.bars.map((b, j) => <div key={j} className={`bar ${b ? "" : "light"}`} />)}
                </div>
                <div className="team-location">{m.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="team-controls">
        <button className="team-btn">←</button>
        <button className="team-btn">→</button>
        <div className="see-experts">See all experts <span className="arrow-icon">↗</span></div>
      </div>
    </div>
  );
}
