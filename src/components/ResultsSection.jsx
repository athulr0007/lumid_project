import FadeUp from "./FadeUp";
import { caseStudies } from "../data";

export default function ResultsSection() {
  return (
    <div style={{ borderTop: "1px solid var(--border)" }}>
      <FadeUp>
        <div className="results-header">
          <h2 className="results-title">Results that move businesses forward.</h2>
          <div className="results-desc">From startups to global enterprises, our clients trust Source<sup>®</sup> to build automation strategies that create efficiency and long-term value.</div>
        </div>
      </FadeUp>
      {caseStudies.map((cs, i) => (
        <FadeUp key={i} delay={80}>
          <div className="case-study">
            <img className="case-img" src={cs.img} alt={cs.name} />
            <div className="case-content">
              <div className="case-name">{cs.name}</div>
              <div className="case-text">{cs.text}</div>
              <div className="case-metrics">
                {cs.metrics.map((m, j) => (
                  <div key={j}>
                    <div className="case-metric-num"><div className="metric-dot" /> {m.num}</div>
                    <div className="case-metric-label">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      ))}
      <div className="see-all">See all case studies <span className="arrow-icon">↗</span></div>
    </div>
  );
}
